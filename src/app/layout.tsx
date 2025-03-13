import "./globals.css";

import type { Metadata } from "next";

import { Providers } from "@/providers/Providers";

const appUrl = process.env.NEXT_PUBLIC_URL;

const frame = {
  version: "next",
  imageUrl: `${appUrl}/image.png`,
  button: {
    title: "Mint a Map",
    action: {
      type: "launch_frame",
      name: "Farcastle Games",
      url: `${appUrl}`,
      iconImageUrl: `${appUrl}/icon.png`,
      splashImageUrl: `${appUrl}/splash.png`,
      splashBackgroundColor: "#341A34",
    },
  },
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL(`${appUrl}`),
    title: "Farcastle Games",
    openGraph: {
      title: "Farcastle Games",
      description: "Mint a Map",
      images: `${appUrl}/image.png`,
    },
    other: {
      "fc:frame": JSON.stringify(frame),
    },
  };
}

// eslint-disable-next-line import/no-default-export
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* eslint-disable-next-line @next/next/google-font-display */}
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=VT323&display=swap"
          rel="stylesheet"
        />
        <link
          rel="preload"
          href="/fonts/FetteUNZFraktur.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased scrollbar-vert">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
