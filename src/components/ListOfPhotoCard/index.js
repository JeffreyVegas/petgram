import { PhotoCard } from "../PhotoCard";
import { useQuery } from "@apollo/client";
import { GET_PHOTOS } from "../../gql/querys";

export const ListOfPhotoCard = ({ categoryId }) => {
  const { loading, error, data } = useQuery(GET_PHOTOS, {
    variables: { categoryId },
  });
  if (error) return <h3>Internal Error Server</h3>;
  if (loading) return <h3>loading...</h3>;
  const { photos } = data;

  return (
    <>
      {photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </>
  );
};
