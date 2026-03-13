import { FeatchGamesResponce, Game } from "@/hooks/useGames";
import { Card, CardBody, Image, Text } from "@chakra-ui/react";
import React from "react";
import PlatFormIconsList from "./platFormIconsList";

interface Props {
  game: Game;
}
const GameCart = ({ game }: Props) => {
  return (
    <Card.Root overflow="hidden" borderRadius={10}>
      <Image src={game.background_image}></Image>
      <Card.Body>
        <Card.Title>{game.name}</Card.Title>
        <PlatFormIconsList
          platform={game.parent_platforms.map((p) => p.platform)}
        />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCart;
