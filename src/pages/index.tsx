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
      </main>
    </>
  );
}
