import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
  query fetchBoards($page: Float!) {
    fetchBoards(page: $page) {
      id
      title
      contents
      start_time
      end_time
      isShowTime
      createAt
      updatedAt
      category {
        id
        name
      }
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

export const FETCH_BOARDS_BY_SEARCH = gql`
  query fetchBoardsBySearch(
    $searchBoardInput: SearchBoardInput
    $time: DateTime!
  ) {
    fetchBoardsBySearch(searchBoardInput: $searchBoardInput, time: $time) {
      id
      artist {
        id
        active_name
      }
      title
      contents
      start_time
      end_time
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
