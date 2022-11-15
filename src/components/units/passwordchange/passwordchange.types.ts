import { UseFormRegister } from "react-hook-form";

export interface IFormData {
  password: string;
}

export interface IPasswordChangePageWriteUI {
  onClickChangePassword: (data: IFormData) => void;
  handleSubmit: any;
  register: UseFormRegister<IFormData>;
  formState: any;
}
