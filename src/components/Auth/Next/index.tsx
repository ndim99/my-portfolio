import CodeSnippet from "@/components/CodeSnippet";
import LoginForm from "./LoginForm";
import {
  loginEndpointSourceCode,
  loginFormSourceCode,
  middlewareSourceCode,
  sessionSourceCode,
} from "@/components/CodeFоrSnippet";

export default function NextBox() {
  return (
    <div className="lg:w-1/2 w-full flex flex-col mx-auto 2xl:gap-8 lg:gap-7 gap-6 2xl:p-6 lg:p-5 p-4 max-w-5xl rounded-lg shadow-md bg-white dark:bg-black">
      <div className="flex flex-col gap-4">
        <h1 className="fontSizeFrom2xl text-primary-colors font-bold text-center">
          Authentication with Next.js and Why I Use It
        </h1>
        <ul className="list-disc text-secondary-colors fontSizeFromLg flex flex-col gap-2 pl-6">
          <li>
            <strong>Protecting Routes and Data</strong>: Authenticate users to
            restrict access to sensitive pages and ensure only authorized users
            can access protected content and interact with backend APIs.
          </li>
          <li>
            <strong>Secure User Sessions</strong>: Use tokens or cookies to
            maintain secure user sessions, ensuring users stay authenticated
            across sessions and can safely interact with the application.
          </li>
          <li>
            <strong>Client-Side Authentication and User Experience</strong>:
            Handle authentication on the client-side, providing a seamless user
            experience by redirecting users based on their authentication status
            and keeping them logged in using cookies or local storage.
          </li>
          <li>
            <strong>Scalability and Security Best Practices</strong>: Ensure
            your app scales by using client-side authentication and implementing
            security measures like HttpOnly, Secure, and SameSite cookies to
            protect against attacks like XSS and CSRF.
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="fontSizeFromXl font-bold text-primary-colors">
          Step 1: User Login Form
        </h2>
        <div className="flex flex-col 2xl:gap-4 gap-3">
          <p className="fontSizeFromLg text-secondary-colors">
            This is the login form component that handles user authentication by
            submitting the email and password to the server. When the user
            enters their credentials and clicks the login button, the form sends
            a POST request to the /api/login endpoint with the email and
            password in the request body. If the server responds with a success
            status (response.ok), the user is redirected to the protected page.
            <br /> To log in, use the following credentials: <br /> Email:
            test@test.com <br />
            Password: test123test
          </p>
          <LoginForm />
          <p className="fontSizeFromLg text-secondary-colors">
            Below is the source code for the login form implementation. It
            demonstrates how to handle user authentication and submit the login
            credentials to the server.
          </p>
          <CodeSnippet language="typescript" code={loginFormSourceCode} />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="fontSizeFromXl font-bold text-primary-colors">
          Step 2: Implementing the Login API Endpoint
        </h2>
        <div className="flex flex-col 2xl:gap-4 gap-3">
          <p className="fontSizeFromLg text-secondary-colors">
            In this step, I define an API route that handles user
            authentication. When a user submits their login credentials, the
            POST request is sent to the /api/login endpoint. This endpoint
            checks if the provided email and password match the pre-defined test
            user credentials. If the credentials are correct, a JSON Web Token
            (JWT) is created and sent as a secure HTTP-only cookie. This token
            is then used to authenticate the user on subsequent requests.
          </p>
          <p className="fontSizeFromLg text-secondary-colors">
            Below is the source code for implementing the login API endpoint.
          </p>
          <CodeSnippet language="typescript" code={loginEndpointSourceCode} />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="fontSizeFromXl font-bold text-primary-colors">
          Step 3: Implementing Session Management (JWT Creation and
          Verification)
        </h2>
        <div className="flex flex-col 2xl:gap-4 gap-3">
          <p className="fontSizeFromLg text-secondary-colors">
            In this step, we handle session management using JSON Web Tokens
            (JWTs). JWTs are used to securely authenticate users and maintain
            their sessions. This process involves two key functions:
          </p>
          <ul className="list-disc text-secondary-colors fontSizeFromLg flex flex-col gap-2 pl-6">
            <li>
              <strong>Creating a JWT</strong>: The createJWT function is
              responsible for generating a JWT using the user’s data (payload).
              It signs the token using a secret key and sets an expiration time
              for the token. This JWT is then sent back to the client, typically
              stored in an HTTP-only cookie, to maintain the user's session.
            </li>
            <li>
              <strong>Verifying a JWT</strong>: The verifyJWT function is
              responsible for verifying the authenticity of the JWT. It checks
              the token's signature using the same secret key that was used to
              create it. If the token is valid (i.e., not expired and properly
              signed), it returns the payload (user information). If the token
              is invalid or expired, it returns null.
            </li>
          </ul>
          <p className="fontSizeFromLg text-secondary-colors">
            Below is the source code for implementing session management using
            JSON Web Tokens (JWT)
          </p>
          <CodeSnippet language="typescript" code={sessionSourceCode} />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="fontSizeFromXl font-bold text-primary-colors">
          Step 4: Protecting Routes with Middleware
        </h2>
        <div className="flex flex-col 2xl:gap-4 gap-3">
          <p className="fontSizeFromLg text-secondary-colors">
            In this step, I implement middleware to protect specific routes from
            unauthorized access. The middleware checks if the user is
            authenticated by verifying the presence and validity of a JSON Web
            Token (JWT) in the cookies. If the token is valid, the user is
            allowed to access the protected route; otherwise, they are
            redirected to the login page.
          </p>
          <p className="fontSizeFromLg text-secondary-colors">
            Below is the source code for implementing route protection using
            middleware
          </p>
          <CodeSnippet language="typescript" code={middlewareSourceCode} />
        </div>
      </div>
    </div>
  );
}
