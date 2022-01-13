import { FunctionComponent } from "react";
import styled from "styled-components";
import { GenresServerData } from "@/lib/@types";
import { Card } from "@/common/card";
import Link from "next/link";

export const GenreList: FunctionComponent<GenresServerData> = ({ data }) => {
  return (
    <>
      <h1>Genre</h1>
      <List>
        {data.map((genre) => (
          <Link
            href="/genre/[genreId]"
            as={`/genre/${genre.id}`}
            key={genre.id}
          >
            <a>
              <Card imageUrl={genre.picture_medium} title={genre.name} />
            </a>
          </Link>
        ))}
      </List>
    </>
  );
};

const List = styled.div`
  display: flex;
  width: 1100px;
  overflow: scroll;
  gap: 30px;
`;
