import { UseFormSetValue } from "react-hook-form";
import { IQuery } from "../types/generated/types";
import { IFormData } from "../../components/units/artregister/artRegister.types";
export interface IKakaoMapProps {
  address: string;
  position?: {
    lat: string;
    lng: string;
  };
  isMap?: boolean;
  setValue?: UseFormSetValue<IFormData>;
  data?: Pick<IQuery, "fetchMapBoards">;
}
