"use client";

import usePlayer from "@/hooks/usePlayer";
import useLoadSongUrl from "@/hooks/useLoadSongUrl";
import useGetSongbyId from "@/hooks/useGetSongById";
import PlayerContent from "./PlayerContent";

const Player = () => {
  const player = usePlayer();

  const { song } = useGetSongbyId(player.actionsId);

  const songUrl = useLoadSongUrl(song!);

  if (!song || !songUrl || !player.actionsId) {
    return null;
  }

  return (
    <div className="fixed bottom-0 bg-black w-full py-2 h-[80px] px-4">
      <PlayerContent key={songUrl} song={song} songUrl={songUrl} />
    </div>
  );
};

export default Player;
