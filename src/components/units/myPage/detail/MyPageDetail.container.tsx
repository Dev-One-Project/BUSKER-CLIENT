import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useRef, useState } from "react";
import {
  IMutation,
  IMutationArtistLikeToggleArgs,
  IMutationUpdateUserArgs,
  IQuery,
} from "../../../../commons/types/generated/types";
import MyPageDetailUI from "./MyPageDetail.presenter";
import {
  ARTIST_LIKE_TOGGLE,
  FETCH_USER,
  UPDATE_USER,
} from "./MyPageDetail.queries";

const MyPageDetail = () => {
  const router = useRouter();
  const imageRef = useRef<HTMLInputElement>(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [nickname, setNickname] = useState("");
  const { data } = useQuery<Pick<IQuery, "fetchUser">>(FETCH_USER);

  const [artistLikeToggle] = useMutation<
    Pick<IMutation, "artistLikeToggle">,
    IMutationArtistLikeToggleArgs
  >(ARTIST_LIKE_TOGGLE);

  const [updateUser] = useMutation<
    Pick<IMutation, "updateUser">,
    IMutationUpdateUserArgs
  >(UPDATE_USER);

  const onClickPickedArtist =
    (id: string) => (event: MouseEvent<HTMLLIElement>) => {
      void router.push(`/artistDetail/${id}`);
    };

  const onClickEditPassword = () => {
    void router.push("/password/change");
  };

  const onClickEditName = async () => {
    try {
      const result = await updateUser({
        variables: { updateUserInput: { nickname } },
        refetchQueries: [
          {
            query: FETCH_USER,
          },
        ],
      });
      console.log(result);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  const onClickEditProfileImage = () => imageRef.current?.click();
  const onChangeImage = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file == null) return;

    console.log(file);
  };
  const onClickPickOff =
    (id: string) => async (event: MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      try {
        const result = await artistLikeToggle({
          variables: { status: true, artistId: id },
          refetchQueries: [
            {
              query: FETCH_USER,
            },
          ],
        });
        console.log(result);
      } catch (error) {
        if (error instanceof Error) alert(error.message);
      }
    };

  const onClickTab = () => {
    setIsEdit((prev) => !prev);
  };

  const onToggleEditMode = () => {
    setIsEditMode((prev) => !prev);
  };

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value);
  };
  return (
    <MyPageDetailUI
      onChangeName={onChangeName}
      onToggleEditMode={onToggleEditMode}
      onChangeImage={onChangeImage}
      onClickEditPassword={onClickEditPassword}
      onClickEditName={onClickEditName}
      onClickEditProfileImage={onClickEditProfileImage}
      imageRef={imageRef}
      onClickTab={onClickTab}
      isEdit={isEdit}
      isEditMode={isEditMode}
      onClickPickOff={onClickPickOff}
      onClickPickedArtist={onClickPickedArtist}
      data={data}
    />
  );
};

export default MyPageDetail;
