"use client";

import useGetSongbyId from "@/hooks/useGetSongbyId";
import useLoadSongUrl from "@/hooks/useLoadSongUrl";

import usePlayer from "@/hooks/usePlayer";

const Player = () => {
  const player = usePlayer();

  const { song } = useGetSongbyId(player.actionsId);

  const songUrl = useLoadSongUrl(song!);

  if (!song || !songUrl || !player.actionsId) {
    return null;
  }
  return <div>Player!</div>;
};

export default Player;
