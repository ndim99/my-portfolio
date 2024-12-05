import React from "react";
import Image from "next/image";
import ThemeButton from "./ThemeButton";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-200 dark:bg-gray-800 text-black dark:text-white shadow-md 2xl:py-4 lg:py-3 py-2.5 2xl:px-5 lg:px-4 px-3 flex items-center justify-between border-b border-gray-300 dark:border-gray-600">
      <div className="flex items-center 2xl:gap-5 lg:gap-4 gap-3">
        <div className="flex items-center 2xl:gap-3 lg:gap-2.5 gap-2">
          <Image
            src={"/nikola.png"}
            alt=""
            width={32}
            height={32}
            className="2xl:w-[36px] 2xl:h-[36px] lg:w-[32px] lg:h-[32px] w-[28px] h-[28px] rounded-full"
          />
          <Link
            href={"/"}
            className="fontSizeFrom3xl text-primary-colors font-semibold"
          >
            My Portfolio
          </Link>
        </div>
        <div className="flex items-center 2xl:gap-3 lg:gap-2.5 gap-2 fontSizeFromLg font-semibold text-primary-colors">
          <Link href={"/data-fetching"} className="link">
            Data Fetch
          </Link>
          <Link href={"/auth"} className="link">
            Authentication
          </Link>
        </div>
      </div>
      <div className="flex space-x-4">
        <ThemeButton />
      </div>
    </header>
  );
}
