import { gql } from "@apollo/client";

export const CREATE_ARTIST = gql`
  mutation createArtist($createArtistInput: CreateArtistInput!) {
    createArtist(createArtistInput: $createArtistInput) {
      id
    }
  }
`;

export const FETCH_ARTIST = gql`
  query fetchArtist {
    fetchArtist {
      id
      active_name
      description
      promotion_url
      artistImageURL
      category {
        id
        name
      }
    }
  }
`;

export const UPDATE_ARTIST = gql`
  mutation updateArtist($updateArtistInput: UpdateArtistInput!) {
    updateArtist(updateArtistInput: $updateArtistInput) {
      id
    }
  }
`;
export const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file)
  }
`;

export const CREATE_MEMBER = gql`
  mutation createMember(
    $artistId: String!
    $createMemberInput: CreateMemberInput!
  ) {
    createMember(artistId: $artistId, createMemberInput: $createMemberInput) {
      id
    }
  }
`;

export const FECTH_CATEGORIES = gql`
  query fetchCategories {
    fetchCategories {
      id
      name
    }
  }
`;

export const FETCH_MEMBERS = gql`
  query fetchMembers($artistId: String!) {
    fetchMembers(artistId: $artistId) {
      id
      name
      role
      memberImageURL
    }
  }
`;
