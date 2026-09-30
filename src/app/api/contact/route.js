import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const web3Key = process.env.WEB3FORMS_ACCESS_KEY;
    const resendKey = process.env.RESEND_API_KEY;

    // 1. If Web3Forms Access Key is provided in .env.local
    if (web3Key) {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: web3Key,
          name,
          email,
          subject: `[Portfolio Contact] ${subject}`,
          message,
          replyto: email,
          from_name: name,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        console.error("Web3Forms API error:", data);
        return NextResponse.json(
          { error: data.message || "Failed to send email via Web3Forms." },
          { status: 500 }
        );
      }

      return NextResponse.json(
        { success: true, message: "Email sent successfully!" },
        { status: 200 }
      );
    }

    // 2. If Resend API Key is provided in .env.local
    if (resendKey && resendKey !== "your_resend_api_key_here") {
      const resend = new Resend(resendKey);
      const { data, error } = await resend.emails.send({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: ["eyasinwebdev@gmail.com"],
        replyTo: email,
        subject: `[Portfolio Contact] ${subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; line-height: 1.6; max-width: 600px; border: 1px solid #eee; border-radius: 8px;">
            <h2 style="color: #ef4444; border-bottom: 2px solid #ef4444; padding-bottom: 8px;">New Portfolio Message</h2>
            <p><strong>Sender Name:</strong> ${name}</p>
            <p><strong>Sender Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Subject:</strong> ${subject}</p>
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
            <p><strong>Message:</strong></p>
            <div style="background-color: #f9fafb; padding: 15px; border-radius: 6px; white-space: pre-wrap; font-size: 14px;">${message}</div>
          </div>
        `,
      });

      if (error) {
        console.error("Resend API error:", error);
        return NextResponse.json(
          { error: error.message || "Failed to send email via Resend." },
          { status: 500 }
        );
      }

      return NextResponse.json(
        { success: true, message: "Email sent successfully!", data },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { error: "No valid API Key found in .env.local" },
      { status: 500 }
    );
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json(
      { error: "Internal server error while sending email." },
      { status: 500 }
    );
  }
}
