import { useQuery } from "@apollo/client";
import { IQuery } from "../../../commons/types/generated/types";
import ArtistDetailUI from "./ArtistDetail.presenter";
import { FETCH_ARTIST } from "./ArtistDetail.queries";

const ArtistDetail = () => {
  const { data: artistData } =
    useQuery<Pick<IQuery, "fetchArtist">>(FETCH_ARTIST);
  return <ArtistDetailUI data={artistData} />;
};

export default ArtistDetail;
