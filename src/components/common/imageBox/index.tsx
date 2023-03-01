import styled from "@emotion/styled";
import { MouseEventHandler } from "react";

interface IImageBoxProps {
  src: string | undefined;
  width: string;
  height: string;
  onClick?: MouseEventHandler<HTMLImageElement> | undefined;
}

const ImageBox = (props: IImageBoxProps) => {
  return (
    <StyledImageBox style={{ width: props.width, height: props.height }}>
      <StyledImage onClick={props.onClick} src={props.src ?? "/avatar.png"} />
    </StyledImageBox>
  );
};

export default ImageBox;

const StyledImageBox = styled.div`
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ddd;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
`;
