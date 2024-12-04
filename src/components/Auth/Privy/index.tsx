import {
  privySourceCode,
  protectedPageSourceCode,
  useAuthSourceCode,
} from "@/components/CodeFоrSnippet";
import CodeSnippet from "@/components/CodeSnippet";
import Link from "next/link";
import LoginLogoutPrivy from "./LoginLogoutPrivy";

export default function PrivyBox() {
  return (
    <div className="lg:w-1/2 w-full flex flex-col mx-auto 2xl:gap-8 lg:gap-7 gap-6 2xl:p-6 lg:p-5 p-4 max-w-5xl rounded-lg shadow-md bg-white dark:bg-black">
      {/* Section: Why Use Privy */}
      <div className="flex flex-col gap-4">
        <h1 className="fontSizeFrom2xl text-primary-colors font-bold text-center">
          Why I Integrated Privy for Authentication Across Several Applications
        </h1>
        <ul className="list-disc text-secondary-colors fontSizeFromLg flex flex-col gap-2 pl-6">
          <li>
            <b>Efficient Authentication Management:</b> Privy simplifies
            authentication checks, providing a robust way to manage user access
            in applications.
          </li>
          <li>
            <b>Web3 Integration:</b> Offers seamless wallet-based authentication
            for Web3 projects alongside traditional methods like email,
            enhancing versatility.
          </li>
          <li>
            <b>Security and Privacy:</b> Ensures sensitive user data, such as
            wallet addresses and emails, is securely managed, fostering trust.
          </li>
          <li>
            <b>Developer-Friendly:</b> Its intuitive API and implementation save
            time, making it easier to build secure, user-friendly sign-up and
            login flows.
          </li>
        </ul>
      </div>

      {/* Section: Login and Logout Functionality */}
      <div className="flex flex-col gap-2">
        <h2 className="fontSizeFromXl font-bold text-primary-colors">
          Login and Logout Functionality with Privy
        </h2>
        <div className="flex flex-col 2xl:gap-4 gap-3">
          <p className="fontSizeFromLg text-secondary-colors">
            Below is an example demonstrating how Privy handles user
            authentication. Upon logging in, additional user information, such
            as their profile details or account status, becomes accessible
            alongside the login and logout functionality.
          </p>
          {/* PrivyBox component for authentication demonstration */}
          <LoginLogoutPrivy />
          <CodeSnippet language="typescript" code={privySourceCode} />
        </div>
      </div>

      {/* Section: Custom Hook for Authentication */}
      <div className="flex flex-col gap-2">
        <h2 className="fontSizeFromXl font-semibold text-primary-colors">
          Custom Hook for Authentication
        </h2>
        <div className="flex flex-col 2xl:gap-4 gap-3">
          <p className="text-secondary-colors fontSizeFromLg">
            A custom hook is used to encapsulate the authentication logic for
            the following reasons:
          </p>
          <ul className="list-disc pl-6 text-secondary-colors fontSizeFromLg flex flex-col gap-2">
            <li>
              <b>Reusability:</b> The hook centralizes the logic for
              authentication and redirection, making it reusable across multiple
              components or pages.
            </li>
            <li>
              <b>Separation of Concerns:</b> Keeps the code for components and
              pages focused on rendering the UI, while delegating complex
              authentication logic to the hook.
            </li>
            <li>
              <b>Scalability:</b> Simplifies maintenance and extension by
              isolating logic, allowing you to adapt it without affecting
              individual components.
            </li>
          </ul>
          <p className="text-secondary-colors fontSizeFromLg">
            Below is the implementation of the custom hook:
          </p>
          <CodeSnippet language="typescript" code={useAuthSourceCode} />
        </div>
      </div>

      {/* Section: Protected Page Example */}
      <div className="flex flex-col gap-2">
        <h2 className="fontSizeFromXl font-bold text-primary-colors">
          Protected Page Example
        </h2>
        <div className="flex flex-col 2xl:gap-4 gap-3">
          <p className="fontSizeFromLg text-secondary-colors">
            This example demonstrates a protected page that requires
            authentication. Users who are not authenticated are automatically
            redirected, ensuring secure access control.
          </p>
          <Link
            href="/auth/protected"
            className="text-blue-500 hover:underline inline-block fontSizeFromLg"
          >
            Access Protected Page
          </Link>
          <CodeSnippet language="typescript" code={protectedPageSourceCode} />
        </div>
      </div>
    </div>
  );
}
