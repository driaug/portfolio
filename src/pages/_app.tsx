// Stylesheets
import "../../styles/index.css";

// Imports
import React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import Script from "next/script";

/**
 * Main app component
 *
 * @param props Props
 * @param props.Component App component
 * @param props.pageProps
 */
function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Dries Augustyns</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
          key={"viewport"}
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

/**
 * Main app root component that houses all components
 *
 * @param props Default nextjs props
 */
export default function WithProviders(props: AppProps) {
  return (
    <>
      <DefaultSeo
        defaultTitle={"Dries Augustyns"}
        title={"Dries Augustyns"}
        description={"I build solutions that solve problems."}
        twitter={{
          cardType: "summary_large_image",
          handle: "@driaug_",
          site: "@driaug_",
        }}
        openGraph={{
          title: "Dries Augustyns",
          description: "I build solutions that solve problems.",
          images: [
            {
              url: "https://www.driaug.com/assets/card.png",
              alt: "Dries Augustyns",
            },
          ],
        }}
        additionalMetaTags={[
          {
            property: "title",
            content: "Dries Augustyns",
          },
          {
            property: "keywords",
            content: "dries,augustyns,dries augustyns",
          },
        ]}
      />

      <Script
        id={`person-schema`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Person",
            name: "Dries Augustyns",
            url: "https://www.driaug.com",
            image: "https://www.driaug.com/assets/headshot.jpg",
            jobTitle: "Software Engineer",
            sameAs: [
              "https://twitter.com/driaug_",
              "https://linkedin.com/in/driaug",
              "https://github.com/driaug",
            ],
          }),
        }}
      />

      <App {...props} />
    </>
  );
}
