import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import lancero from "../../../public/assets/lancero.png";

export default function Index() {
  return (
    <>
      <main className={"min-h-screen space-y-20 px-12 md:px-24 2xl:px-32"}>
        <section
          className={
            "flex h-full flex-1 flex-col items-center justify-center text-center"
          }
        >
          <div className={"mt-4"}>
            <Link href={"/"} passHref>
              <motion.span
                className={
                  "flex cursor-pointer items-center gap-x-2 self-start text-lg text-gray-900 text-opacity-80 transition hover:text-opacity-100"
                }
                whileHover={{ gap: "20px" }}
              >
                Go back{" "}
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
            </Link>
          </div>

          <h1
            className={
              "font-circular text-4xl font-bold leading-loose text-gray-900"
            }
          >
            Lancero
          </h1>
          <p className={"w-6/12 text-gray-900 text-opacity-70"}>
            <a
              className={"underline"}
              href={"https://www.lancero.app"}
              target={"_blank"}
              rel={"noreferrer"}
            >
              Lancero
            </a>{" "}
            was a collaboration between{" "}
            <a
              className={"underline"}
              target={"_blank"}
              rel={"noreferrer"}
              href={"https://bradleyvangelder.com/"}
            >
              Bradley Vangelder
            </a>{" "}
            and me. The platform allows anyone to launch a waitlist and invite
            code system in a matter of seconds.
          </p>

          <div className={"mt-6 w-6/12 overflow-hidden rounded"}>
            <Image
              src={lancero}
              placeholder={"blur"}
              alt={"Lancero"}
              layout={"responsive"}
            />
          </div>
        </section>
      </main>
    </>
  );
}