import Head from "next/head";
import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div className="ocean">
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
        <main>{children}</main>
      </body>
    </html>
  );
}
