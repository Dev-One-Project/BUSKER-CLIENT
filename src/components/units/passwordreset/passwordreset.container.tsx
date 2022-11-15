import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import {
  IMutation,
  IMutationNonLoginConfirmVerificationEmailArgs,
  IMutationNonLoginSendVerificationEmailArgs,
} from "../../../commons/types/generated/types";
import PasswordResetPageWriteUI from "./passwordreset.presenter";
import {
  NON_LOGIN_CONFIRM_VERIFICATION,
  NON_LOGIN_SEND_VERIFICATION_EMAIL,
} from "./PasswordReset.quries";
import { PasswordResetYup } from "./passwordreset.scehma";
import { IFormData } from "./passwordreset.types";

const PasswordResetPageWrite = () => {
  const router = useRouter();

  const [nonLoginSendVerificationEmail] = useMutation<
    Pick<IMutation, "nonLoginSendVerificationEmail">,
    IMutationNonLoginSendVerificationEmailArgs
  >(NON_LOGIN_SEND_VERIFICATION_EMAIL);

  const [nonLoginConfirmVerificationEmail] = useMutation<
    Pick<IMutation, "nonLoginConfirmVerificationEmail">,
    IMutationNonLoginConfirmVerificationEmailArgs
  >(NON_LOGIN_CONFIRM_VERIFICATION);
  const { register, handleSubmit, formState, getValues } = useForm<IFormData>({
    resolver: yupResolver(PasswordResetYup),
    mode: "onChange",
  });
  const onClickMoveBack = () => {
    router.back();
  };

  const onClickConfirm = async () => {
    try {
      await nonLoginSendVerificationEmail({
        variables: {
          email: getValues("email"),
        },
      });
    } catch (error) {
      if (error instanceof Error) {
        alert(error);
      }
    }
  };

  const onClickReset = async (data: IFormData) => {
    try {
      await nonLoginConfirmVerificationEmail({
        variables: data,
      });
      await router.push("/password/change");
    } catch (error) {
      if (error instanceof Error) {
        alert(error);
      }
    }
  };

  return (
    <PasswordResetPageWriteUI
      onClickMoveBack={onClickMoveBack}
      register={register}
      handleSubmit={handleSubmit}
      onClickReset={onClickReset}
      onClickConfirm={onClickConfirm}
      formState={formState}
    />
  );
};

export default PasswordResetPageWrite;
