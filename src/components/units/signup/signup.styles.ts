import styled from "@emotion/styled";
import {
  breakPoints,
  stylePrimaryColor,
} from "../../../commons/styles/globalStyles";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SignupTopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
  border-bottom: 2px solid gray;
  margin-bottom: 2rem;
  padding: 2rem 0;
  @media ${breakPoints.mobile} {
    width: 250px;
  }
`;

export const SignupInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SignupWrapper = styled.form`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  align-items: center;
  @media ${breakPoints.mobile} {
    padding: 0 2rem;
  }
`;

export const LogoStyle = styled.div`
  font-size: 5rem;
`;

export const BtnWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 10%;

  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column-reverse;
    width: 100%;
    button {
      width: 100%;
    }
  }
`;

export const BtnStyle = styled.button`
  width: 100%;
  font-size: 2rem;
  margin-top: 1rem;
  font-weight: 600;
  background: none;
  border: 1px solid ${stylePrimaryColor};
  border-radius: 1rem;
  height: 3rem;
  cursor: pointer;
  height: 50px;

  :nth-of-type(1) {
    color: ${stylePrimaryColor};
  }

  :nth-of-type(2) {
    color: white;
    background-color: ${stylePrimaryColor};
  }
`;

export const ErrorStyle = styled.div`
  font-size: 1.3rem;
  color: red;
`;
