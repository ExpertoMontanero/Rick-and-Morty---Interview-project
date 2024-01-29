import React from "react";
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import { useParams } from "react-router-dom";

const GET_EPISODE = gql`
  query GetEpisode($episodeId: ID!) {
    episode(id: $episodeId) {
      name
      air_date
      characters {
        id
        name
      }
    }
  }
`;

const EpisodeId = () => {
  const params = useParams();
  const numericChars = Object.values(params)
    .join("") 
    .replace(/[^0-9]/g, ""); 
  return numericChars;
};

interface EpisodeData {
  episode: {
    name: string;
    air_date: string;
  };
}

interface EpisodeVariables {
  episodeId: number;
}

const EpisodeDetails: React.FC = () => {
  const episodeId = EpisodeId(); 

  const { loading, error, data } = useQuery<EpisodeData, EpisodeVariables>(
    GET_EPISODE,
    {
      variables: { episodeId },
    }
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data || !data.episode) return <p>No data found</p>;

  const { episode } = data;

  return (
    <div>
      <h2>{episode.name}</h2>
      <p>Air Date: {episode.air_date}</p>

      <h3>Characters:</h3>
      <ul>
        {episode.characters.map((character) => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default EpisodeDetails;
