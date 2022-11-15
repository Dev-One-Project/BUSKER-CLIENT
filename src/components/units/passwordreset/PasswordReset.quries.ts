import { gql } from "@apollo/client";

export const NON_LOGIN_SEND_VERIFICATION_EMAIL = gql`
  mutation nonLoginSendVerificationEmail($email: String!) {
    nonLoginSendVerificationEmail(email: $email)
  }
`;

export const NON_LOGIN_CONFIRM_VERIFICATION = gql`
  mutation nonLoginConfirmVerificationEmail(
    $authNumber: String!
    $email: String!
  ) {
    nonLoginConfirmVerificationEmail(authNumber: $authNumber, email: $email)
  }
`;
