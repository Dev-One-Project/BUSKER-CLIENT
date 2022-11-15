import Input01 from "../../common/inputs/01";
import * as S from "./signup.styles";
import { ISignupPageWriteUI } from "./signup.type";

const SignupPageWriteUI = ({
  onClickMoveBack,
  register,
  onClickSignup,
  handleSubmit,
  formState,
}: ISignupPageWriteUI) => {
  return (
    <>
      <S.MainWrapper>
        <S.SignupWrapper onSubmit={handleSubmit(onClickSignup)}>
          <S.SignupTopWrapper>
            <S.LogoStyle>BUSKER</S.LogoStyle>
            <S.SignupInputWrapper>
              <Input01
                type="text"
                placeholder="이메일을 입력해 주세요"
                register={register("email")}
              />
              <S.ErrorStyle>{formState.errors.email?.message}</S.ErrorStyle>
              <Input01
                type="password"
                placeholder="비밀번호를 입력해주세요"
                register={register("password")}
              />
              <S.ErrorStyle>{formState.errors.password?.message}</S.ErrorStyle>
              <Input01
                type="password"
                placeholder="비밀번호를 다시 입력해주세요"
              />
              <S.ErrorStyle>
                {formState.errors.passwordConfirm?.message}
              </S.ErrorStyle>
            </S.SignupInputWrapper>
          </S.SignupTopWrapper>
          <S.BtnWrapper>
            <S.BtnStyle>회원가입</S.BtnStyle>
            <S.BtnStyle type="button" onClick={onClickMoveBack}>
              돌아가기
            </S.BtnStyle>
          </S.BtnWrapper>
        </S.SignupWrapper>
      </S.MainWrapper>
    </>
  );
};
export default SignupPageWriteUI;
