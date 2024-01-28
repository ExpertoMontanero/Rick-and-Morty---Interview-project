import { graphql } from "C:/Users/tomek/Desktop/Rick-and-Morty---Interview-project/gql";

const GetEpisodes = graphql(
  `
    query {
      episodes(filter: { episode: "S04" }) {
        results {
          episode
          name
          air_date
        }
      }
    }
  `
);
