import { gql } from "@apollo/client";

export const UPDATE_COMMENT = gql`
  mutation updateComment($commentId: String!, $comment: String!) {
    updateComment(commendId: $commentId, comment: $comment) {
      id
      content
    }
  }
`;

export const DELETE_COMMENT = gql`
  mutation deleteComment($commendId: String!) {
    deleteComment(commendId: $commendId)
  }
`;
