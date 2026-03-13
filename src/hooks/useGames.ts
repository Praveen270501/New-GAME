import apiClient from "@/services/api-client";
import { useEffect, useState } from "react";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
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

  useEffect(() => {
    apiClient
      .get<FeatchGamesResponce>("/games")
      .then((res) => setGames(res.data.results))
      .catch((error) => setErrorMsg(error.message));
  }, []);

  return { games, errorMsg };
};

export default useGames;
