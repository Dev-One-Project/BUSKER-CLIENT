import styled from "@emotion/styled";
import { styleSecondColor } from "../../../../commons/styles/globalStyles";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 150px;
  display: flex;
  padding-bottom: 30px;
`;

export const UserBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 50px;
`;

export const UserName = styled.span`
  font-size: 1.5rem;
`;

export const ContentBox = styled.textarea`
  flex: 10;
  width: 100%;
  height: 100%;
  border: none;
  font-size: 1.2rem;
  padding: 1.5rem;
  resize: none;
  background-color: ${(props) => (props.disabled ? "#ddd" : "#eee")};
  outline: none;
  border-radius: 10px;
  word-break: keep-all;
`;

export const EditButton = styled.button`
  position: absolute;
  top: 10px;
  right: 50px;
  cursor: pointer;
  border: none;
  padding: 0.5rem;
  background-color: transparent;
  & * {
    font-size: 20px;
  }

  &:hover * {
    color: ${styleSecondColor};
  }
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  border: none;
  padding: 0.5rem;
  background-color: transparent;
  & * {
    font-size: 20px;
  }
  &:hover * {
    color: red;
  }
`;
