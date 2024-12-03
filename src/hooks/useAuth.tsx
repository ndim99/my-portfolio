import { useEffect } from "react";
import { usePrivy } from "@privy-io/react-auth";
import { useRouter } from "next/router";

export default function useAuth(Component: React.ComponentType) {
  return (props: any) => {
    const { login, authenticated } = usePrivy();
    const router = useRouter();

    useEffect(() => {
      // If the user is not authenticated, redirect them to the auth page
      if (!authenticated) {
        router.push("/auth"); // Redirect unauthenticated users to the auth page
        login(); // Optionally trigger the login process after redirecting
      }
    }, [authenticated, router]); // Dependency array ensures this effect runs when authentication status or router changes

    // If the user is authenticated, render the protected page component
    if (authenticated) {
      return <Component {...props} />;
    }

    // If the user is not authenticated, return null to prevent rendering the page
    return null;
  };
}
