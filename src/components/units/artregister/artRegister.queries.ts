import { gql } from "@apollo/client";

export const CREATE_BOARDS = gql`
  mutation createBoards($createBoardInput: CreateBoardInput!) {
    createBoards(createBoardInput: $createBoardInput) {
      id
    }
  }
`;

export const FETCH_ARTIST = gql`
  query fetchArtist($artistId: String!) {
    fetchArtist(artistId: $artistId) {
      active_name
    }
  }
`;

export const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file)
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

export const UPDATE_BOARD = gql`
  mutation updateBoard(
    $boardId: String!
    $updateBoardInput: UpdateBoardInput!
  ) {
    updateBoard(boardId: $boardId, updateBoardInput: $updateBoardInput) {
      id
    }
  }
`;

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: String!) {
    fetchBoard(boardId: $boardId) {
      id
      contents
      start_time
      end_time
      boardAddress {
        address
        lat
        lng
      }
      boardImageURL {
        url
      }
    }
  }
`;

export const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards
  }
`;
