import { gql } from "@apollo/client";

export const FETCH_COMMENT = gql`
  query fetchComment($boardId: String!) {
    fetchComment(boardId: $boardId) {
      id
      content
      user {
        id
        nickname
        userImage {
          id
          url
        }
      }
    }
  }
`;
