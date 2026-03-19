import { Game } from "@/hooks/useGames";
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
    <Card.Root overflow="hidden" borderRadius={10}>
      <Image src={getCroppedImageURL(game.background_image)}></Image>
      <Card.Body>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatFormIconsList
            platform={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
        <Card.Title>{game.name}</Card.Title>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCart;
