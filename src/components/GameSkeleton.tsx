import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

const GameSkeleton = () => {
  return (
    <Card.Root width="300px" overflow="hidden" borderRadius={10}>
      <Skeleton height="200px">
        <CardBody>
          <SkeletonText></SkeletonText>
          <SkeletonText noOfLines={2} />
        </CardBody>
      </Skeleton>
    </Card.Root>
  );
};

export default GameSkeleton;
