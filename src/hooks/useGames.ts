import apiClient from "@/services/api-client";
import { useEffect, useState } from "react";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface FeatchGamesResponce {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setLoadeing] = useState(false);

  useEffect(() => {
    setLoadeing(true);
    apiClient
      .get<FeatchGamesResponce>("/games")
      .then((res) => {
        setGames(res.data.results);
        setLoadeing(false);
      })
      .catch((error) => {
        setErrorMsg(error.message);
        setLoadeing(false);
      });
  }, []);

  return { games, errorMsg, isLoading };
};

export default useGames;
