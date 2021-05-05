import React, {useRef} from "react";
import {HeroContainer} from "./components/hero-container";
import {MainTitle} from "./components/main-title";
import {SubTitle} from "./components/sub-title";
import {TitleContainer} from "./components/title-container";
import {TimelineContainer} from "./components/timeline-container";
import {Headshot} from "./components/headshot";
import {CTAButton} from "./components/cta-button";
import {Spotify} from "./components/spotify";
import {IntroductionContainer} from "./components/introduction-container";
import {Timeline} from "./components/timeline";
import {Project} from "./components/project";
import {Icon} from "./components/icon";
import {Footer} from "./components/footer";
import {ScrollDown} from "./components/scroll-down";
import {IconRow} from "./components/icon-row";

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
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                        onClick={() => timelineRef.current?.scrollIntoView()}
                    >
                        Get to know me
                    </CTAButton>
                </TitleContainer>
                <Spotify/>
                <ScrollDown animate={{y: [-7, 0, -7]}} transition={{repeat: Infinity, duration: 1}}>
                    <svg onClick={() => timelineRef.current?.scrollIntoView()} width="24" height="24"
                         viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.25 13.75L12 19.25L6.75 13.75" stroke="#ffffff" strokeWidth="1.5"
                              strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M12 18.25V4.75" stroke="#ffffff" stroke-Width="1.5" strokeLinecap="round"
                              strokeLinejoin="round"></path>
                    </svg>
                </ScrollDown>


            </HeroContainer>
            <TimelineContainer ref={timelineRef}>
                <IntroductionContainer>
                    <Headshot src={"/images/dries.jpeg"} alt={"Headshot Dries"}/>
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
                                <Icon whileHover={{rotate: 360}}>
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
                                <Icon whileHover={{rotate: 360}}>
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
                                <Icon whileHover={{rotate: 360}}>
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
            <Footer>
                <IconRow>
                    <svg onClick={() => window.location.href = 'https://linkedin.com/in/driaug'} width='24' height='24'
                         fill="#888" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <svg onClick={() => window.location.href = 'https://twitter.com/driaug_'} width='24' height='24'
                         fill="#888" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                </IconRow>
                <div>© Dries Augustyns - {new Date().getFullYear()}</div>
            </Footer>
        </>
    );
}

export default App;
