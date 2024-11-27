import type { Metadata } from "next";
import { Montserrat } from 'next/font/google'
import "./globals.css";
import ClientThemeProvider from "./components/ClientThemeProvider";

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TEODEV",
  description: "Soluciones web de alta calidad, impulsadas por innovación y compromiso.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${montserrat.className} antialiased flex flex-col bg-white dark:bg-black`}>
        <div className="w-10/12 md:w-11/12 xl:w-3/4 mx-auto">
          <ClientThemeProvider>
            {children}
          </ClientThemeProvider>
        </div>
      </body>
    </html>
  );
}
