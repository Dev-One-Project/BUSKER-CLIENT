import { UseFormRegister, UseFormSetValue } from "react-hook-form";
import type { DatePickerProps, RangePickerProps } from "antd/es/date-picker";
import { IQuery } from "../../../commons/types/generated/types";

export interface IArtRegisterPageWriteUI {
  onClickHandleCancel: () => void;
  onClickAddressOpen: () => void;
  onCompleteAddressSearch: (data: any) => void;
  isOpen: boolean;
  address: string;
  register: UseFormRegister<IFormData>;
  formState: any;
  handleSubmit: any;
  handleChange: any;
  options: any;
  genre: string;
  startTime: string;
  onClickRegister: (data: IFormData) => void;
  TimeChange: (
    value: DatePickerProps["value"] | RangePickerProps["value"],
    dateString: [string, string] | string
  ) => void;
  onChangeFile: any;
  imgUrl: string[];
  endTime: string;
  setValue: UseFormSetValue<IFormData>;
  preview: string[];
  isEdit?: boolean;
  onClickEdit: (data: IFormData) => void;
  data: Pick<IQuery, "fetchBoard"> | undefined;
}

export interface IFormData {
  contents: string;
  category: string;
  start_time: string;
  end_time: string;
  boardImageURL: string[];
  boardAddressInput: BoardAddressInput;
}

export interface BoardAddressInput {
  address: string;
  lat: Number;
  lng: Number;
}
