import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Visuo - Financial Control",
  description: "Enhance your financial control with Visuo's intuitive, scalable SaaS platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
