import { DefaultOptionType } from "antd/lib/select";
import { IQuery } from "../../../../commons/types/generated/types";
export interface IMainListProps {
  loadMore: (page: number) => void;
  locationOptions: DefaultOptionType[] | undefined;
  genreOptions: DefaultOptionType[] | undefined;
  handleChangeLocation: any;
  handleChangeGenre:
    | ((value: any, option: DefaultOptionType | DefaultOptionType[]) => void)
    | undefined;
  data?: Pick<IQuery, "fetchBoardsBySearch">;
  onClickListItem: (id: string) => () => void;
  onClickToMap: () => void;
  onClickMoveToArtRegister: () => void;
}

export interface Option {
  value: string;
  label: string;
  children?: Option[];
}
