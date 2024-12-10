import Container from "@/components/Container";
import Link from "next/link";
import Image from "next/image";
import HomeBox from "@/components/HomePageBox";

export default function Home() {
  return (
    <Container>
      <h1 className="fontSizeFrom3xl font-bold text-primary-colors text-center">
        Welcome to My Portfolio
      </h1>

      <div className="xl:w-3/4 w-full flex flex-col 2xl:gap-8 lg:gap-7 gap-6 mx-auto">
        <HomeBox
          img={"/data-fetching.png"}
          title={"Data Fetching in Next.js"}
          description={
            "This example demonstrates various data fetching strategies in Next.js, including client-side fetching, React Query integration, and server-side fetching with getServerSideProps. It highlights the ability to fetch real-time token data from the CoinGecko API, providing a seamless user experience with automatic handling of loading, error states, and background updates for real-time information."
          }
          link={"/data-fetching"}
        />

        <HomeBox
          img={"/auth.png"}
          title={"Authentication with Next.js"}
          description={
            "This example showcases the implementation of secure user authentication using Next.js, integrating Privy for decentralized authentication and Next.js for additional functionality. It also demonstrates how real-time token data can be fetched and displayed, ensuring a smooth authentication flow with dynamic content. This example emphasizes the use of modern authentication techniques in web3 applications."
          }
          link={"/auth"}
          order
        />
      </div>
    </Container>
  );
}
