import { useForm } from "react-hook-form";
import LoginPageWriteUI from "./login.presenter";
import { LoginYup } from "./login.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { IFormData } from "./login.types";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import { FETCH_ARTIST, LOGIN } from "./Login.Quries";
import {
  IMutation,
  IMutationLoginArgs,
  IQuery,
} from "../../../commons/types/generated/types";
import { useSetRecoilState } from "recoil";
import { accessTokenState, userState } from "../../../commons/store";
import { Modal } from "antd";

const LoginPageWrite = () => {
  const router = useRouter();
  const setAccessToken = useSetRecoilState(accessTokenState);
  const setUserState = useSetRecoilState(userState);

  const [login] = useMutation<Pick<IMutation, "login">, IMutationLoginArgs>(
    LOGIN
  );

  const { refetch } = useQuery<Pick<IQuery, "fetchArtist">>(FETCH_ARTIST);

  const { register, formState, handleSubmit } = useForm<IFormData>({
    resolver: yupResolver(LoginYup),
    mode: "onChange",
  });

  const onClickSignUp = () => {
    void router.push("/signup");
  };

  const onClickRestorePassword = () => {
    void router.push("/password/reset");
  };

  const onClickLogin = async (data: IFormData) => {
    try {
      const result = await login({
        variables: {
          email: data.email,
          password: data.password,
        },
      });
      const isArtsit = await refetch();
      const accessToken = result.data?.login;
      setAccessToken(String(accessToken));
      setUserState({ isLoggedIn: true, isArtist: isArtsit !== undefined });
      Modal.success({ content: "로그인되었습니다." });
      await router.push("/main/list");
    } catch (error) {
      if (error instanceof Error) {
        alert(error);
      }
    }
  };

  return (
    <LoginPageWriteUI
      register={register}
      formState={formState}
      onClickSignUp={onClickSignUp}
      onClickRestorePassword={onClickRestorePassword}
      onClickLogin={onClickLogin}
      handleSubmit={handleSubmit}
    />
  );
};

export default LoginPageWrite;
