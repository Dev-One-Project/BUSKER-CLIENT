import { IBoards } from "../../../commons/types/generated/types";

export interface IArtDetailProps {
  data?: IBoards;
  routerId: string | string[] | undefined;
}
