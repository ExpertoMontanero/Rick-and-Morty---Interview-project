import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});
client
  .query({
    query: gql`
      query GetEpisodes {
        episodes(filter: { episode: "S04" }) {
          results {
            episode
            name
            air_date
          }
        }
      }
    `,
  })
  .then((result) => console.log(result));

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>
);
