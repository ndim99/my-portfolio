import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function NavMoreLink() {
  const pathname = usePathname();
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="relative md:hidden flex items-center justify-center">
      {" "}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 128 512"
        className="link w-5 h-5 cursor-pointer"
        fill="currentColor"
        onClick={() => setShowMore((prevState) => !prevState)}
      >
        <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
      </svg>
      {showMore && (
        <div className="absolute top-8 right-[1px] flex flex-col gap-2 p-2 rounded-md bg-white dark:bg-black border border-gray-300 dark:border-gray-600">
          <Link
            href={"/data-fetching"}
            className={`${
              pathname === "/data-fetching"
                ? "bg-gray-100/80 dark:bg-gray-900/80 cursor-not-allowed"
                : "bg-transparent hover:bg-gray-100 dark:hover:bg-gray-900 w-full"
            } linkForMore`}
            onClick={() => setShowMore(false)}
            aria-disabled={pathname === "/data-fetching"}
          >
            Data Fetch
          </Link>

          <Link
            href={"/auth"}
            className={`${
              pathname === "/auth"
                ? "bg-gray-100/80 dark:bg-gray-900/80 cursor-not-allowed"
                : "bg-transparent hover:bg-gray-100 dark:hover:bg-gray-900 w-full"
            } linkForMore`}
            onClick={() => setShowMore(false)}
          >
            Authentication
          </Link>
          <Link
            href={"/manage-global-state"}
            className={`${
              pathname === "/manage-global-state"
                ? "bg-gray-100/80 dark:bg-gray-900/80 cursor-not-allowed"
                : "bg-transparent hover:bg-gray-100 dark:hover:bg-gray-900 w-full"
            } linkForMore`}
            onClick={() => setShowMore(false)}
          >
            MGS with useContext
          </Link>
        </div>
      )}
    </div>
  );
}
