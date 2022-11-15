import styled from "@emotion/styled";
import {
  boxShadow,
  breakPoints,
  styleSecondColor,
} from "../../../commons/styles/globalStyles";

export const Wrapper = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  @media ${breakPoints.mobile} {
    padding: 0 20px;
  }
  padding-bottom: 100px;

  @media ${breakPoints.tablet} {
    padding: 0 30px;
  }
`;

export const CommonTitle = styled.p`
  font-size: 2rem;
  font-weight: 600;
  color: ${styleSecondColor};
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  @media ${breakPoints.mobile} {
    flex-direction: column;
  }
`;

export const TypingIntro = styled.div`
  width: fit-content;
  .typewriter span {
    display: block;
    font-size: 2rem;
    color: #222;
    font-family: monospace;
    overflow: hidden;
    border-right: 0.15rem solid orange;
    white-space: nowrap;
    margin: 0 auto;
    letter-spacing: 0.2em;
  }

  .typewriter span:nth-of-type(1) {
    width: 100%;
    animation: typing1 3.5s steps(30, end),
      blink-caret 0.5s step-end infinite alternate;
    animation-fill-mode: forwards;
  }

  .typewriter span:nth-of-type(2) {
    opacity: 0;
    width: 340px;
    animation: typing2 3.5s steps(30, end),
      blink-caret 0.5s step-end infinite alternate;
    animation-delay: 3.5s;
    animation-fill-mode: forwards;
  }

  strong {
    font-size: 2.5rem;
    font-family: monospace;
    color: ${styleSecondColor};
  }

  /* The typing effect */
  @keyframes typing1 {
    0% {
      width: 0;
    }
    99% {
      border-right: 0.15rem solid ${styleSecondColor};
    }
    100% {
      border: none;
    }
  }

  @keyframes typing2 {
    0% {
      width: 0;
      opacity: 1;
    }

    to {
      opacity: 1;
      width: 340px;
    }
  }

  /* The typewriter cursor effect */
  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: ${styleSecondColor};
    }
  }

  @media ${breakPoints.mobile} {
    width: 350px;
    .typewriter span {
      font-size: 1.5rem;
    }
    span {
      font-size: 2rem;
    }

    @keyframes typing2 {
      0% {
        width: 0;
        opacity: 1;
      }

      to {
        opacity: 1;
        width: 260px;
      }
    }
  }
`;

export const ArtistContents = styled.div`
  display: flex;
  width: 100%;
`;

export const ArtistContentsLeft = styled.div`
  width: 68.3333%;
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const ArtistIntro = styled.p`
  font-size: 2rem;

  @media ${breakPoints.mobile} {
    font-size: 1.8rem;
  }
`;

export const TeamMemberBox = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  flex-wrap: wrap;
  gap: 20px;
  border: 1px solid blue;
  padding: 1rem;

  @media ${breakPoints.mobile} {
    flex-direction: column;
  }
`;

export const Member = styled.li`
  width: 100%;
  flex: 1;
  border: 1px solid red;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const MemberInfo = styled.div`
  display: flex;
  flex-direction: column;

  * {
    font-size: 1.5rem;
  }

  @media ${breakPoints.mobile} {
    flex-direction: row;
    gap: 20px;
  }
`;

export const ArtistContentsRight = styled.div`
  width: 26.3333%;
  margin-left: 5.333%;
  @media ${breakPoints.mobile} {
    width: 100%;
    margin: 0;
    position: fixed;
    bottom: 0;
    left: 0;
  }
`;

export const StickyBox = styled.div`
  position: sticky;
  top: 50px;
  width: 100%;
  height: 200px;
  border-radius: 15px;
  padding: 1.5rem;
  box-shadow: ${boxShadow};

  @media ${breakPoints.mobile} {
    position: static;
    height: 80px;
    border-top: 1px solid #ddd;
    border-radius: 0px;
    padding: 0;
    box-shadow: none;
    background-color: white;
  }
`;

export const RecentArts = styled.div`
  width: 100%;
  border: 1px solid blue;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

export const RecentArt = styled.div`
  flex: 1;
  border: 1px solid red;
  padding: 1rem;
  padding-bottom: 25%;
  overflow: hidden;
  word-break: keep-all;
`;
