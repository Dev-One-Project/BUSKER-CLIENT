import Comment from "../item/Comment.container";
import { ICommentListProps } from "./CommentList.types";
import * as S from "./CommentList.styles";

const CommentListUI = (props: ICommentListProps) => {
  return (
    <S.Wrapper>
      <span>댓글 리스트</span>
      <ul>
        {new Array(10).fill(1).map((comment, i) => (
          <Comment data={comment} key={i} />
        ))}
      </ul>
    </S.Wrapper>
  );
};

export default CommentListUI;
