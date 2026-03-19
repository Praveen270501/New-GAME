import { GameQuery } from "@/App";
import { Heading } from "@chakra-ui/react";
import React from "react";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.genre?.name || ""}${gameQuery.platform?.name || ""} Games`;

  return (
    <Heading as="h1" fontSize="4xl" marginY={7}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
