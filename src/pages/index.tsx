import Script from "next/script";
import Image from "next/image";
import { useLastFM } from "use-last-fm";
import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";
import { useRouter } from "next/router";

import headshot from "../../public/assets/dries.jpeg";
import lancero from "../../public/assets/lancero_logo.png";
import onboarded from "../../public/assets/onboarded_logo.png";
import { useMedium } from "use-medium";

const containerVariant = {
  hidden: { scale: 0.8, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
  },
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
              "https://www.driaug.com",
            ],
            jobTitle: "Founder",
            worksFor: {
              "@type": "Organization",
              name: "Onboarded",
            },
          }),
        }}
      />

      <main className={"space-y-20 px-8 md:px-24 2xl:px-32"}>
        <section className={"flex min-h-screen flex-col justify-center gap-6"}>
          <div>
            <h1
              className={
                "md:text-7x py-6 font-circular text-6xl font-black text-gray-900 md:py-0 md:leading-tight"
              }
            >
              Dries Augustyns
            </h1>
            <h2
              className={
                "text-xl font-medium leading-tight tracking-wider text-gray-900 text-opacity-60 md:text-2xl"
              }
            >
              Full-Stack Software Engineer, Founder, Visionary
            </h2>
          </div>

          <motion.span
            onClick={() => introduction.current?.scrollIntoView()}
            className={
              "flex cursor-pointer items-center gap-x-2 self-start text-xl text-gray-900 text-opacity-80 transition hover:text-opacity-100"
            }
            whileHover={{ gap: "20px" }}
          >
            Learn more{" "}
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M13.75 6.75L19.25 12L13.75 17.25"
              />
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M19 12H4.75"
              />
            </svg>
          </motion.span>

          <AnimatePresence>
            {lastFM.status === "playing" && (
              <motion.span
                variants={containerVariant}
                initial={"hidden"}
                animate={lastFM.status === "playing" ? "show" : "hidden"}
                className={
                  "absolute bottom-5 flex items-center gap-2 font-medium overflow-hidden rounded text-gray-900 text-opacity-70 md:gap-6"
                }
              >
                <Image
                  src={lastFM.song.art}
                  width={65}
                  height={65}
                  quality={40}
                  alt={lastFM.song.name}
                />
                Currently listening to {lastFM.song.name} by{" "}
                {lastFM.song.artist}
              </motion.span>
            )}
          </AnimatePresence>
        </section>

        <section
          className={"flex flex-col gap-12 md:flex-row md:items-center"}
          ref={introduction}
        >
          <div className={"h-44 w-44 overflow-hidden rounded"}>
            <Image
              src={headshot}
              alt={"Picture of Dries Augustyns"}
              placeholder={"blur"}
            />
          </div>
          <div className={"md:w-8/12"}>
            <h2 className={"font-circular text-2xl font-bold text-gray-900"}>
              A Short Intro
            </h2>
            <p className={"text-gray-900 text-opacity-70"}>
              Hi! My name is Dries and I&apos;d like to give you a warm welcome
              to my little space on the web. I&apos;m a full-stack software
              engineer, founder and visionary who loves to create. My true
              passions are entrepreneurship, innovation and equality so if those
              are of interest to you, don&apos;t hesitate to reach out!
            </p>

            <p className={"pt-4 text-gray-900 text-opacity-70"}>
              I&apos;m currently working at Microsoft.
            </p>

            <div className={"mt-2 flex gap-x-2"}>
              <div
                className={
                  "rounded bg-purple-100 px-3 py-0.5 text-sm text-purple-700"
                }
              >
                TypeScript
              </div>
              <div
                className={
                  "rounded bg-purple-100 px-3 py-0.5 text-sm text-purple-700"
                }
              >
                React
              </div>
              <div
                className={
                  "rounded bg-purple-100 px-3 py-0.5 text-sm text-purple-700"
                }
              >
                Python
              </div>
              <div
                className={
                  "rounded bg-purple-100 px-3 py-0.5 text-sm text-purple-700"
                }
              >
                DevOps
              </div>
              <div
                  className={
                    "rounded bg-purple-100 px-3 py-0.5 text-sm text-purple-700"
                  }
              >
                Machine Learning
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-white">
          <div className="mx-auto max-w-7xl overflow-hidden px-4 pb-6 sm:px-6 lg:px-8">
            <div className="flex justify-center space-x-6">
              <a
                href="https://twitter.com/driaug_"
                target={"_blank"}
                rel={"noreferrer"}
                className="text-gray-400 transition hover:text-gray-500"
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
                className="text-gray-400 transition hover:text-gray-500"
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
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
