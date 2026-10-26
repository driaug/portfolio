// Stylesheets
import "../../styles/index.css";

// Imports
import React from "react";
import type { Metadata, Viewport } from "next";
import { schema } from "./schema";

const DESCRIPTION =
  "Belgian entrepreneur and software engineer, founder of Plunk, the open-source email platform, and Swyp, automated procurement for European dentists.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.driaug.com"),
  title: "Dries Augustyns",
  description: DESCRIPTION,
  alternates: {
    canonical: "https://www.driaug.com/",
  },
  openGraph: {
    title: "Dries Augustyns",
    url: "https://www.driaug.com/",
    description: DESCRIPTION,
    images: [
      {
        url: "https://www.driaug.com/assets/card.png",
        alt: "Dries Augustyns",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@driaug_",
    creator: "@driaug_",
  },
  icons: {
    icon: [
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: { url: "/favicon/apple-touch-icon.png", sizes: "180x180" },
    shortcut: "/favicon/favicon.ico",
    other: {
      rel: "mask-icon",
      url: "/favicon/safari-pinned-tab.svg",
      color: "#262626",
    },
  },
  manifest: "/favicon/site.webmanifest",
  other: {
    "msapplication-TileColor": "#f9f7f4",
    "msapplication-config": "/favicon/browserconfig.xml",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

/**
 * Root layout that houses all pages
 *
 * @param props Props
 * @param props.children Page content
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className={"cursor-default antialiased"}>{children}</body>
    </html>
  );
}
