import React from "react";
import { ListOfFav } from "../components/ListOfFav";
import { Layout } from "../components/Layout";

export const Favs = (params) => {
  return (
    <Layout title="Favorites">
      <ListOfFav />
    </Layout>
  );
};
