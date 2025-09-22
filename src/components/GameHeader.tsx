import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import genre from "../hooks/genre";
import platform from "../hooks/platform";

interface Props {
  gameQuery: GameQuery;
}

const GameHeader = ({ gameQuery }: Props) => {
  const platformName = platform(gameQuery.platformId);
  const genreName = genre(gameQuery.genreId);

  const heading = `${platformName?.name || ""} 
  ${genreName?.name || ""} Games`;
  return (
    <Heading as={"h1"} paddingY={4}>
      {heading}
    </Heading>
  );
};

export default GameHeader;
