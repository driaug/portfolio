import Script from "next/script";
import Image from "next/image";
import { useLastFM } from "use-last-fm";
import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";

import headshot from "../../public/assets/dries.jpeg";
import logo from "../../public/assets/logo.png";

const containerVariant = {
  hidden: { scale: 0.8, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
  },
};

const item = {
  hidden: { opacity: 0, y: -50 },
  show: { opacity: 1, y: 0 },
};

export default function Index() {
  const lastFM = useLastFM("driaug", "b10a87f2b9171ea735ccf53125a9b8a2");
  const introduction = useRef<HTMLDivElement>(null);

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
          "pointer-events-none mx-auto max-w-7xl select-none space-y-20 px-6"
        }
      >
        <section className={"flex min-h-screen flex-col justify-center gap-6"}>
          <div className="absolute top-6 h-14 w-14">
            <Image
              layout="fill"
              src={logo}
              quality={40}
              alt={
                "Personal logo of Dries Augustyns. A capital D in a slightly angled purple square."
              }
            />
          </div>
          <motion.div
            variants={containerVariant}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: true }}
          >
            <h1
              className={
                "md:text-7x py-6 font-circular text-6xl font-black text-neutral-900 md:py-0 md:leading-tight"
              }
            >
              Dries Augustyns
            </h1>
          </motion.div>

          <AnimatePresence>
            {lastFM.status === "playing" && (
              <motion.span
                variants={containerVariant}
                initial={"hidden"}
                animate={lastFM.status === "playing" ? "show" : "hidden"}
                className={
                  "absolute bottom-5 flex items-center gap-2 overflow-hidden rounded font-medium text-neutral-500 md:gap-6"
                }
              >
                <div className="relative h-20 w-20 overflow-hidden rounded">
                  <Image
                    layout="fill"
                    src={lastFM.song.art}
                    quality={40}
                    alt={lastFM.song.name}
                  />
                </div>
                Currently listening to {lastFM.song.name} by{" "}
                {lastFM.song.artist}
              </motion.span>
            )}
          </AnimatePresence>
        </section>

        <footer className="bg-white">
          <div className="mx-auto max-w-7xl overflow-hidden px-4 pb-6 sm:px-6 lg:px-8">
            <div className="flex justify-center space-x-6">
              <a
                href="https://twitter.com/driaug_"
                target={"_blank"}
                rel={"noreferrer"}
                className="text-neutral-400 transition ease-in-out hover:text-neutral-500"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <title>Twitter</title>
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/driaug"
                target={"_blank"}
                rel={"noreferrer"}
                className="text-neutral-400 transition ease-in-out hover:text-neutral-500"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <title>LinkedIn</title>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              <a
                href="https://medium.com/@driaug"
                target={"_blank"}
                rel={"noreferrer"}
                className="text-neutral-400 transition ease-in-out hover:text-neutral-500"
              >
                <span className="sr-only">Medium</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <title>Medium</title>
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />{" "}
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
