import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <>
      <Card width="300px" borderRadius={10} overflow={"hidden"}>
        <Skeleton height="200px" />
        <Card padding="10px">
          <SkeletonText height="87px" />
        </Card>
      </Card>
    </>
  );
};

export default GameCardSkeleton;
