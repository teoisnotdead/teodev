import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";
import { Toaster } from "sonner";

const montserrat = localFont({
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
  title: "TEODEV | Desarrollo Web",
  description: "Soluciones web de alta calidad, impulsadas por innovación y compromiso.",
  keywords: ["Desarrollo Web", "Fullstack Developer", "Next.js", "React", "Soluciones Web"],
  authors: [{ name: "Alfredo Saavedra", url: "https://teodev.cl" }],
  creator: "Alfredo Saavedra",
  publisher: "TEODEV",
  metadataBase: new URL("https://teodev.cl"),
  alternates: {
    canonical: "https://teodev.cl",
  },
  openGraph: {
    title: "TEODEV | Desarrollo Web",
    description: "Soluciones web de alta calidad, impulsadas por innovación y compromiso.",
    url: "https://teodev.cl",
    siteName: "TEODEV",
    images: [
      {
        url: "/images/seo/banner.png",
        width: 1200,
        height: 630,
        alt: "TEODEV - Desarrollo Web",
      },
    ],
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TEODEV | Desarrollo Web",
    description: "Soluciones web de alta calidad, impulsadas por innovación y compromiso.",
    images: ["/images/seo/banner.png"],
    site: "@teoisnotdead",
    creator: "@teoisnotdead",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <meta name="theme-color" content="#f19f00" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" sizes="180x180" href="/images/icons/apple-touch-icon.png" />
      <body className={`${montserrat.className} antialiased flex flex-col`}>
        <Toaster theme="dark" position="top-center" />

        <div className="w-full max-w-[1280px] mx-auto px-4 md:px-8">
          {children}
        </div>
      </body>
    </html>
  );
}
