import { useQuery } from "@apollo/client";
import { PhotoCard } from "../components/PhotoCard";
import { GET_SINGLE_PHOTO } from "../gql/querys";

export const PhotoCardWhitQuery = ({ id }) => {
  const { loading, error, data } = useQuery(GET_SINGLE_PHOTO, {
    variables: { id },
  });
  if (error) return <h2>Internal server Error</h2>;
  if (loading) return <h3>Loading</h3>;
  return <PhotoCard {...data.photo} />;
};
