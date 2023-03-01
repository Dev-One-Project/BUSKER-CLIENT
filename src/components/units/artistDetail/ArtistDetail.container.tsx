import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import useAuth from "../../../commons/libraries/useAuth";
import {
  IMutation,
  IMutationArtistLikeToggleArgs,
  IQuery,
  IQueryFetchArtistCountArgs,
  IQueryFetchArtistWithoutAuthArgs,
  IQueryFetchMembersArgs,
} from "../../../commons/types/generated/types";
import { FETCH_USER } from "../myPage/detail/MyPageDetail.queries";
import ArtistDetailUI from "./ArtistDetail.presenter";
import {
  ARTIST_LIKE_TOGGLE,
  FETCH_ARTIST,
  FETCH_ARTIST_COUNT,
  FETCH_ARTIST_WITHOUT_AUTH,
  FETCH_MEMBERS,
  FETCH_RECENT_BOARDS,
} from "./ArtistDetail.queries";

interface IArtistProps {
  artistId: string;
}

const ArtistDetail = ({ artistId }: IArtistProps) => {
  useAuth();
  const router = useRouter();

  const { data } = useQuery<
    Pick<IQuery, "fetchArtistWithoutAuth">,
    IQueryFetchArtistWithoutAuthArgs
  >(FETCH_ARTIST_WITHOUT_AUTH, { variables: { artistId: artistId ?? "" } });

  const { data: artistData } =
    useQuery<Pick<IQuery, "fetchArtist">>(FETCH_ARTIST);

  const { data: likeCount } = useQuery<
    Pick<IQuery, "fetchArtistCount">,
    IQueryFetchArtistCountArgs
  >(FETCH_ARTIST_COUNT, { variables: { artistId } });

  const [artistLikeToggle] = useMutation<
    Pick<IMutation, "artistLikeToggle">,
    IMutationArtistLikeToggleArgs
  >(ARTIST_LIKE_TOGGLE);

  const { data: fetchRecentBoards } = useQuery<
    Pick<IQuery, "fetchRecentBoards">
  >(FETCH_RECENT_BOARDS, { variables: { artistId } });

  const { data: memberData } = useQuery<
    Pick<IQuery, "fetchMembers">,
    IQueryFetchMembersArgs
  >(FETCH_MEMBERS, { variables: { artistId } });

  const { data: userData } = useQuery<Pick<IQuery, "fetchUser">>(FETCH_USER);

  const onClickLikeArtist = (status: boolean) => async () => {
    try {
      await artistLikeToggle({
        variables: {
          artistId: artistId ?? "",
          status,
        },
        update(cache) {
          cache.modify({
            fields: () => {},
          });
        },
      });
      Modal.success({
        content: status
          ? "이 버스커를 찜 해제했습니다."
          : "이 버스커를 찜했습니다.",
      });
    } catch (error) {
      if (error instanceof Error) {
        if (error.message.includes("exist"))
          Modal.warning({ content: "이미 찜한 버스커입니다!" });
      }
    }
  };

  const onClickMoveToEdit = () => {
    void router.push(`/artistdetail/${String(router.query.id)}/edit`);
  };

  const onClickGoBack = () => {
    void router.back();
  };

  const onClickMoveToRecent = (id: string) => () => {
    void router.push(`/main/list/${id}`);
  };

  return (
    <ArtistDetailUI
      userData={userData}
      onClickMoveToRecent={onClickMoveToRecent}
      likeCount={likeCount}
      artistData={artistData}
      data={data}
      fetchRecentBoards={fetchRecentBoards}
      onClickGoBack={onClickGoBack}
      onClickMoveToEdit={onClickMoveToEdit}
      onClickLikeArtist={onClickLikeArtist}
      memberData={memberData}
      artistId={artistId}
    />
  );
};

export default ArtistDetail;
