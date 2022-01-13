import { useQuery } from "react-query";
import { GenreList } from "@/containers/GenreList";
import { getGenre } from "./api/services";

export default function Genre({ genre }) {
  const { data, isLoading, isSuccess, isError } = useQuery("genre", getGenre, {
    initialData: genre,
  });

  return (
    <>
      {isError ? "something went wrong..." : ""}
      {isLoading ? "loading..." : null}
      {isSuccess ? <GenreList data={data} /> : null}
    </>
  );
}

export async function getStaticProps() {
  const genre = await getGenre();

  return {
    props: {
      genre: genre,
    },
  };
}
