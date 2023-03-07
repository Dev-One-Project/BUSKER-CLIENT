import { gql } from "@apollo/client";

export const CREATE_BOARDS = gql`
  mutation createBoards($createBoardInput: CreateBoardInput) {
    createBoards(createBoardInput: $createBoardInput) {
      id
    }
  }
`;

export const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file)
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
        id
        address
        lat
        lng
      }
    }
  }
`;
