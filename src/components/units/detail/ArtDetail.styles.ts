import styled from "@emotion/styled";
import {
  breakPoints,
  stylePrimaryColor,
  styleSecondColor,
} from "../../../commons/styles/globalStyles";

export const Wrapper = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;

  @media ${breakPoints.mobile} {
    padding: 0 1rem;
  }
`;

export const Title = styled.span`
  display: block;
  font-size: 2.5rem;
  padding: 2rem 1rem;

  & > span {
    font-size: 2.5rem;
    color: ${styleSecondColor};
  }

  @media ${breakPoints.mobile} {
    font-size: 2rem;
    & > span {
      font-size: 2rem;
    }
  }
`;

export const ContentBox = styled.div`
  display: flex;
  align-items: flex-start;
  @media ${breakPoints.mobile} {
    flex-direction: column;
  }
`;

export const ArtistInfoBox = styled.div`
  min-width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding-top: 30px;
`;

export const ArtistName = styled.h2`
  font-size: 2rem;
  width: 120px;
`;

export const Contents = styled.p`
  font-size: 1.5rem;
  margin: 0;
  padding: 1rem;
  margin-top: 2rem;
  background-color: #eee;
  border-radius: 1rem;
  word-break: keep-all;
`;

export const Genre = styled.span`
  font-size: 2rem;
  padding: 0.5rem 2rem;

  & > span {
    font-size: 2rem;
    color: ${styleSecondColor};
  }

  background-color: ${stylePrimaryColor};
  border-radius: 50px;
  color: white;
`;

export const KakaoBox = styled.div`
  width: 100%;
  height: 400px;
`;
