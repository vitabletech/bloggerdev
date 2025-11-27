import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";
import { ProgressProvider } from "@/contexts/ProgressContext";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blogger Theme Dev Course",
  description: "Master Blogger Theme Development",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Blogger Dev",
  },
};

export const viewport: Viewport = {
  themeColor: "#4f46e5",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ProgressProvider>
            <ClientLayout>
              {children}
            </ClientLayout>
          </ProgressProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
