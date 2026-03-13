import { FeatchGamesResponce, Game } from "@/hooks/useGames";
import { Card, CardBody, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import PlatFormIconsList from "./platFormIconsList";
import CriticScore from "./CriticScore";
import getCroppedImageURL from "@/services/iamge-url";

interface Props {
  game: Game;
}
const GameCart = ({ game }: Props) => {
  return (
    <Card.Root overflow="hidden" borderRadius={10} width="300px">
      <Image src={getCroppedImageURL(game.background_image)}></Image>
      <Card.Body>
        <Card.Title>{game.name}</Card.Title>
        <HStack justifyContent="space-between">
          <PlatFormIconsList
            platform={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCart;
