import Script from "next/script";
import Link from "next/link";

export default function Index() {
  return (
    <>
      <Script
        id={`person-schema`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Person",
            name: "Dries Augustyns",
            url: "https://www.driaug.com",
            image: "https://driaug.com/images/dries.jpg",
            sameAs: [
              "https://twitter.com/driaug_",
              "https://linkedin.com/in/driaug",
              "https://github.com/driaug",
              "https://medium.com/@driaug",
            ],
          }),
        }}
      />

      <main
        className={
          "mx-auto max-w-4xl px-9 font-serif py-12 space-y-9 text-neutral-800 text-balance"
        }
      >
        <h1 className={"text-6xl font-medium"}>Dries Augustyns</h1>

        <section className={"space-y-3"}>
          <h2 className={"text-4xl font-medium"}>My time is invested here</h2>

          <article className={"space-y-3"}>
            <Link
              href={"https://www.useplunk.com"}
              target={"_blank"}
              className={
                "underline text-blue-600 hover:text-blue-800 visited:text-purple-600 text-3xl"
              }
            >
              <h3>Plunk</h3>
            </Link>

            <div>
              <p>The email platform for SaaS</p>

              <ul className={"list-disc list-inside"}>
                <li>Sends 250K+ emails/mo</li>
                <li>100% bootstrapped and profitable</li>
              </ul>
            </div>
          </article>
        </section>

        <section className={"space-y-3"}>
          <h2 className={"text-4xl font-medium"}>Connect with me here</h2>

          <ul className={"list-disc list-inside"}>
            <li>
              <Link
                href={"https://twitter.com/driaug_"}
                target={"_blank"}
                className={
                  "underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                }
              >
                Twitter
              </Link>
            </li>

            <li>
              <Link
                href={"https://www.linkedin.com/in/driaug/"}
                target={"_blank"}
                className={
                  "underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                }
              >
                LinkedIn
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
