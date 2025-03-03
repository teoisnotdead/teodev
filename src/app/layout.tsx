import type { Metadata } from "next";
import "./globals.css";

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
      <body className="font-montserrat antialiased flex flex-col bg-black">
        <div className="w-10/12 md:w-11/12 xl:w-3/4 mx-auto">{children}</div>
      </body>
    </html>
  );
}
