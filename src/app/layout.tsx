import type { Metadata } from "next";
import { Lilita_One } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Lilita_One({ weight: "400", subsets: ["latin-ext"] });

export const metadata: Metadata = {
  title: "Yellow Penguin Games",
  description: "Yellow Penguin Games",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en " className="dark">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
