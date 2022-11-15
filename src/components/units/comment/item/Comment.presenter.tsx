import ImageBox from "../../../common/imageBox";
import * as S from "./Comment.styles";
import { ICommentProps } from "./Comment.types";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const CommentUI = (props: ICommentProps) => {
  return (
    <S.Wrapper>
      <S.UserBox>
        <ImageBox width="42px" height="42px" src={props.data.image} />
        <S.UserName>{props.data.nickname ?? "익명"}</S.UserName>
      </S.UserBox>
      <S.ContentBox
        value={props.comment}
        onChange={props.onEditComment}
        disabled={props.isEdit}
      ></S.ContentBox>
      <S.EditButton onClick={props.onClickEdit(props.data.id)}>
        <EditOutlined />
      </S.EditButton>
      <S.DeleteButton onClick={props.onClickDelete(props.data.id)}>
        <DeleteOutlined />
      </S.DeleteButton>
    </S.Wrapper>
  );
};

export default CommentUI;
