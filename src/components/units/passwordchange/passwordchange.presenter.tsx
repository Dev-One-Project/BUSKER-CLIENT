import Input01 from "../../common/inputs/01";
import * as S from "./passwordchange.styles";
import { IPasswordChangePageWriteUI } from "./passwordchange.types";

const PasswordChangePageWriteUI = ({
  onClickChangePassword,
  handleSubmit,
  register,
  formState,
}: IPasswordChangePageWriteUI) => {
  return (
    <>
      <S.MainWrapper onSubmit={handleSubmit(onClickChangePassword)}>
        <div>
          <S.LogoStyle>BUSKER</S.LogoStyle>
          <S.TextStyle>새 비밀번호 설정하기</S.TextStyle>
        </div>
        <S.PasswordChangeWrapper>
          <S.InputBtnWrapper>
            <Input01
              type="password"
              placeholder="새 비밀번호를 입력해주세요"
              register={register("password")}
            />
            <S.ErrorStyle>{formState.errors.password?.message}</S.ErrorStyle>
          </S.InputBtnWrapper>
          <S.InputBtnWrapper>
            <Input01
              type="password"
              placeholder="새 비밀번호를 다시 입력해주세요"
            />
          </S.InputBtnWrapper>
          <S.ErrorStyle>
            {formState.errors.passwordConfirm?.message}
          </S.ErrorStyle>
          <S.BtnWrapper>
            <S.Reset>비밀번호 재설정</S.Reset>
          </S.BtnWrapper>
        </S.PasswordChangeWrapper>
      </S.MainWrapper>
    </>
  );
};

export default PasswordChangePageWriteUI;
