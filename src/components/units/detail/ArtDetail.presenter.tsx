import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Divider } from "antd";
import { useRecoilState } from "recoil";
import { userPositionState } from "../../../commons/store";
import ImageBox from "../../common/imageBox";
import KakaoMap from "../../common/kakaoMap";
import CommentList from "../comment/list/CommentList.container";
import NewComment from "../comment/new/NewComment.container";
import * as S from "./ArtDetail.styles";
import { IArtDetailProps } from "./ArtDetail.types";
import ImageCarousel from "./ArtImageCarousel";

const ArtDetailUI = (props: IArtDetailProps) => {
  const [userPosition] = useRecoilState(userPositionState);
  return (
    <S.Wrapper>
      <S.Title
        style={{
          textAlign: "center",
          color: "#6600FF",
          fontSize: "3.5rem",
          fontWeight: "600",
        }}
      >
        버스킹 정보
      </S.Title>
      <S.TopDaesungSolGD>
        <ImageCarousel data={props.data?.fetchBoard.boardImageURL} />
        <S.ContentBox>
          <S.ArtistInfoBox>
            <ImageBox
              src={`https://storage.googleapis.com/busker-storage/${String(
                props.data?.fetchBoard.artist.artistImageURL
              )}`}
              width="75px"
              height="75px"
            ></ImageBox>
            <S.ArtistName
              onClick={props.onClickMoveToArtistDetail(
                props.data?.fetchBoard.artist.id ?? ""
              )}
            >
              <div style={{ fontSize: "1.5rem", color: "#6600FF" }}>버스커</div>
              {props.data?.fetchBoard.artist.active_name}
            </S.ArtistName>
            <S.Genre># {props.data?.fetchBoard.category.name}</S.Genre>
            {props.isArtist && (
              <S.ControllBox>
                <EditOutlined onClick={props.onClickMoveToEdit} />
                <DeleteOutlined onClick={props.onClickDelete} />
              </S.ControllBox>
            )}
          </S.ArtistInfoBox>
          <S.Contents>{props.data?.fetchBoard.contents}</S.Contents>
        </S.ContentBox>
      </S.TopDaesungSolGD>
      <Divider />
      <S.Title>{`${props.date?.[0] ?? ""}부터`}</S.Title>
      <S.Title>{`${props.date?.[1] ?? ""}까지`}</S.Title>
      <Divider />
      <S.Title>
        이번에는 <span>이곳에서</span> 버스킹을 진행해요!
      </S.Title>
      <S.KakaoBox>
        <KakaoMap
          position={userPosition}
          isMap={false}
          address={props.data?.fetchBoard.boardAddress.address ?? ""}
        />
      </S.KakaoBox>
      <Divider />
      <S.Title>
        버스킹에 대한 <span>후기</span>를 남겨주세요!
      </S.Title>
      <NewComment />
      <CommentList boardId={String(props.routerId)} />
    </S.Wrapper>
  );
};

export default ArtDetailUI;
