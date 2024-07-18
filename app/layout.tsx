import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fisher Men",
  description:
    "Explore a wide range of high-quality fishing equipment at Fishermen.com From rods and reels to tackle and bait, we've got everything you need for your next big catch. Shop now and gear up for an unforgettable fishing adventure!",
};

// Side menu for nested categories
// Product page
// Product card
// Search logic
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body suppressHydrationWarning className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
