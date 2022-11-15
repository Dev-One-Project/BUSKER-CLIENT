import { ChangeEvent, MouseEvent } from "react";
import { UseFormRegister } from "react-hook-form";

export interface IArtistSignupPageWriteUI {
  handleChange: any;
  genre: any;
  options: any;
  address: string;
  isOpen: boolean;
  onClickSignup: (data: IFormData) => void;
  onClickSearchAddress: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickHandleCancel: () => void;
  onCompleteAddressSearch: (data: any) => void;
  onClickTeam: () => void;
  onClickEdit: () => void;
  isTeam: boolean;
  onClickAddTeam: () => void;
  addCount: number;
  isEdit: boolean;
  handleSubmit: any;
  formState: any;
  imgUrl: string;
  onCreateArtistImage: (event: ChangeEvent<HTMLInputElement>) => void;
  register: UseFormRegister<IFormData>;
}

export interface IArtistSignupPageWrite {
  isEdit: boolean;
}

export interface IFormData {
  active_name: string;
  category: string;
  description: string;
  promotion_url: string;
  artist_image: string;
}
