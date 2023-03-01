import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import getDate from "../../../commons/libraries/getDate";
import useAuth from "../../../commons/libraries/useAuth";
import {
  IMutation,
  IMutationDeleteBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../commons/types/generated/types";
import ArtDetailUI from "./ArtDetail.presenter";
import { DELETE_BOARD, FETCH_ARTIST, FETCH_BOARD } from "./ArtDetail.queries";

const ArtDetail = () => {
  useAuth();
  const router = useRouter();
  const [date, setDate] = useState(["", ""]);
  const [isArtist, setIsArtist] = useState(false);
  const { data: artistData } =
    useQuery<Pick<IQuery, "fetchArtist">>(FETCH_ARTIST);
  const { data: artData } = useQuery<
    Pick<IQuery, "fetchBoard">,
    IQueryFetchBoardArgs
  >(FETCH_BOARD, {
    variables: { boardId: String(router.query.id) },
  });

  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);

  useEffect(() => {
    if (typeof window !== "undefined")
      setDate([
        getDate(artData?.fetchBoard.start_time),
        getDate(artData?.fetchBoard.end_time),
      ]);

    artistData?.fetchArtist.id === artData?.fetchBoard.artist.id
      ? setIsArtist(true)
      : setIsArtist(false);
  }, [artData, artistData]);

  const onClickMoveToEdit = async () => {
    await router.push(`./${String(router.query.id)}/edit`);
  };

  const onClickDelete = async () => {
    try {
      Modal.confirm({
        content: (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            정말로 삭제하시겠습니까?
          </div>
        ),
        onOk: async () => {
          await deleteBoard({
            variables: { boardId: String(router.query.id) },
            update(cache) {
              cache.modify({
                fields: () => {},
              });
            },
          });
          await router.push("/main/list");
        },
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickMoveToArtistDetail = (id: string) => () => {
    void router.push(`/artistdetail/${id}`);
  };

  return (
    <ArtDetailUI
      onClickMoveToArtistDetail={onClickMoveToArtistDetail}
      onClickMoveToEdit={onClickMoveToEdit}
      onClickDelete={onClickDelete}
      isArtist={isArtist}
      data={artData}
      date={date}
      routerId={router.query.id}
    />
  );
};

export default ArtDetail;
