import React from "react";
import Image from "next/image";
import ThemeButton from "./ThemeButton";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavMoreLink from "./NavMoreLink";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="bg-gray-200 dark:bg-gray-800 text-black dark:text-white shadow-md lg:py-3 py-2.5 2xl:px-5 lg:px-4 px-3 flex items-center justify-between border-b border-gray-300 dark:border-gray-600">
      <div className="flex items-center 2xl:gap-8 lg:gap-6 gap-4">
        <div className="flex items-center 2xl:gap-3 lg:gap-2.5 gap-2">
          <Image
            src={"/nikola.png"}
            alt="nikola"
            width={32}
            height={32}
            className="2xl:w-[36px] 2xl:h-[36px] lg:w-[32px] lg:h-[32px] w-[28px] h-[28px] rounded-full"
          />
          <Link
            href={"/"}
            className="fontSizeFrom2xl text-secondary-colors font-semibold"
          >
            My Portfolio
          </Link>
        </div>
        <div className="md:flex hidden items-center 2xl:gap-5 lg:gap-4 gap-3">
          <Link
            href={"/data-fetching"}
            className={`link ${
              pathname === "/data-fetching" ? "text-primary-colors" : ""
            }`}
          >
            Data Fetch
          </Link>
          <Link
            href={"/auth"}
            className={`link ${
              pathname === "/auth" ? "text-primary-colors" : ""
            }`}
          >
            Authentication
          </Link>
          <Link
            href={"/manage-global-state"}
            className={`link ${
              pathname === "/manage-global-state" ? "text-primary-colors" : ""
            }`}
          >
            MGS with useContext
          </Link>
        </div>
      </div>
      <div className="flex gap-2.5 items-center">
        <ThemeButton />
        <NavMoreLink />
      </div>
    </header>
  );
}
