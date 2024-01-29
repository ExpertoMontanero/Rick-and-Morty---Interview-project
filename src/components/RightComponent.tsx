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
          id
        }
      }
    }
  `;
  function DisplayEpisodes() {
    const { loading, error, data } = useQuery(GET_EPISODES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return data.episodes.results.map(({ episode, name, air_date, id }) => (
      <div key={id} className="main-box">
        <div className="episode-box">
          <h2 className="episode-name">{episode}</h2>
        </div>
        <div className="vl"></div>
        <div className="title-air-box">
          <h1
            className="episod-title"
            style={id % 2 == 0 ? { color: "#00BDD4" } : { color: "#BDD800" }}
          >
            {name}
          </h1>
          <h3 className="air-date">{air_date}</h3>
        </div>
      </div>
    ));
  }
  return (
    <div className="list-box">
      <DisplayEpisodes />
    </div>
  );
}
