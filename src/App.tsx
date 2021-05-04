import React, { useRef } from "react";
import { HeroContainer } from "./components/hero-container";
import { MainTitle } from "./components/main-title";
import { SubTitle } from "./components/sub-title";
import { TitleContainer } from "./components/title-container";
import { TimelineContainer } from "./components/timeline-container";
import { Headshot } from "./components/headshot";
import { CTAButton } from "./components/cta-button";
import { Spotify } from "./components/spotify";
import { IntroductionContainer } from "./components/introduction-container";
import { Timeline } from "./components/timeline";
import { Project } from "./components/project";
import { Icon } from "./components/icon";
import { Footer } from "./components/footer";

function App() {
  const timelineRef = useRef<HTMLDivElement>(null);

  console.info("Well well, what are you doing here? :)");

  return (
    <>
      <HeroContainer>
        <TitleContainer>
          <MainTitle>Dries Augstyns</MainTitle>
          <SubTitle>Full-Stack TypeScript Engineer</SubTitle>
          <CTAButton
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => timelineRef.current?.scrollIntoView()}
          >
            Get to know me
          </CTAButton>
        </TitleContainer>
        <Spotify />
      </HeroContainer>
      <TimelineContainer ref={timelineRef}>
        <IntroductionContainer>
          <Headshot src={"/images/dries.jpeg"} />
          <p>
            My name is Dries and I am a Full-Stack TypeScript engineer from
            Belgium. Filled with a passion for innovation and entrepreneurship,
            I create software that is future-ready!
          </p>
        </IntroductionContainer>
        <Timeline>
          <h1>Projects & Experience</h1>
          <Project>
            <div>
              <h2>
                <Icon whileHover={{ rotate: 360 }}>
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.75 9.75C4.75 8.64543 5.64543 7.75 6.75 7.75H17.25C18.3546 7.75 19.25 8.64543 19.25 9.75V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V9.75Z"
                      stroke="#5B21B6"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.75 7.5V6.75C8.75 5.64543 9.64543 4.75 10.75 4.75H13.25C14.3546 4.75 15.25 5.64543 15.25 6.75V7.5"
                      stroke="#5B21B6"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5 13.25H19"
                      stroke="#5B21B6"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.75 11.75V14.25"
                      stroke="#5B21B6"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15.25 11.75V14.25"
                      stroke="#5B21B6"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Icon>
                WebFaster
              </h2>
              <p>
                My current employer. WebFaster is a venture studio based in
                Antwerp, Belgium. Turning bold ideas into companies in the most
                efficient way possible. No challenge is too large for the
                WebFaster team!
              </p>
              <a href={"https://webfaster.com/"}>&gt; Website</a>
            </div>
          </Project>
          <Project>
            <div>
              <h2>
                <Icon whileHover={{ rotate: 360 }}>
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V6.75Z"
                      stroke="#5B21B6"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.75 10.75L11.25 13L8.75 15.25"
                      stroke="#141414"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Icon>
                Current-Currency
              </h2>
              <p>
                Current-Currency is an npm package which can be used to work
                with currencies and cryptos in Node.js. Offering functionalities
                like converting and formatting according to the ISO-standards.
              </p>
              <a href={"https://github.com/driaug/current-currency"}>
                &gt; Github
              </a>
            </div>
          </Project>
          <Project>
            <div>
              <h2>
                <Icon whileHover={{ rotate: 360 }}>
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 4.75L13.75 10.25H19.25L14.75 13.75L16.25 19.25L12 15.75L7.75 19.25L9.25 13.75L4.75 10.25H10.25L12 4.75Z"
                      stroke="#5B21B6"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Icon>
                Smart Policing Hackathon
              </h2>
              <p>
                A hackathon organised by the Belgian Federal Police with the
                goal of innovating the force. Our team created the mobile
                application Okay, which makes it easier to report sensitive
                problems like abuse and assault.
              </p>
              <a href={"https://police-hackathon.be/en/"}>&gt; Website</a>
            </div>
          </Project>
        </Timeline>
      </TimelineContainer>
      <Footer>© Dries Augustyns - {new Date().getFullYear()}</Footer>
    </>
  );
}

export default App;
