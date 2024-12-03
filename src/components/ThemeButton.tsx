import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeButton() {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted ? (
    <>
      {theme === "dark" && (
        <button
          onClick={() => setTheme("light")}
          className="bg-gray-700 hover:bg-gray-500 text-black dark:text-white 2xl:py-2 py-1.5 2xl:px-4 px-3 rounded-md outline-0"
        >
          Light Theme
        </button>
      )}
      {theme === "light" && (
        <button
          onClick={() => setTheme("dark")}
          className="bg-gray-100 hover:bg-gray-300 text-black 2xl:py-2 py-1.5 2xl:px-4 px-3 rounded-md outline-0"
        >
          Dark Theme
        </button>
      )}
    </>
  ) : (
    <div className="w-full hoverItemRow h-[34px] rounded-md border border-transparent" />
  );
}
