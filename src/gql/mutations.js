import { gql } from "@apollo/client";

export const LIKE_PHOTO = gql`
  mutation likePhoto($input: LikePhoto!) {
    likePhoto(input: $input) {
      id
      liked
      likes
    }
  }
`;

export const SIGN_UP = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`;

export const LOGIN = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`;
