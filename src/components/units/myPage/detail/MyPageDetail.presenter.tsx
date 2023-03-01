import { Divider } from "antd";
import * as S from "./MyPageDetail.styles";
import "antd/dist/antd.css";
import Button01 from "../../../common/buttons/01";
import ImageBox from "../../../common/imageBox";
import { IMyPageProps } from "./MyPageDetail.types";
import Button02 from "../../../common/buttons/02";

const MyPageDetailUI = (props: IMyPageProps) => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>My Page</S.Title>
        <S.Contents>
          <S.UserInfo>
            <ImageBox
              width="72px"
              height="72px"
              src={
                props.userImageURL ??
                `https://storage.googleapis.com/busker-storage/${String(
                  props.data?.fetchUser.userImageURL
                )}`
              }
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                paddingLeft: "1rem",
              }}
            >
              <S.UserName>{props.data?.fetchUser.nickname}</S.UserName>
              <span>{props.data?.fetchUser.email}</span>
            </div>
          </S.UserInfo>
          <S.ButtonBox>
            <Button01
              id="pick"
              onClick={props.onClickTab}
              style={{
                border: "none",
                color: "black",
              }}
            >
              찜한 아티스트
            </Button01>
            <div
              style={{ width: "1px", height: "18px", backgroundColor: "#ddd" }}
            ></div>
            <Button01
              id="info"
              onClick={props.onClickTab}
              style={{ color: "black", border: "none" }}
            >
              내 정보 수정
            </Button01>
            <div
              style={{ width: "1px", height: "18px", backgroundColor: "#ddd" }}
            ></div>
            <Button01
              style={{
                color: "black",
                border: "none",
              }}
              onClick={props.onClickEditPassword}
            >
              비밀번호 변경
            </Button01>
            {props.artistData && (
              <>
                <div
                  style={{
                    width: "1px",
                    height: "18px",
                    backgroundColor: "#ddd",
                  }}
                ></div>
                <Button01
                  style={{
                    color: "black",
                    border: "none",
                  }}
                  onClick={props.onClickMoveToDetail(
                    props.artistData.fetchArtist.id
                  )}
                >
                  나의 버스커 상세
                </Button01>
              </>
            )}
          </S.ButtonBox>
          <Divider style={{ marginTop: "5px" }} />
          {props.isEdit ? (
            <S.MyDetailEditBox>
              <S.FormBox>
                이미지
                <ImageBox
                  width="72px"
                  height="72px"
                  src={
                    props.userImageURL ??
                    `https://storage.googleapis.com/busker-storage/${String(
                      props.data?.fetchUser.userImageURL
                    )}`
                  }
                />
                <Button01 onClick={props.onClickEditProfileImage}>
                  이미지 변경
                </Button01>
                <input
                  type="file"
                  ref={props.imageRef}
                  style={{ display: "none" }}
                  onChange={props.onChangeImage}
                />
              </S.FormBox>
              <Divider style={{ margin: "0" }} />
              <S.FormBox style={{ alignItems: "center" }}>
                닉네임
                <S.StyledInput
                  type="text"
                  defaultValue={props.data?.fetchUser.nickname}
                  disabled={!props.isEditMode}
                  onChange={props.onChangeName}
                />
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  {props.isEditMode ? (
                    <S.ButtonBoxEdit>
                      <Button02
                        style={{ width: "fit-content" }}
                        onClick={props.onToggleEditMode("confirm")}
                      >
                        변경
                      </Button02>
                      <Button01
                        style={{ width: "fit-content" }}
                        onClick={props.onToggleEditMode("cancel")}
                      >
                        취소
                      </Button01>
                    </S.ButtonBoxEdit>
                  ) : (
                    <>
                      <Button01 onClick={props.onToggleEditMode("open")}>
                        닉네임 변경
                      </Button01>
                    </>
                  )}
                </div>
              </S.FormBox>
              <Divider style={{ margin: "0" }} />
              <S.FormBox>
                <div></div>
                <Button02 onClick={props.onClickEditName}>저장하기</Button02>
              </S.FormBox>
            </S.MyDetailEditBox>
          ) : (
            <S.MyPickBox>
              <S.PickComment>
                {props.data?.fetchUser.nickname}님이 <span>찜한</span>{" "}
                버스커들이에요!
              </S.PickComment>
              <S.PickedArtistBox>
                {props.data?.fetchUser.liked_artist.map((artistsData) => (
                  <S.PickedArtistLi
                    onClick={props.onClickPickedArtist(artistsData.artist.id)}
                    key={artistsData.artist.id}
                  >
                    <S.PickedArtistProfile>
                      <ImageBox
                        width="4rem"
                        height="4rem"
                        src={artistsData.artist.artistImageURL ?? ""}
                      />
                      <S.PickedArtistName>
                        {artistsData.artist.active_name}
                      </S.PickedArtistName>
                    </S.PickedArtistProfile>
                    <Button01
                      type="button"
                      onClick={props.onClickPickOff(artistsData.artist.id)}
                    >
                      찜 해제
                    </Button01>
                  </S.PickedArtistLi>
                ))}
              </S.PickedArtistBox>
            </S.MyPickBox>
          )}
        </S.Contents>
      </S.Container>
    </S.Wrapper>
  );
};

export default MyPageDetailUI;
