import { gql, GraphQLClient } from "graphql-request";

const RESTORE_ACCESS_TOKEN = gql`
  mutation restoreAccessToken {
    restoreAccessToken
  }
`;

export const getAccessToken = async () => {
  try {
    const graphQLClient = new GraphQLClient("https://chansweb.shop/graphql", {
      credentials: "include",
    });
    // 빌드 에러 방지용 any
    const result: any = await graphQLClient.request(RESTORE_ACCESS_TOKEN);
    const newAccessToken = result.restoreAccessToken;
    console.log(newAccessToken);
    return newAccessToken;
  } catch (error) {}
};
