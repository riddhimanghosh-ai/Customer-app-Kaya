import type { Metadata } from "next";
import "./globals.css";
import ViewToggle from "./components/ViewToggle";

export const metadata: Metadata = {
  title: "Kaya Patient Portal - Expert Dermatology Care",
  description: "Manage your skin health with Kaya's patient portal. Access medical records, track treatment progress, and schedule appointments with expert dermatologists.",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@300;400;500;600;700&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,500;1,8..60,400&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col">{children}<ViewToggle /></body>
    </html>
  );
}
