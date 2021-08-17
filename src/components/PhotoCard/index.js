const DEFAULT_IMAGE = `https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png`;

import { useNearScreen } from "../../hooks/useNearScreen";
import { useToggleLike } from "../../hooks/useToggleLike";
import { ImgWrapper, Img, Article } from "./styles";
import { FavButton } from "../FavButton";
import { Link } from "react-router-dom";

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen();
  const { toggleLike } = useToggleLike();

  const handleFavClick = () => {
    toggleLike({
      variables: {
        input: { id },
      },
    });
  };

  return (
    <Article ref={element}>
      {show && (
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
          <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
        </>
      )}
    </Article>
  );
};
