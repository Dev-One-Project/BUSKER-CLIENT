import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationCreateCommentArgs,
} from "../../../../commons/types/generated/types";

import { ChangeEvent, useState } from "react";
import NewCommentUI from "./NewComment.presenter";
import { CREATE_COMMENT } from "./NewComment.queries";

const NewComment = () => {
  const router = useRouter();
  const [createComment] = useMutation<
    Pick<IMutation, "createComment">,
    IMutationCreateCommentArgs
  >(CREATE_COMMENT);
  const [comment, setComment] = useState("");
  const onClickCreateComment = async () => {
    if (!comment) return;
    try {
      await createComment({
        variables: {
          createCommentInput: {
            boardId: String(router.query.id),
            content: comment,
          },
        },
        update(cache) {
          cache.modify({
            fields: () => {},
          });
        },
      });

      setComment("");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  const onChangeInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
  };
  return (
    <NewCommentUI
      comment={comment}
      onChangeInput={onChangeInput}
      onClickCreateComment={onClickCreateComment}
    />
  );
};

export default NewComment;
