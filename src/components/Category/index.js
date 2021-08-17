import { Link, Image, Loading } from "./styles";
import { MdPets } from "react-icons/md";

export const Category = ({ cover, path, emoji = "?" }) => {
  return (
    <Link to={path}>
      {cover ? (
        <Image src={cover} />
      ) : (
        <Loading>
          <MdPets />
        </Loading>
      )}
    </Link>
  );
};
