import { ChangeEvent } from "react";

export interface INewCommentProps {
  onClickCreateComment: () => void;
  onChangeInput: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  comment: string;
}
