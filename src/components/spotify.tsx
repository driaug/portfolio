import React from "react";
import { useLastFM } from "use-last-fm";
import styled from "styled-components";
import { motion } from "framer-motion";

const SpotifyContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-left: 20%;
  margin-top: auto;
  padding-bottom: 25px;
  font-family: "Inter", "Roboto", sans-serif;
  z-index: -10;

  @media screen and (max-width: 576px) {
    margin-left: 5%;
  } ;
`;

const SongPlaceholder = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  height: 75px;
  width: 75px;
  background-color: #f3f4f6;
  margin-right: 10px;
`;

const SongCover = styled(motion.img)`
  border-radius: 12px;
  height: 75px;
  margin-right: 10px;
`;

export const Spotify = () => {
  const lastFM = useLastFM("driaug", "b10a87f2b9171ea735ccf53125a9b8a2");

  return (
    <SpotifyContainer
      initial={{ y: 150 }}
      animate={{ y: lastFM.status === "playing" ? [150, 0] : 150 }}
    >
      {lastFM.status === "playing" ? (
        <SongCover src={lastFM.song.art} alt={"Song cover"} />
      ) : (
        <SongPlaceholder>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.25 17C9.25 18.2426 8.24264 19.25 7 19.25C5.75736 19.25 4.75 18.2426 4.75 17C4.75 15.7574 5.75736 14.75 7 14.75C8.24264 14.75 9.25 15.7574 9.25 17Z"
              stroke="#141414"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.25 17V6.75C9.25 5.64543 10.1454 4.75 11.25 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14"
              stroke="#141414"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.25 14C19.25 15.2426 18.2426 16.25 17 16.25C15.7574 16.25 14.75 15.2426 14.75 14C14.75 12.7574 15.7574 11.75 17 11.75C18.2426 11.75 19.25 12.7574 19.25 14Z"
              stroke="#141414"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </SongPlaceholder>
      )}

      {lastFM.status === "playing" ? (
        <p>
          Listening to {lastFM.song.name} by {lastFM.song.artist}
        </p>
      ) : (
        <p>Not listening to anything</p>
      )}
    </SpotifyContainer>
  );
};
