import React from "react";
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BackButton from "../components/BackButton";


const GET_CHARACTER = gql`
  query GetCharacter($characterId: ID!) {
    character(id: $characterId) {
      id
      name
      status
      species
      type
      gender
      origin {
        name
      }
      location {
        name
      }
      image
    }
  }
`;

const CharacterId = () => {
  const paramse = useParams();
  const numericChars = Object.values(paramse)
    .join("")
    .replace(/[^0-9]/g, "");
  console.log(numericChars);
  return numericChars;
};

interface CharacterData {
  character: {
    name: string;
    status: string;
    image: string;
    species: string;
    type: string;
    gender: string;
    location: {
      name: string;
    };
    origin: {
      name: string;
    };
  };
}

interface CharacterVariables {
  characterId: number;
}

const CharacterDetails: React.FC = () => {
  const characterId = CharacterId();

  const { loading, error, data } = useQuery<CharacterData, CharacterVariables>(
    GET_CHARACTER,
    {
      variables: { characterId },
    }
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data || !data.character) return <p>No data found</p>;

  const { character } = data;

  return (
    <div>
      <Header />
      <div>
        <div className="left-side ">
          <BackButton props={{ name: "Characters" }} />
          <h2 className="title-text ">
            Details of <span className="highlight">{character.name}</span>
          </h2>
          <img
            src={character.image}
            alt={character.name}
            className="theme-img"
          />
        </div>
        <div className="right-side nowrap">
          <ul>
            <li className="character-info">
              <div className="character-name">{character.name}</div>
              <div className="character-status">{character.status}</div>
              <div className="character-species">{character.species}</div>
              <div className="character-type">{character.type}</div>
              <div className="character-gender">{character.gender}</div>
              <div className="character-origin">{character.origin.name}</div>
              <div className="character-location">
                {character.location.name}
              </div>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CharacterDetails;
