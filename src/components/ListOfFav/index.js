import { useGetFavs } from "../../hooks/useGetFavs";
import { Grid, Img } from "./styles";

export const ListOfFav = () => {
  const { data, loading, error } = useGetFavs();

  return (
    <Grid>
      {data?.favs.map((fav) => (
        <Img key={fav.id} src={fav.src} alt="" />
      ))}
    </Grid>
  );
};
