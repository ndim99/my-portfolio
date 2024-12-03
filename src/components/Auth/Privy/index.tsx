import React from "react";
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
