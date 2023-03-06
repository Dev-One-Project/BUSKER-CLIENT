import { Select } from "antd";
import Button02 from "../../common/buttons/02";
import Input01 from "../../common/inputs/01";
import MemberFetchWrite from "../member/MemberFetch.container";
import * as S from "./artistSignup.styles";
import { IArtistSignupPageWriteUI } from "./artistSignup.types";

const ArtistSignupPageWriteUI = ({
  onClickSearchAddress,
  isOpen,
  onClickHandleCancel,
  onCompleteAddressSearch,
  onClickTeam,
  isTeam,
  isEdit,
  onClickSignup,
  handleSubmit,
  register,
  onClickEdit,
  formState,
  address,
  handleChange,
  options,
  onCreateArtistImage,
  imgUrl,
  data,
  onChangeMemberName,
  onChangeRole,
  onClickMember,
  MemberData,
  setIsMemberEdit,
  setGetId,
  onClickMemberEdit,
  isMemberEdit,
  editData,
  setEditData,
}: IArtistSignupPageWriteUI) => {
  return (
    <>
      {isOpen && (
        <S.AddressModal open={true} onCancel={onClickHandleCancel}>
          <S.AddressSearchInput onComplete={onCompleteAddressSearch} />
        </S.AddressModal>
      )}
      <S.MainWrapper
        onSubmit={
          isEdit ? handleSubmit(onClickEdit) : handleSubmit(onClickSignup)
        }
      >
        <S.ContentsWrapper>
          <S.ContentsTopWrapper>
            <S.ArtistPlaceWrapper>
              <S.ArtistProfileWrapper>
                <S.Edit>{isEdit ? "아티스트 수정" : "아티스트 등록"} </S.Edit>
                <S.ImgNameWrapper>
                  <img
                    src="/icon_profile.png"
                    alt="프로필 이미지 등록 아이콘"
                  />
                  {isEdit ? (
                    <>
                      {data?.fetchArtist.artistImageURL ? (
                        <>
                          <S.ImgBtn
                            style={{
                              backgroundImage: `url(https://storage.googleapis.com/busker-storage/${String(
                                data?.fetchArtist.artistImageURL
                              )})`,
                              backgroundSize: "cover",
                            }}
                            htmlFor={"file"}
                          >
                            <S.FileInput
                              type="file"
                              id={"file"}
                              onChange={onCreateArtistImage}
                            />
                          </S.ImgBtn>
                        </>
                      ) : (
                        <>
                          <S.ImgBtn
                            style={{
                              backgroundImage: `url(${imgUrl}
                              )`,
                              backgroundSize: "cover",
                            }}
                          >
                            <S.FileInput
                              onChange={onCreateArtistImage}
                              type="file"
                            />
                          </S.ImgBtn>
                        </>
                      )}
                    </>
                  ) : (
                    <>
                      {imgUrl ? (
                        <>
                          <S.ImgBtn
                            style={{
                              backgroundImage: `url(${imgUrl})`,
                              backgroundColor: "#fff",
                              backgroundSize: "cover",
                            }}
                            htmlFor={"file"}
                          >
                            <S.FileInput
                              type="file"
                              id={"file"}
                              onChange={onCreateArtistImage}
                            />
                          </S.ImgBtn>
                        </>
                      ) : (
                        <>
                          <S.ImgBtn>
                            +
                            <S.FileInput
                              onChange={onCreateArtistImage}
                              type="file"
                            />
                          </S.ImgBtn>
                        </>
                      )}
                    </>
                  )}
                </S.ImgNameWrapper>
                <S.TextStyle>아티스트 이름(팀명)</S.TextStyle>
                <Input01 type="text" register={register("active_name")} />
                <S.ErrorMsg>{formState.errors.active_name?.message}</S.ErrorMsg>
              </S.ArtistProfileWrapper>
              <S.PlaceGenreWrapper>
                <S.MainPlaceGenreWrapper className="map">
                  <S.TextStyle>공연 주장소</S.TextStyle>
                  <S.AddressWrapper>
                    <Input01 type="text" readOnly={true} value={address} />
                    <button onClick={onClickSearchAddress} type="button">
                      주소찾기
                    </button>
                  </S.AddressWrapper>
                </S.MainPlaceGenreWrapper>
                <S.MainPlaceGenreWrapper className="select">
                  <S.TextStyle>공연 장르</S.TextStyle>
                  <Select
                    placeholder="Please select"
                    onChange={handleChange}
                    options={options}
                  />
                  <S.ErrorMsg>{formState.errors.category?.message}</S.ErrorMsg>
                </S.MainPlaceGenreWrapper>
              </S.PlaceGenreWrapper>
            </S.ArtistPlaceWrapper>
            <S.RemarksLinkWrapper>
              <S.RemarksInputWrapper>
                <S.TextStyle>소개</S.TextStyle>
                <Input01
                  style={{ margin: "0", marginBottom: "10px" }}
                  type="text"
                  placeholder="소개글을 적어주세요"
                  register={register("description")}
                />
                <S.ErrorMsg>{formState.errors.description?.message}</S.ErrorMsg>
              </S.RemarksInputWrapper>
              <S.RemarksInputWrapper>
                <S.TextStyle>SNS링크 또는 유튜브 URL</S.TextStyle>
                <Input01
                  style={{ margin: "0" }}
                  type="text"
                  placeholder="SNS 링크 또는 유튜브 URL을 올려주세요"
                  register={register("promotion_url")}
                />
              </S.RemarksInputWrapper>
            </S.RemarksLinkWrapper>
          </S.ContentsTopWrapper>
          <S.ContentsBottomWrapper>
            <S.AddTeamWrapper>
              {isEdit ? (
                <>
                  <S.TeamBtn type="button" onClick={onClickTeam}>
                    팀이신가요?
                  </S.TeamBtn>
                  {isTeam ? (
                    <>
                      <S.AddTeamInputWrapper>
                        <>
                          {imgUrl || editData[0] !== "" ? (
                            <>
                              <S.MemberImgBtn
                                style={{
                                  backgroundImage: imgUrl
                                    ? `url(${imgUrl})`
                                    : `url("https://storage.googleapis.com/busker-storage/${editData[0]}")`,
                                  backgroundColor: "#fff",
                                  backgroundSize: "cover",
                                }}
                                htmlFor={`file`}
                              >
                                <S.FileInput
                                  type="file"
                                  id={`file`}
                                  onChange={onCreateArtistImage}
                                />
                              </S.MemberImgBtn>
                            </>
                          ) : (
                            <>
                              <S.MemberImgBtn htmlFor={`file`}>
                                +
                                <S.FileInput
                                  type="file"
                                  id={`file`}
                                  onChange={onCreateArtistImage}
                                />
                              </S.MemberImgBtn>
                            </>
                          )}
                        </>
                        <Input01
                          type="text"
                          placeholder="이름"
                          onChange={onChangeMemberName}
                          defaultValue={editData[1]}
                        />
                        <Input01
                          type="text"
                          placeholder="역할"
                          onChange={onChangeRole}
                          defaultValue={editData[2]}
                        />
                        <Button02
                          style={{ width: "100px", padding: "1.3rem 1rem" }}
                          type="button"
                          onClick={
                            isMemberEdit ? onClickMemberEdit : onClickMember
                          }
                        >
                          {isMemberEdit ? "수정" : "등록"}
                        </Button02>
                      </S.AddTeamInputWrapper>
                    </>
                  ) : (
                    ""
                  )}
                </>
              ) : (
                ""
              )}
              {MemberData?.fetchMembers.map((el, idx) => (
                <MemberFetchWrite
                  el={el}
                  setGetId={setGetId}
                  setIsMemberEdit={setIsMemberEdit}
                  key={idx}
                  setEditData={setEditData}
                />
              ))}
            </S.AddTeamWrapper>
          </S.ContentsBottomWrapper>
          <S.SubmitBtn>{isEdit ? "수정하기" : "등록하기"}</S.SubmitBtn>
        </S.ContentsWrapper>
      </S.MainWrapper>
    </>
  );
};

export default ArtistSignupPageWriteUI;
