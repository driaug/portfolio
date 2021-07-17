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
import {Footer} from "./components/footer";
import {ScrollDown} from "./components/scroll-down";
import {IconRow} from "./components/icon-row";
import {toast} from "react-hot-toast";

function App() {
    const timelineRef = useRef<HTMLDivElement>(null);

    console.info("Well well, what are you doing here? :)");

    return (
        <>
            <HeroContainer>
                <TitleContainer>
                    <MainTitle>Dries Augustyns</MainTitle>
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
                              strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 18.25V4.75" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"
                              strokeLinejoin="round"/>
                    </svg>
                </ScrollDown>


            </HeroContainer>
            <TimelineContainer ref={timelineRef}>
                <IntroductionContainer>
                    <Headshot src={"/images/dries.jpg"} alt={"Headshot Dries"}/>
                    <div>
                        <h1>Hi there!</h1>
                        <p>
                            My name is Dries and I am a Full-Stack Software Engineer that knows his way around
                            TypeScript and Python. Looking to learn more about me? Check out one of the links in my
                            footer or send me an email at <span onClick={() => {
                            navigator.clipboard.writeText('inbox@driaug.com').then(() => {
                                toast.success("Copied to your clipboard")
                            })
                        }}>inbox@driaug.com</span> and I will try to get back to you ASAP!
                        </p>
                    </div>
                </IntroductionContainer>
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
                    <svg onClick={() => window.location.href = 'https://driaug.medium.com'} width='24' height='24'
                         fill="#888" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                    </svg>
                    <svg onClick={() => window.location.href = 'https://p.driaug.com'} width='24' height='24'
                         fill="#888" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M19.125 0H4.875A4.865 4.865 0 0 0 0 4.875v14.25C0 21.825 2.175 24 4.875 24h6.6c2.7 0 4.875-2.175 4.875-4.875V16.65h2.775c2.7 0 4.875-2.175 4.875-4.875v-6.9C24 2.175 21.825 0 19.125 0zM16.5 1.275h2.625a3.6 3.6 0 0 1 3.6 3.6v2.7H16.5v-6.3zM15.075 9v6.45H8.85V9h6.225zM8.85 1.2h6.225v6.375H8.85V1.2zM1.275 4.8a3.6 3.6 0 0 1 3.6-3.6H7.5v6.375H1.275V4.8zM7.5 9v6.45H1.2V9h6.3zm0 13.725H4.8a3.6 3.6 0 0 1-3.6-3.6V16.8h6.3v5.925zm7.575-3.525a3.6 3.6 0 0 1-3.6 3.6H8.85v-5.925h6.225V19.2zm7.65-7.35a3.6 3.6 0 0 1-3.6 3.6H16.5V9h6.225v2.85z"/>
                    </svg>
                    <svg onClick={() => window.location.href = 'https://github.com/driaug'} width='24' height='24'
                         fill="#888" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                    </svg>
                </IconRow>
                <div>© Dries Augustyns - {new Date().getFullYear()}</div>
            </Footer>
        </>
    );
}

export default App;
