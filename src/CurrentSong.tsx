import React from "react";
import { useLastFM } from "use-last-fm";
import { Music } from "react-feather";

export const CurrentSong = () => {
  const lastFM = useLastFM("driaug", "b10a87f2b9171ea735ccf53125a9b8a2");

  if (lastFM.status !== "playing") {
    return (
      <div className={"baseline"}>
        <Music />
        <p>&nbsp;Not listening to anything</p>
      </div>
    );
  }

  return (
    <div className={"baseline"}>
      <Music />
      <p>
        &nbsp;Listening to {lastFM.song.name} by {lastFM.song.artist}
      </p>
    </div>
  );
};
