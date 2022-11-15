import styled from "@emotion/styled";
import { styleSecondColor } from "../../../../commons/styles/globalStyles";

export const Wrapper = styled.div`
  position: relative;
`;

export const NewCommentInput = styled.textarea`
  width: 100%;
  height: 100px;
  resize: none;
  border: 1px solid ${styleSecondColor};
  border-radius: 10px;
  padding: 1rem;
  font-size: 1.3rem;
`;

export const NewCommentButton = styled.div`
  position: absolute;
  right: 10px;
  top: 60px;
`;
