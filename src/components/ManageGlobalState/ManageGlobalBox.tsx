import { ReactNode } from "react";
import CodeSnippet from "../CodeSnippet";

interface ManageGlobalBoxProps {
  title: string;
  explanationText: string;
  exampleText: string;
  codeForSnippet: string;
  children?: ReactNode;
}

export default function ManageGlobalBox({
  title,
  explanationText,
  exampleText,
  codeForSnippet,
  children,
}: ManageGlobalBoxProps) {
  return (
    <div className="2xl:w-1/3 w-full flex flex-col 2xl:gap-6 lg:gap-5 gap-4 2xl:p-5 lg:p-4 p-3 rounded-lg shadow-md bg-white dark:bg-black">
      <div className="flex flex-col gap-2">
        <h2 className="fontSizeFromXl font-bold text-primary-colors">
          {title}
        </h2>
        <div className="flex flex-col 2xl:gap-4 gap-3">
          <p className="fontSizeFromLg text-secondary-colors">
            {explanationText}
          </p>
          {children}
          <p className="fontSizeFromLg text-secondary-colors">{exampleText}</p>
          <CodeSnippet language="typescript" code={codeForSnippet} />
        </div>
      </div>
    </div>
  );
}
