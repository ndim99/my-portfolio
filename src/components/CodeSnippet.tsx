import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

type CodeSnippetProps = {
  code: string;
  language: string;
};

export default function CodeSnippet({ code, language }: CodeSnippetProps) {
  const customStyle: React.CSSProperties = {
    borderRadius: "8px",
    padding: "16px",
    fontSize: "14px",
    overflowY: "auto",
    height: "300px",
    backgroundColor: "#282a36",
    border: "1px solid #44475a",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    margin: "0px 16px",
  };
  return (
    <SyntaxHighlighter
      language={language}
      style={dracula}
      customStyle={customStyle}
    >
      {code}
    </SyntaxHighlighter>
  );
}
