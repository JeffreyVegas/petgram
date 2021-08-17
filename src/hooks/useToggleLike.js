import { LIKE_PHOTO } from "../gql/mutations";
import { useMutation } from "@apollo/client";

export const useToggleLike = () => {
  const [toggleLike, { loading: toggleLoading, error: toggleError }] =
    useMutation(LIKE_PHOTO);
  return { toggleLike, toggleLoading, toggleError };
};
