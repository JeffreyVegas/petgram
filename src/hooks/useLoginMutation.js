import { useMutation } from "@apollo/client";
import { LOGIN } from "../gql/mutations";

export const useLoginMutation = () => {
  const [login, { loading, error }] = useMutation(LOGIN);

  return { login, loading, error };
};
