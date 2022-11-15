import { UseFormRegister } from "react-hook-form";

export interface IPasswordResetPageWriteUI {
  onClickMoveBack: () => void;
  handleSubmit: any;
  register: UseFormRegister<IFormData>;
  onClickReset: (data: IFormData) => void;
  onClickConfirm: () => void;
  formState: any;
}

export interface IFormData {
  email: string;
  authNumber: string;
}
