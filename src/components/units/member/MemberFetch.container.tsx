import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import {
  IMutation,
  IMutationDeleteMemberArgs,
} from "../../../commons/types/generated/types";
import { FETCH_MEMBERS } from "../artistsignup/artistSignup.queries";

import MemberFetchWriteUI from "./MemberFetch.presenter";
import { DELETE_MEMBER } from "./MemberFetch.quries";
import { IMemberFetchWrite } from "./MemberFetch.types";

const MemberFetchWrite = (props: IMemberFetchWrite) => {
  const router = useRouter();
  const [saveId, setSaveId] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const [deleteMember] = useMutation<
    Pick<IMutation, "deleteMember">,
    IMutationDeleteMemberArgs
  >(DELETE_MEMBER);

  const onClickId = (event: MouseEvent<HTMLButtonElement>) => {
    setIsOpen(true);
    setSaveId(event.currentTarget.id);
  };

  const onClickGetId = (event: MouseEvent<HTMLButtonElement>) => {
    props.setIsMemberEdit((prev: boolean) => !prev);
    props.setGetId(event.currentTarget.id);

    props.setEditData([
      String(props.el.memberImageURL),
      String(props.el.name),
      String(props.el.role),
    ]);
  };

  const onClickCancel = () => {
    setIsOpen(false);
  };

  const onClickDelete = async () => {
    await deleteMember({
      variables: {
        memberId: saveId,
      },
      refetchQueries: [
        {
          query: FETCH_MEMBERS,
          variables: {
            artistId: router.query.id,
          },
        },
      ],
    });
    setIsOpen(false);
  };

  return (
    <MemberFetchWriteUI
      el={props.el}
      isOpen={isOpen}
      onClickDelete={onClickDelete}
      onClickId={onClickId}
      onClickGetId={onClickGetId}
      onClickCancel={onClickCancel}
      setEditData={props.setEditData}
    />
  );
};

export default MemberFetchWrite;
