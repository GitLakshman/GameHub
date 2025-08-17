import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const colour = score > 75 ? "green" : score > 65 ? "red" : " ";
  return (
    <>
      <Badge colorScheme={colour} paddingX={2} rounded={3}>
        {score}
      </Badge>
    </>
  );
};

export default CriticScore;
