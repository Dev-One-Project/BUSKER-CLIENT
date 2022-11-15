import styled from "@emotion/styled";
import { ChangeEvent, CSSProperties } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { stylePrimaryColor } from "../../../../commons/styles/globalStyles";

interface IProps {
  type: "text" | "password";
  register?: UseFormRegisterReturn;
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
  value?: string;
  style?: CSSProperties;
}

const LoginInputStyle = styled.input`
  margin: 1rem 0;
  height: 50px;
  font-size: 1.5rem;
  border-radius: 10px;
  padding: 20px;
  border: 1px solid #ddd;
  outline: none;
  transition: all 0.1s ease-in-out;
  :focus {
    border: 1px solid ${stylePrimaryColor};
  }
`;

export default function Input01(props: IProps) {
  return (
    <LoginInputStyle
      style={props.style}
      placeholder={props.placeholder}
      type={props.type}
      {...props.register}
      onChange={props.onChange}
      readOnly={props.readOnly}
      value={props.value}
    />
  );
}
