import styled from "@emotion/styled";
import {
  boxShadow,
  breakPoints,
  stylePrimaryColor,
} from "../../../../commons/styles/globalStyles";

export const buttonStyle = {
  borderBottom: "none",
  borderRadius: "0px",
};

export const Wrapper = styled.div`
  @media ${breakPoints.desktop} {
    padding: 0 80px;
    max-width: 1440px;
  }
  @media ${breakPoints.tablet} {
    padding: 0 40px;
    max-width: 991px;
  }
  @media ${breakPoints.mobile} {
    padding: 0 10px;
    max-width: 767px;
  }

  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  height: 100%;
  box-shadow: ${boxShadow};
  border-radius: 1rem;
  max-width: 1100px;
  width: 100%;
  overflow: hidden;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  padding: 1em;
  background-color: ${stylePrimaryColor};
  color: white;
`;

export const Contents = styled.div`
  @media ${breakPoints.desktop} {
    padding: 3em 5em;
  }
  @media ${breakPoints.tablet} {
    padding: 2em 4.5em;
  }
  @media ${breakPoints.mobile} {
    padding: 1em 2em;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  justify-content: start;
`;

export const UserName = styled.span`
  font-size: 1.5em;
  padding-left: 10px;
`;

export const ButtonBox = styled.div`
  display: flex;
  padding-top: 2.5rem;
`;

export const MyPickBox = styled.div``;
export const PickComment = styled.h2`
  font-size: 2rem;
  & > span {
    font-size: 2rem;
    color: ${stylePrimaryColor};
  }
`;

export const PickedArtistBox = styled.ul`
  list-style: none;
  padding: 0;
  max-width: 700px;
  min-width: 200px;
`;

export const PickedArtistLi = styled.li`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > span {
    font-size: 1.4rem;
  }
  cursor: pointer;
  transition: all ease 0.2s;
  border-radius: 5px;
`;

export const PickedArtistProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const PickedArtistName = styled.span`
  font-size: 1.4rem;
`;

export const MyDetailEditBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 2.5rem;
`;
export const FormBox = styled.div`
  min-width: 250px;
  max-width: 50%;
  width: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;

  & > span,
  & > div {
    font-size: 1.5rem;
  }
`;
