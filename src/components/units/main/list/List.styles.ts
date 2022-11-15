import styled from "@emotion/styled";
import { stylePrimaryColor } from "../../../../commons/styles/globalStyles";

export const Wrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
`;

export const Header = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${stylePrimaryColor};
`;

export const OptionBox = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${stylePrimaryColor};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;

  & > div {
    width: 100px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 1.3rem;
  }
`;

export const LocationOptionBox = styled.div``;

export const GenreOptionBox = styled.div``;

export const ListBox = styled.ul`
  list-style: none;
  display: grid;
  grid-auto-flow: row dense;
  grid-auto-rows: minmax(min-content, max-content);
  gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  padding: 0 30px;
  padding-top: 2rem;
`;
