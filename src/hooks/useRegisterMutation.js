import { useMutation } from "@apollo/client";
import { SIGN_UP } from "../gql/mutations";

export const useRegisterMutation = () => {
  const [sigup, { loading, error }] = useMutation(SIGN_UP);

  return { sigup, loading, error };
};
