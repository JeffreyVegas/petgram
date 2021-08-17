import React from "react";
import { useAuthContext } from "../context";
import { Layout } from "../components/Layout";

export const User = (params) => {
  const { removeUser } = useAuthContext();
  return (
    <Layout title="Section User">
      <button onClick={removeUser}>Cerrar Sesion</button>
    </Layout>
  );
};
