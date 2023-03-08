import Comment from "../item/Comment.container";
import { ICommentListProps } from "./CommentList.types";
import * as S from "./CommentList.styles";

const CommentListUI = (props: ICommentListProps) => {
  return (
    <S.Wrapper>
      <ul style={{ paddingTop: "2rem" }}>
        {props.data?.fetchComments.map((comment, i) => (
          <Comment data={comment} key={i} />
        ))}
      </ul>
    </S.Wrapper>
  );
};

export default CommentListUI;
