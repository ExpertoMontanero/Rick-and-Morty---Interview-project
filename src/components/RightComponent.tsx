import "../styles/rightComponent.css";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import { useQuery, gql } from "@apollo/client";
export default function RightComponent() {
  const GET_EPISODES = gql`
    query GetEpisodes {
      episodes(filter: { episode: "S04" }) {
        results {
          episode
          name
          air_date
        }
      }
    }
  `;
  function DisplayEpisodes() {
    const { loading, error, data } = useQuery(GET_EPISODES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return data.episodes.results.map(({ episode, name, air_date }) => (
      <div key={episode}>
        <h3>{name}</h3>
        <h3>{air_date}</h3>
        <br />
        <b>About this location:</b>
        <p>{episode}</p>
        <br />
      </div>
    ));
  }
  return (
    <div>
      <DisplayEpisodes />
    </div>
  );
}
