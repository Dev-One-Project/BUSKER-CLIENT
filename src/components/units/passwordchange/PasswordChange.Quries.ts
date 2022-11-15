import { gql } from "@apollo/client";

export const RESET_PASSWORD = gql`
  mutation resetPassword($updatePasswordInput: UpdatePasswordInput!) {
    resetPassword(updatePasswordInput: $updatePasswordInput)
  }
`;

export const LOGOUT = gql`
  mutation logout {
    logout
  }
`;
