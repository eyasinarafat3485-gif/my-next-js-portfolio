"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { AiFillSun } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() =>
        setTheme(theme === "dark" ? "light" : "dark")
      }
      className=" p-2 rounded-md md:rounded-full
   hover:ring-4 hover:ring-red-500 text-black dark:text-red-500 ring-1 ring-red-500 via-slate-100 dark:from-black dark:via-slate-800
    transition-all duration-200  hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]  active:scale-95  cursor-pointer">
      {theme === "dark" ? <AiFillSun /> : <FaMoon />}
    </button>
  )
};

export default ThemeToggle;