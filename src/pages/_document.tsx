import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";

export default class MyDocument extends Document {
  public render() {
    return (
      <Html lang="en">
        <Head>
          {/* Start fonts */}
          <link rel="stylesheet" href={"https://rsms.me/inter/inter.css"} />
          <link
            rel="stylesheet"
            href="http://fonts.cdnfonts.com/css/circular-std"
          />
          {/* End fonts */}

          {/* Start favicon */}
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/favicon/safari-pinned-tab.svg"
            color="#1f1f1f"
          />
          <link rel="shortcut icon" href="/favicon/favicon.ico" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta
            name="msapplication-config"
            content="/favicon/browserconfig.xml"
          />
          <meta name="theme-color" content="#4F58F5" />
          {/* End favicon */}
        </Head>
        <body className={"cursor-default antialiased"}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
