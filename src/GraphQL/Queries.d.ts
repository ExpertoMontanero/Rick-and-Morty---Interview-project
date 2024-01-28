import { gql } from '@apollo/client';

export const GET_CHARACTERS = gql`
  query GetCharacters($page: Int!, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      info {
        count
      }
      // Add other character properties as needed
    }
  }
`;

// Define the type for the FilterCharacter input
export interface FilterCharacter {
  name?: string;
  // Add other filter properties as needed
}

// Define the type for the response
export interface GetCharactersResponse {
  characters: {
    info: {
      count: number;
    };
    // Add other character properties as needed
  }[];
}