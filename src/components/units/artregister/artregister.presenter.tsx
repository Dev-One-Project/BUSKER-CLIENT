import { DatePicker, Select, Space } from "antd";
import { useRecoilState } from "recoil";
import { userPositionState } from "../../../commons/store";
import Input01 from "../../common/inputs/01";
import KakaoMap from "../../common/kakaoMap";
import * as S from "./artRegister.styles";
import { IArtRegisterPageWriteUI } from "./artRegister.types";

const ArtRegisterPageWriteUI = ({
  onClickAddressOpen,
  isOpen,
  onClickHandleCancel,
  onCompleteAddressSearch,
  address,
  register,
  formState,
  handleSubmit,
  onClickRegister,
  handleChange,
  options,
  TimeChange,
  startTime,
  onChangeFile,
  imgUrl,
  endTime,
  setValue,
  preview,
  isEdit,
  onClickEdit,
  data,
}: IArtRegisterPageWriteUI) => {
  const { RangePicker } = DatePicker;
  const [userPosition] = useRecoilState(userPositionState);

  return (
    <>
      {isOpen && (
        <S.AddressModal open={true} onCancel={onClickHandleCancel}>
          <S.AddressSearchInput onComplete={onCompleteAddressSearch} />
        </S.AddressModal>
      )}
      <S.MainWrapper
        onSubmit={
          isEdit ? handleSubmit(onClickEdit) : handleSubmit(onClickRegister)
        }
      >
        {isEdit ? "공연 수정" : "공연 등록"}
        <S.ContentsWrapper>
          <S.ArtContentsWrapper>
            <S.TextStyle>공연설명</S.TextStyle>
            <S.ContentsStyle
              placeholder="설명을 작성해 주세요"
              {...register("contents")}
            ></S.ContentsStyle>
            <S.ErrorMsg>{formState.errors.contents?.message}</S.ErrorMsg>
          </S.ArtContentsWrapper>
          <S.GenreWrapper>
            <S.TextStyle>공연장르</S.TextStyle>
            <Select
              placeholder="Please select"
              onChange={handleChange}
              style={{ width: "100%" }}
              options={options}
            />
            <S.ErrorMsg>{formState.errors.genre?.message}</S.ErrorMsg>
          </S.GenreWrapper>
          <div>
            <S.TextStyle>공연장소 사진</S.TextStyle>
            {isEdit ? (
              <>
                <S.ImgWrapper>
                  {new Array(3).fill(3).map((_, index) => {
                    return (
                      <>
                        {data?.fetchBoard.boardImageURL[index] ? (
                          <>
                            <S.ImgBtn
                              style={{
                                backgroundImage: preview[index]
                                  ? `url(${preview[index]})`
                                  : `url(https://storage.googleapis.com/busker-storage/${String(
                                      data.fetchBoard.boardImageURL[index].url
                                    )})`,
                                backgroundColor: "#fff",
                                backgroundSize: "cover",
                              }}
                              key={index}
                              htmlFor={`file${index}`}
                            >
                              <S.FileInput
                                type="file"
                                id={`file${index}`}
                                onChange={onChangeFile(index)}
                              />
                            </S.ImgBtn>
                          </>
                        ) : (
                          <>
                            <S.ImgBtn key={index} htmlFor={`file${index}`}>
                              +
                              <S.FileInput
                                type="file"
                                id={`file${index}`}
                                onChange={onChangeFile(index)}
                              />
                            </S.ImgBtn>
                          </>
                        )}
                      </>
                    );
                  })}
                </S.ImgWrapper>
              </>
            ) : (
              <>
                <S.ImgWrapper>
                  {new Array(3).fill(3).map((_, index) => {
                    return (
                      <>
                        {imgUrl[index] ? (
                          <S.ImgBtn
                            style={{
                              backgroundImage: `url(${preview[index]})`,
                              backgroundColor: "#fff",
                              backgroundSize: "cover",
                            }}
                            key={index}
                            htmlFor={`file${index}`}
                          >
                            <S.FileInput
                              type="file"
                              id={`file${index}`}
                              onChange={onChangeFile(index)}
                            />
                          </S.ImgBtn>
                        ) : (
                          <S.ImgBtn key={index} htmlFor={`file${index}`}>
                            +
                            <S.FileInput
                              type="file"
                              id={`file${index}`}
                              onChange={onChangeFile(index)}
                            />
                          </S.ImgBtn>
                        )}
                      </>
                    );
                  })}
                </S.ImgWrapper>
              </>
            )}
          </div>
          <S.DateWrapper>
            <S.TextStyle>공연시간</S.TextStyle>
            <Space direction="vertical" size={10}>
              <RangePicker
                showTime={{ format: "HH:mm" }}
                format="YYYY-MM-DD HH:mm"
                onChange={TimeChange}
              />
            </Space>
            <S.DayWrapper>
              시작시간:
              <Input01
                type="text"
                readOnly={true}
                value={`${startTime}`}
                register={register("start_time")}
              />
            </S.DayWrapper>
            <S.DayWrapper>
              종료시간:
              <Input01
                type="text"
                readOnly={true}
                value={`${endTime}`}
                register={register("end_time")}
              />
            </S.DayWrapper>
            <S.ErrorMsg>{formState.errors.time?.message}</S.ErrorMsg>
          </S.DateWrapper>
          <S.AddressWrapper>
            <S.TextStyle>공연 장소</S.TextStyle>
            <S.AddressSearchWrapper>
              <Input01
                type="text"
                readOnly={true}
                value={address}
                register={register("boardAddressInput.address")}
              />
              <S.AddressSearchBtn type="button" onClick={onClickAddressOpen}>
                주소 검색
              </S.AddressSearchBtn>
            </S.AddressSearchWrapper>
            <S.ErrorMsg>{formState.errors.address?.message}</S.ErrorMsg>
            {address && (
              <S.KakaoWrapper>
                <KakaoMap
                  position={userPosition}
                  address={address}
                  isMap={false}
                  setValue={setValue}
                />
              </S.KakaoWrapper>
            )}
          </S.AddressWrapper>
          <S.CategoryBtnStyle>
            {isEdit ? "수정하기" : "등록하기"}
          </S.CategoryBtnStyle>
        </S.ContentsWrapper>
      </S.MainWrapper>
    </>
  );
};

export default ArtRegisterPageWriteUI;
