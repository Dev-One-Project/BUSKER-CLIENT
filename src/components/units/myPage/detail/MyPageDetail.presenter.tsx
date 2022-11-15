import { Divider } from "antd";
import * as S from "./MyPageDetail.styles";
import "antd/dist/antd.css";
import Button01 from "../../../common/buttons/01";
import ImageBox from "../../../common/imageBox";
import { IMyPageProps } from "./MyPageDetail.types";
import Input01 from "../../../common/inputs/01";
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
              src={props.data?.userImage?.url ?? ""}
            />
            <S.UserName>{props.data?.nickname ?? "유저 이름"}</S.UserName>
          </S.UserInfo>
          <S.ButtonBox>
            <Button01 onClick={props.onClickTab} style={S.buttonStyle}>
              내가 찜한 아티스트 보기
            </Button01>
            <Button01 onClick={props.onClickTab} style={S.buttonStyle}>
              내 정보 수정하기
            </Button01>
          </S.ButtonBox>
          <Divider style={{ marginTop: "0", backgroundColor: "#9900FF" }} />
          {props.isEdit ? (
            <S.MyDetailEditBox>
              <S.FormBox>
                <ImageBox
                  width="72px"
                  height="72px"
                  src={props.data?.userImage?.url ?? ""}
                />
                <Button01 type="file" onClick={props.onClickEditProfileImage}>
                  프로필 변경
                  <input
                    type="file"
                    ref={props.imageRef}
                    style={{ opacity: "0", width: "0px" }}
                    onChange={props.onChangeImage}
                  />
                </Button01>
              </S.FormBox>
              <S.FormBox>
                <span>{props.data?.email ?? "유저 이메일"}</span>
              </S.FormBox>
              <S.FormBox>
                {props.isEditMode ? (
                  <div style={{ display: "flex" }}>
                    <Input01 type="text" onChange={props.onChangeName} />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "10px",
                        paddingLeft: "10px",
                      }}
                    >
                      <Button02 onClick={props.onClickEditName}>변경</Button02>
                      <Button01 onClick={props.onToggleEditMode}>취소</Button01>
                    </div>
                  </div>
                ) : (
                  <>
                    <span>{props.data?.nickname ?? "유저 이름"}</span>
                    <Button01 onClick={props.onToggleEditMode}>
                      닉네임 변경
                    </Button01>
                  </>
                )}
              </S.FormBox>
              <Button01 onClick={props.onClickEditPassword}>
                비밀번호 변경
              </Button01>
            </S.MyDetailEditBox>
          ) : (
            <S.MyPickBox>
              <S.PickComment>
                {props.data?.nickname ?? "아무개"}님이 <span>찜한</span>{" "}
                아티스트들이에요!
              </S.PickComment>
              <S.PickedArtistBox>
                {props.data?.liked_artist.map((artistsData) => (
                  <S.PickedArtistLi
                    onClick={props.onClickPickedArtist(artistsData.artist.id)}
                    key={artistsData.artist.id}
                  >
                    <S.PickedArtistProfile>
                      <ImageBox
                        width="4rem"
                        height="4rem"
                        src={artistsData.artist.artist_image?.url ?? ""}
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
