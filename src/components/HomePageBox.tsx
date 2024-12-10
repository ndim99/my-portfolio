import Image from "next/image";
import Link from "next/link";

interface HomeBoxProps {
  img: string;
  title: string;
  description: string;
  link: string;
  order?: boolean;
}
export default function HomeBox({
  img,
  title,
  description,
  link,
  order,
}: HomeBoxProps) {
  return (
    <div
      className={`xl:w-[95%] w-full flex xl:flex-row flex-col rounded-lg shadow-md bg-white dark:bg-black ${
        order ? "justify-end ml-auto" : "justify-start"
      }`}
    >
      <Image
        src={img}
        alt="ss"
        width={600}
        height={600}
        className={`h-auto w-auto object-cover ${
          order
            ? "xl:order-2 rounded-tr-lg rounded-br-lg"
            : "xl:order-1 rounded-tl-lg rounded-bl-lg"
        }`}
      />
      <div
        className={`flex flex-col 2xl:gap-4 gap-3 2xl:p-6 lg:p-5 p-4 w-full ${
          order ? "xl:order-1" : "xl:order-2"
        }`}
      >
        <h2 className="fontSizeFrom2xl font-semibold text-primary-colors mb-3">
          {title}
        </h2>
        <p className="fontSizeFromLg text-secondary-colors mb-3">
          {description}
        </p>
        <Link href={link} className="button">
          View More
        </Link>
      </div>
    </div>
  );
}
