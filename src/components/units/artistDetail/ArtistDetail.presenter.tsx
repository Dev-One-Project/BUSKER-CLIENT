import { HeartFilled, YoutubeFilled } from "@ant-design/icons";
import { Divider } from "antd";
import getDate from "../../../commons/libraries/getDate";
import Button01 from "../../common/buttons/01";
import Button02 from "../../common/buttons/02";
import ImageBox from "../../common/imageBox";
import * as S from "./ArtistDetail.styles";
import { IArtistDetailProps } from "./ArtistDetail.types";

const ArtistDetailUI = (props: IArtistDetailProps) => {
  return (
    <S.Wrapper>
      <S.Header>
        <S.SummaryInfo>
          <YoutubeFilled
            style={{
              position: "absolute",
              color: "red",
              top: "110px",
              cursor: "pointer",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "110px",
              right: "0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                position: "absolute",
                zIndex: "3",
                color: "white",
                fontSize: "1.5rem",
              }}
            >
              {props.likeCount?.fetchArtistCount ?? 0}
            </div>
            <HeartFilled style={{ fontSize: "2rem", color: "#9900FF" }} />
          </div>
          <ImageBox
            width="150px"
            height="150px"
            src={`https://storage.googleapis.com/busker-storage/${String(
              props.data?.fetchArtistWithoutAuth.artistImageURL
            )}`}
          />
        </S.SummaryInfo>
        <S.TypingIntro>
          <div className="typewriter">
            <span>
              안녕하세요.{" "}
              <strong>{props.data?.fetchArtistWithoutAuth.active_name}</strong>
              입니다.
            </span>
            <span>
              저의 버스킹 주제는{" "}
              <strong>
                {props.data?.fetchArtistWithoutAuth.category?.name ??
                  "악기 연주"}
              </strong>{" "}
              입니다.
            </span>
          </div>
        </S.TypingIntro>
      </S.Header>
      <Divider />
      <S.ArtistContents>
        <S.ArtistContentsLeft>
          <S.ArtistIntro>
            {props.data?.fetchArtistWithoutAuth.description}
          </S.ArtistIntro>
          <Divider />
          {props.memberData !== undefined &&
          props.memberData?.fetchMembers.length > 0 ? (
            <>
              <S.CommonTitle>저희 멤버들을 소개할게요!</S.CommonTitle>
              <S.TeamMemberBox>
                {props.memberData?.fetchMembers.map((member, index) => (
                  <S.Member key={index}>
                    <ImageBox
                      width="50px"
                      height="50px"
                      src={`https://storage.googleapis.com/busker-storage/${member.memberImageURL}`}
                    />
                    <S.MemberInfo>
                      <span>{member.name}</span>
                      <span>{member.role}</span>
                    </S.MemberInfo>
                  </S.Member>
                ))}
              </S.TeamMemberBox>
            </>
          ) : null}
        </S.ArtistContentsLeft>
        <S.ArtistContentsRight>
          <S.StickyBox>
            {props.userData?.fetchUser.liked_artist.filter(
              (busker) =>
                busker.artist.id === props.data?.fetchArtistWithoutAuth.id
            ).length === 1 ? (
              <Button02 onClick={props.onClickLikeArtist(true)}>
                찜 해제
              </Button02>
            ) : (
              <Button02 onClick={props.onClickLikeArtist(false)}>
                찜하기
              </Button02>
            )}
            <Button01 onClick={props.onClickGoBack}>돌아가기</Button01>
            {props.artistData?.fetchArtist.id === props.artistId && (
              <Button01 onClick={props.onClickMoveToEdit}>수정하기</Button01>
            )}
          </S.StickyBox>
        </S.ArtistContentsRight>
      </S.ArtistContents>
      <Divider />
      <div style={{ paddingBottom: "100px" }}>
        <S.CommonTitle>최근에 이런 공연들을 했어요!</S.CommonTitle>
        <S.RecentArts>
          {props.fetchRecentBoards?.fetchRecentBoards.map((board, index) => (
            <S.RecentArt
              onClick={props.onClickMoveToRecent(board.id)}
              key={index}
            >
              <S.RecentImageBox>
                <S.RecentImage
                  src={`https://storage.googleapis.com/busker-storage/${board.boardImageURL[0]?.url}`}
                />
              </S.RecentImageBox>
              <S.RecentInfo>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span>{board.boardAddress.address}</span>
                  <span>{getDate(board.end_time)}에 종료됨.</span>
                </div>
                <span
                  style={{
                    padding: "0.5rem 1rem",
                    backgroundColor: "#9900ff",
                    color: "white",
                    borderRadius: "20px",
                    fontSize: "1.2rem",
                  }}
                >
                  # {board.category.name}
                </span>
              </S.RecentInfo>
            </S.RecentArt>
          ))}
        </S.RecentArts>
      </div>
    </S.Wrapper>
  );
};

export default ArtistDetailUI;
