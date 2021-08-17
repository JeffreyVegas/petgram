import { useQuery } from "@apollo/client";
import { GET_FAVORITES } from "../gql/querys";

export const useGetFavs = () => {
  const { data, loading, error } = useQuery(GET_FAVORITES, {
    fetchPolicy: "cache-and-network",
  });
  return { data, loading, error };
};
