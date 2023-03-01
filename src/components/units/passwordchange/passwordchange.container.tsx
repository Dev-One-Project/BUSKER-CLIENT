import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import {
  IMutation,
  IMutationResetPasswordArgs,
} from "../../../commons/types/generated/types";
import PasswordChangePageWriteUI from "./passwordchange.presenter";
import { LOGOUT, RESET_PASSWORD } from "./PasswordChange.Quries";
import { PasswordChangeYup } from "./passwordchange.schema";
import { IFormData } from "./passwordchange.types";

const PasswordChangePageWrite = () => {
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(PasswordChangeYup),
  });
  const [resetPassword] = useMutation<
    Pick<IMutation, "resetPassword">,
    IMutationResetPasswordArgs
  >(RESET_PASSWORD);

  const [logout] = useMutation<Pick<IMutation, "logout">>(LOGOUT);

  const onClickChangePassword = async (data: IFormData) => {
    try {
      await resetPassword({
        variables: {
          updatePasswordInput: data,
        },
      });
      await logout({
        update(cache) {
          cache.modify({
            fields: () => {},
          });
        },
      });
      await router.push("/login");
    } catch (error) {}
  };

  return (
    <PasswordChangePageWriteUI
      onClickChangePassword={onClickChangePassword}
      handleSubmit={handleSubmit}
      register={register}
      formState={formState}
    />
  );
};

export default PasswordChangePageWrite;
