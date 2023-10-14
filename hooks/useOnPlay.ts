import { Song } from "@/types";
import usePlayer from "./usePlayer";
import useAuthModal from "./useAuthModal";
import { useUser } from "./useUser";

const useOnPlay = (songs: Song[]) => {
  const Player = usePlayer();

  const authModal = useAuthModal();
  const { user } = useUser();

  const onPlay = (id: string) => {
    if (!user) {
      return authModal.onOpen();
    }

    Player.setId(id);
    Player.setIds(songs.map((song) => song.id));
  };

  return onPlay;
};

export default useOnPlay;
