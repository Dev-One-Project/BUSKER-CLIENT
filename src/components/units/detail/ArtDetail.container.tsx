import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../commons/types/generated/types";

import ArtDetailUI from "./ArtDetail.presenter";
import { FETCH_BOARD } from "./ArtDetail.queries";

const ArtDetail = () => {
  const router = useRouter();
  const { data: artData } = useQuery<
    Pick<IQuery, "fetchBoard">,
    IQueryFetchBoardArgs
  >(FETCH_BOARD, { variables: { boardId: String(router.query.id) } });
  console.log("버스킹 데이터:", artData);
  return <ArtDetailUI data={artData} routerId={router.query.id} />;
};

export default ArtDetail;
