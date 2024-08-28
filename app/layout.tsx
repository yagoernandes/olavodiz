import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Olavo disse hoje",
  description:
    "Seleção de melhores frases do professor Olavo de Carvalho, atualizadas diariamente.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-7DWNTK36BC"
        strategy="afterInteractive"
      />

      <Script strategy="afterInteractive" id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-7DWNTK36BC');
        `}
      </Script>
    </html>
  );
}
