import { gql } from "@apollo/client";

export const FETCH_BOARDS_BY_SEARCH = gql`
  query fetchBoardsBySearch(
    $page: Int
    $categoryId: [String!]
    $districtId: String
  ) {
    fetchBoardsBySearch(
      page: $page
      categoryId: $categoryId
      districtId: $districtId
    ) {
      id
      artist {
        id
        active_name
      }
      title
      contents
      start_time
      end_time
      category {
        id
        name
      }
      isShowTime
      boardAddress {
        id
        address
        lat
        lng
      }
      boardImageURL {
        id
        url
      }
    }
  }
`;

export const FETCH_CITY = gql`
  query fetchCity($name: String!) {
    fetchCity(name: $name) {
      name
      district
    }
  }
`;

export const FETCH_CITYS = gql`
  query {
    fetchCitys {
      id
      name
    }
  }
`;

export const FETCH_CATEGORIES = gql`
  query {
    fetchCategories {
      id
      name
    }
  }
`;
