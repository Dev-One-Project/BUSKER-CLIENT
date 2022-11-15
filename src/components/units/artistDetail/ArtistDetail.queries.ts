import { gql } from "@apollo/client";

export const FETCH_ARTIST = gql`
  query {
    fetchArtist {
      id
      active_name
      description
      promotion_url
      artist_image {
        id
        url
      }
      category {
        id
        name
      }
    }
  }
`;
