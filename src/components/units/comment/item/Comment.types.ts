import { ChangeEvent } from "react";

export interface ICommentProps {
  data?: any;
  isEdit: boolean;
  comment: string;
  onClickDelete: (id: string) => () => void;
  onClickEdit: (id: string) => () => void;
  onEditComment: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}
