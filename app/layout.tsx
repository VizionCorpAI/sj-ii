import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VIZION | Inner Cosmos",
  description:
    "A 3D personal portfolio where systems, creativity, and identity orbit inside a crystal mind."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
