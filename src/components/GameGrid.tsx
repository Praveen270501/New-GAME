import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCart from "./GameCart";
import GameSkeleton from "./GameSkeleton";

const GameGrid = () => {
  const { games, errorMsg, isLoading } = useGames();
  const skeleton = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {errorMsg && <Text>{errorMsg}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        gap={10}
      >
        {isLoading &&
          skeleton.map((skeleton) => <GameSkeleton key={skeleton} />)}
        {games.map((game) => (
          <GameCart key={game.id} game={game}></GameCart>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
