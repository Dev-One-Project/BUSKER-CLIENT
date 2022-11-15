import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
  query fetchBoards($searchBoardInput: SearchBoardInput) {
    fetchBoards(searchBoardInput: $searchBoardInput) {
      id
      title
      contents
      start_time
      end_time
      isShowTime
      category {
        id
        name
      }
      artist {
        id
        active_name
        artist_image {
          id
          url
        }
      }
      boardAddress {
        id
        address
        address_city
        address_district
        lat
        lng
      }
    }
  }
`;

export const CREATE_DISTRICT_LIST = gql`
  mutation {
    createDistrictList
  }
`;

export const DISTRICT_LIST = gql`
  query {
    districtList {
      id
      district
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

export const CREATE_CITY = gql`
  mutation {
    createCity
  }
`;
