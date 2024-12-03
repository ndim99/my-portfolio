export const privySourceCode = `import React from "react";
import { usePrivy } from "@privy-io/react-auth";
import { formatHash } from "@/utils/formatting";

export default function PrivyBox() {
  // Destructuring hooks provided by Privy for authentication management.
  const { login, user, authenticated, logout } = usePrivy();

  // Function to handle user sign-up/login flow.
  const handleSignUp = async () => {
    try {
      await login(); // Triggers Privy's authentication process (email or wallet-based).
    } catch (error) {
      console.error("Error during sign up:", error); // Log any errors for debugging.
    }
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      {/* Render a sign-up button if the user is not authenticated. */}
      {!authenticated ? (
        <button
          onClick={handleSignUp} // Calls the sign-up/login flow when clicked.
          className="px-5 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600"
        >
          Sign Up with Privy
        </button>
      ) : (
        // If authenticated, show user information and a logout button.
        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg flex flex-col items-center 2xl:gap-3 gap-2.5 2xl:p-3 p-2.5">
          <h1 className="fontSizeFromLg text-primary-colors font-bold text-primary-colors">
            User Information
          </h1>
          <p className="fontSizeFromBase font-normal text-secondary-colors">
            {/* Display the user's email if available; otherwise, display the wallet address. */}
            {user?.email ? (
              <strong>Email: {user.email.address}</strong>
            ) : (
              <strong>
                Wallet address: {formatHash(user?.wallet?.address as string)}
              </strong>
            )}
          </p>
          {/* Button to log the user out. */}
          <button
            onClick={logout} // Calls the logout function to end the session.
            className="bg-red-500 text-white rounded hover:bg-red-600 px-5 py-1.5"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
`;

export const useAuthSourceCode = `import { useEffect } from "react";
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
}`;

export const protectedPageSourceCode = `import useAuth from "@/hooks/useAuth";

function ProtectedPage() {
  return (
    <div>
      <h1>Protected Content</h1>
      <p>This page is only visible to authenticated users.</p>
    </div>
  );
}
export default useAuth(ProtectedPage);`;
