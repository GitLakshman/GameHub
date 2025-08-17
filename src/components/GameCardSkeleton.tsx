import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <>
      <Card>
        <Skeleton height="200px" />
        <Card padding="10px">
          <SkeletonText />
        </Card>
      </Card>
    </>
  );
};

export default GameCardSkeleton;
