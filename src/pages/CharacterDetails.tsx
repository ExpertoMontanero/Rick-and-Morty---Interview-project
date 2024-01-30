import React from "react";
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BackButton from "../components/BackButton";
import "/src/styles/style_characters/characters.css";

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
      <div className="main-container main-container-ch ">
        <div className="left-side">
          <BackButton props={{ name: "Characters" }} />
          <h1 className="character-name-details">{character.name}</h1>
          <img
            src={character.image}
            alt={character.name}
            className="character-img img-ch"
          />
        </div>
        <div className="right-side right-side-ch nowrap">
          <ul className="character-info">
            <li id="item1" className="item-d">
              {`${character.status === "" ? "-" : character.status}`}
              <p className="description">Status</p>
            </li>
            <li id="item2" className="item-d">
              {`${character.species === "" ? "-" : character.species}`}
              <p className="description">Species</p>
            </li>
            <li id="item3" className="item-d">
              {`${character.type === "" ? "-" : character.type}`}
              <p className="description">Type</p>
            </li>
            <li id="item4" className="item-d">
              {`${character.gender === "" ? "-" : character.gender}`}
              <p className="description">Gender</p>
            </li>
            <li id="item5" className="item-d">
              {`${character.origin.name === "" ? "-" : character.origin.name}`}
              <p className="description">Origin</p>
            </li>
            <li id="item6" className="item-d">
              {`${
                character.location.name === "" ? "-" : character.location.name
              }`}
              <p className="description">Last known location</p>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CharacterDetails;
