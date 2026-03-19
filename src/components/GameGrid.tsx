import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GameCart from "./GameCart";
import GameSkeleton from "./GameSkeleton";
import { Genre } from "@/hooks/UseGenre";
import { GameQuery } from "@/App";

interface Props {
  gameQuery: GameQuery;
}
const GameGrid = ({ gameQuery }: Props) => {
  const { data, errorMsg, isLoading } = useGames(gameQuery);
  const skeleton = [1, 2, 3, 4, 5, 6];
  if (errorMsg) return errorMsg;
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding="10px" gap={6}>
      {isLoading && skeleton.map((skeleton) => <GameSkeleton key={skeleton} />)}
      {data.map((game) => (
        <GameCart key={game.id} game={game}></GameCart>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
