import LogoutButton from "@/components/Auth/Next/LogoutButton";
import { logoutButton, logoutSourceCode } from "@/components/CodeFоrSnippet";
import CodeSnippet from "@/components/CodeSnippet";
import Container from "@/components/Container";

export default function NextProtectedPage() {
  return (
    <Container className="flex flex-col items-center gap-5 mx-auto text-center">
      <h1 className="fontSizeFromXl text-primary-colors font-bold">
        Welcome to the protected page!
      </h1>
      <p className="text-secondary-colors">
        Click the logout button below to log out and return to the previous
        page.
      </p>

      <LogoutButton />
      <div className="w-full flex flex-col mx-auto 2xl:gap-8 lg:gap-7 gap-6 2xl:p-6 lg:p-5 p-4 max-w-5xl rounded-lg shadow-md bg-white dark:bg-black">
        <div className="flex flex-col gap-2">
          <h2 className="fontSizeFromXl font-bold text-primary-colors">
            Implementing the Logout Button
          </h2>
          <p className="fontSizeFromLg text-secondary-colors">
            The <b>LogoutButton</b> component triggers the logout process. When
            clicked, it calls the `/api/logout` route to clear the
            authentication session. After a successful logout, the user is
            redirected to the login page.
          </p>
          <p className="fontSizeFromLg text-secondary-colors">
            The code below defines a LogoutButton component.
          </p>
          <CodeSnippet language="typescript" code={logoutButton} />
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="fontSizeFromXl font-bold text-primary-colors">
            Implementing the Logout API
          </h2>
          <p className="fontSizeFromLg text-secondary-colors">
            The logout API route clears the `auth` cookie, removing the user's
            JWT or session token, and confirms the logout action.
          </p>
          <p className="fontSizeFromLg text-secondary-colors">
            The code below shows how the logout API route works.
          </p>
          <CodeSnippet language="typescript" code={logoutSourceCode} />
        </div>
      </div>
    </Container>
  );
}
