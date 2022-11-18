import { gql } from "@apollo/client";

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: String!) {
    fetchBoard(boardId: $boardId) {
      id
      title
      contents
      start_time
      end_time
      isShowTime
      createAt
      category {
        id
        name
      }
      artist {
        id
        active_name
        artistImageURL
      }
      boardAddress {
        id
        address
        address_city
        address_district
        lat
        lng
      }
      boardImageURL {
        id
        url
      }
      comments {
        id
        content
        user {
          nickname
          userImageURL
        }
      }
    }
  }
`;

export const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: String!) {
    deleteBoard(boardId: $boardId)
  }
`;