import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Zonara | E-Commerce",
  description: "E-Commerce Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
