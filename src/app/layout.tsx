import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";
import { Toaster } from "sonner";

export const montserrat = localFont({
  src: [
    {
      path: './fonts/Montserrat-VariableFont_wght.ttf',
      weight: '100 900',
      style: 'normal',
    },
    {
      path: './fonts/Montserrat-Italic-VariableFont_wght.ttf',
      weight: '100 900',
      style: 'italic',
    }
  ],
  variable: '--font-montserrat',
  display: 'swap',
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
    <html lang="es" className="dark">
      <body className={`${montserrat.className} antialiased flex flex-col bg-black`}>
        <Toaster
          theme="dark"
          position="top-center"
        />
        <div className="w-10/12 md:w-11/12 xl:w-3/4 mx-auto">{children}</div>
      </body>
    </html>
  );
}
