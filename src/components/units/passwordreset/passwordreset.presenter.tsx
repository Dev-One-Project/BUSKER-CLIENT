import Input01 from "../../common/inputs/01";
import * as S from "./passwordreset.styles";
import { IPasswordResetPageWriteUI } from "./passwordreset.types";

const PasswordResetPageWriteUI = ({
  onClickMoveBack,
  register,
  handleSubmit,
  onClickReset,
  onClickConfirm,
  formState,
}: IPasswordResetPageWriteUI) => {
  return (
    <>
      <S.MainWrapper onSubmit={handleSubmit(onClickReset)}>
        <div>
          <S.LogoStyle>BUSKER</S.LogoStyle>
          <S.TextStyle>이메일로 비밀번호 찾기</S.TextStyle>
        </div>
        <S.PasswordChangeWrapper>
          <S.InputBtnWrapper>
            <S.InputErrorWrapper>
              <Input01
                type="text"
                placeholder="이메일을 입력해주세요"
                register={register("email")}
              />
            </S.InputErrorWrapper>
            <S.ConfirmBtn type="button" onClick={onClickConfirm}>
              인증하기
            </S.ConfirmBtn>
          </S.InputBtnWrapper>
          <S.ErrorStyle>{formState.errors.email?.message}</S.ErrorStyle>

          <S.InputBtnWrapper>
            <Input01
              type="text"
              placeholder="인증번호를 입력해주세요"
              register={register("authNumber")}
            />
          </S.InputBtnWrapper>
          <S.BtnWrapper>
            <S.Reset>비밀번호 초기화</S.Reset>
            <S.Reset type="button" onClick={onClickMoveBack}>
              뒤로가기
            </S.Reset>
          </S.BtnWrapper>
        </S.PasswordChangeWrapper>
      </S.MainWrapper>
    </>
  );
};

export default PasswordResetPageWriteUI;
