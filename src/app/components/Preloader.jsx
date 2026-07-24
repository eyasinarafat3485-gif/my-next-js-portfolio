"use client";

import { useState, useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner";

export default function Preloader({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // ২ সেকেন্ডের টাইমার সেট করা হলো
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <LoadingSpinner />}
      {children}
    </>
  );
}