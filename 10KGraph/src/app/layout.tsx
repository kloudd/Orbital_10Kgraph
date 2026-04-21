import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "10kgraph — AI-Native Hedge Fund OS",
  description:
    "A swarm of AI agents that reads every filing, debates every thesis, and trades with conviction. Built for the funds that will define the next decade.",
  openGraph: {
    title: "10kgraph",
    description: "AI-Native Hedge Fund Operating System",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen antialiased">
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XD8D0K5FXF"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XD8D0K5FXF');
          `}
        </Script>
      </body>
    </html>
  );
}
