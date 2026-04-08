import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VIZION",
  description: "A cinematic 3D portfolio entrypoint built around the sentinel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
