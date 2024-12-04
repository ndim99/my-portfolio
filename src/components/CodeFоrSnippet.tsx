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

export const loginFormSourceCode = `import { useState } from "react";
import { useRouter } from "next/router";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      router.push("/auth/nextProtected");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col 2xl:gap-4 gap-3">
      <h1 className="fontSizeFromXl text-primary-colors font-semibold">
        Login
      </h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="input"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="input"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        Login
      </button>
    </form>
  );
}
`;

export const loginEndpointSourceCode = `import { NextApiRequest, NextApiResponse } from "next";
import { createJWT } from "@/lib/session";

const testUser = {
  email: "test@test.com",
  password: "test123test",
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email, password } = req.body;

  if (email === testUser.email && password === testUser.password) {
    const token = await createJWT({ email });
    res.setHeader(
      "Set-Cookie",
      "auth={token}; HttpOnly; Path=/; Secure; SameSite=Strict"
    );
    return res.status(200).json({ message: "Login successful" });
  }

  res.status(401).json({ message: "Invalid credentials" });
}`;

export const sessionSourceCode = `import { SignJWT, jwtVerify } from "jose";

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET);
const TOKEN_EXPIRATION = "7d";

export async function createJWT(payload: Record<string, unknown>) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime(TOKEN_EXPIRATION)
    .sign(JWT_SECRET);
}

export async function verifyJWT(token: string) {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    return payload;
  } catch (error) {
    return null;
  }
}
`;

export const middlewareSourceCode = `import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyJWT } from "./lib/session";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("auth")?.value;

  if (!token) {
    if (req.nextUrl.pathname !== "/auth") {
      return NextResponse.redirect(new URL("/auth", req.url));
    }
    return NextResponse.next();
  }

  const isValid = await verifyJWT(token);
  if (!isValid) {
    return NextResponse.redirect(new URL("/auth", req.url));
  }

  if (req.nextUrl.pathname === "/auth") {
    return NextResponse.redirect(new URL("/auth/nextProtected", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/auth/nextProtected", "/auth"],
};`;

export const logoutSourceCode = `import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    res.setHeader(
      "Set-Cookie",
      "auth=; HttpOnly; Path=/; Secure; SameSite=Strict; Expires=Thu, 01 Jan 1970 00:00:00 GMT"
    );
    return res.status(200).json({ message: "Logged out successfully" });
  }

  return res.status(405).json({ message: "Method not allowed" });
}`;

export const logoutButton = `import { useRouter } from "next/router";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const res = await fetch("/api/logout", {
        method: "POST",
      });

      if (res.ok) {
        router.push("/auth");
      } else {
        console.error("Failed to log out");
      }
    } catch (error) {
      console.error("An error occurred during logout:", error);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 w-max"
    >
      Logout
    </button>
  );
}`;
