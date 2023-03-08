import { useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";
import CommentListUI from "./CommentList.presenter";
import { FETCH_COMMENT } from "./CommentList.queries";

interface ICommentListProps {
  boardId?: string | string[];
}

const CommentList = ({ boardId }: ICommentListProps) => {
  const { data } = useQuery<Pick<IQuery, "fetchComments">>(FETCH_COMMENT, {
    variables: { boardId },
  });

  return <CommentListUI data={data} />;
};

export default CommentList;
