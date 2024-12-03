import { PrivyProvider } from "@privy-io/react-auth";
import { useTheme } from "next-themes";
import { ReactNode } from "react";

export default function PrivyProviderWrapper({
  children,
}: {
  children: ReactNode;
}) {
  const { theme } = useTheme();
  return (
    <PrivyProvider
      appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID as string}
      config={{
        appearance: {
          // Defaults to the logo you set in the Dashboard
          landingHeader: "Log in or Sign up",
          theme: theme === "dark" ? "dark" : "light",
        },
      }}
    >
      {children}
    </PrivyProvider>
  );
}
