import { getLayout } from "@/layout/layout";
import { ProfileLayout } from "@/layout/ProfileLayout";
import type { ReactElement } from "react";

const Podcasts = () => {
  return <h1>Podcasts</h1>;
};

export default Podcasts;

Podcasts.getLayout = (page: ReactElement) =>
  getLayout(<ProfileLayout>{page}</ProfileLayout>);
