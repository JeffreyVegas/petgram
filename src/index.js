import ReactDOM from "react-dom";
import App from "./App";
import { AuthProvider } from "./context";
import { GlobalStyle } from "./styles/globalStyle";

import {
  ApolloClient,
  HttpLink,
  ApolloLink,
  InMemoryCache,
  from,
  ApolloProvider,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const httpLink = new HttpLink({
  uri: "https://petgram-server-api-24cwn2sry-jeffreyvegas.vercel.app/graphql",
});

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = sessionStorage.getItem("token");
  if (token) {
    operation.setContext({
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  }
  return forward(operation);
});

const errorMiddleware = onError(({ networkError }) => {
  if (networkError && networkError.result.code === "invalid_token") {
    window.sessionStorage.removeItem("token");
    window.location = "/user";
  }
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([errorMiddleware, authMiddleware, httpLink]),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <AuthProvider>
      <GlobalStyle />
      <App />
    </AuthProvider>
  </ApolloProvider>,
  document.getElementById("app")
);
