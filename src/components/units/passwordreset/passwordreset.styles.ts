import styled from "@emotion/styled";
import {
  breakPoints,
  stylePrimaryColor,
} from "../../../commons/styles/globalStyles";

export const Reset = styled.button`
  width: 100%;
  font-size: 2rem;
  margin-top: 1rem;
  color: ${stylePrimaryColor};
  font-weight: 600;
  background: none;
  border: 1px solid ${stylePrimaryColor};
  border-radius: 1rem;
  cursor: pointer;
  height: 50px;
  :hover {
    background-color: ${stylePrimaryColor};
    color: white;
  }
  @media ${breakPoints.mobile} {
    font-size: 1.5rem;
  }
`;

export const MainWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  margin-bottom: 2rem;
  width: 100%;
`;

export const LogoStyle = styled.div`
  font-size: 5rem;
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

export const PasswordChangeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const InputBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-right: 10px;
  input {
    width: 100%;
  }
  gap: 20px;
`;

export const ConfirmBtn = styled.button`
  width: 20%;
  color: ${stylePrimaryColor};
  font-weight: 600;
  background: none;
  border: 1px solid ${stylePrimaryColor};
  border-radius: 1rem;
  cursor: pointer;
  height: 50px;
  :hover {
    background-color: ${stylePrimaryColor};
    color: white;
  }
`;

export const TextStyle = styled.div`
  font-size: 1.5rem;
  text-align: center;
  padding-bottom: 10px;
  color: #ccc;
`;

export const ErrorStyle = styled.div`
  font-size: 1.3rem;
  color: red;
  padding: 0 20px;
`;

export const InputErrorWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
