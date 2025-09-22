import useGenre from "./useGenre";

const genre = (id?: number) => {
  const { data: genres } = useGenre();
  return genres?.results.find((g) => g.id === id);
};

export default genre;
