import MainListUI from "./List.presenter";
import { Modal, SelectProps } from "antd";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsBySearchArgs,
} from "../../../../commons/types/generated/types";
import {
  FETCH_BOARDS,
  FETCH_BOARDS_BY_SEARCH,
  FETCH_CATEGORIES,
} from "./List.queries";
import DistrcitData from "./DistrictData";
import { useState } from "react";
import { FETCH_ARTIST } from "../../detail/ArtDetail.queries";
import { FETCH_USER } from "../../myPage/detail/MyPageDetail.queries";

const MainList = () => {
  const router = useRouter();
  const locationOptions = [...DistrcitData];
  const { data: boardsData } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS, { variables: { page: 1 } });
  const {
    data: boardsDataBySearch,
    refetch,
    fetchMore,
  } = useQuery<
    Pick<IQuery, "fetchBoardsBySearch">,
    IQueryFetchBoardsBySearchArgs
  >(FETCH_BOARDS_BY_SEARCH, {
    variables: { time: "2023-03-03T05:03:16.024Z" },
  });

  const { data: isArtist } =
    useQuery<Pick<IQuery, "fetchArtist">>(FETCH_ARTIST);
  const { data: isUser } = useQuery<Pick<IQuery, "fetchUser">>(FETCH_USER);
  const { data: categoryData } =
    useQuery<Pick<IQuery, "fetchCategories">>(FETCH_CATEGORIES);

  const genreOptions: SelectProps["options"] =
    categoryData?.fetchCategories.map((el) => ({
      value: el.id,
      label: el.name,
    }));

  const [selectedGenre, setSelectedGenre] = useState<string[] | null>(null);
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);

  const handleChangeGenre = async (value: string[]) => {
    setSelectedGenre(value);
    if (value.length) {
      await refetch({
        searchBoardInput: { category: value, district: selectedDistrict },
      });
    } else {
      await refetch({
        searchBoardInput: { page: 1, district: selectedDistrict },
      });
      setSelectedGenre(null);
    }
  };

  const handleChangeLocation = async (value: string[]) => {
    const district = `${value?.[0]} ${value?.[1]}`;
    setSelectedDistrict(district);

    if (district === "undefined undefined") {
      await refetch({ searchBoardInput: { page: 1, category: selectedGenre } });
      setSelectedDistrict(null);
    } else {
      await refetch({
        searchBoardInput: { district, category: selectedGenre },
      });
    }
  };

  const onClickListItem = (id: string) => async () => {
    await router.push(`/main/list/${id}`);
  };

  const onClickToMap = async () => {
    if (isUser) {
      await router.push("/map");
    } else {
      Modal.warning({
        content: "로그인 후 이용해주세요.",
        onOk: () => {
          void router.push("/login");
        },
      });
    }
  };

  const onClickMoveToArtRegister = async () => {
    if (isArtist) {
      await router.push("/artregister");
    } else if (isUser) {
      Modal.confirm({
        content: (
          <div style={{ width: "100%", textAlign: "center" }}>
            <span style={{ textAlign: "center" }}>
              버스커로 등록 후 이용 가능합니다.
            </span>
            <br />
            <span style={{ textAlign: "center" }}>
              버스커로 등록하시겠습니까?
            </span>
          </div>
        ),
        onOk: async () => {
          await router.push("/artistsignup");
        },
      });
    } else {
      Modal.warning({
        bodyStyle: { fontSize: "1.5rem" },
        content: "로그인 후에 이용하실 수 있습니다.",
      });
      await router.push("/login");
    }
  };

  const loadMore = async () => {
    if (boardsData === undefined) return;
    try {
      await fetchMore({
        variables: {
          searchBoardInput: {
            page: Math.ceil(boardsData.fetchBoards.length / 12) + 1,
            district: selectedDistrict,
            category: selectedGenre,
          },
        },
        updateQuery: (prev, options) => {
          if (options.fetchMoreResult.fetchBoardsBySearch === undefined) {
            return { fetchBoardsBySearch: [...prev.fetchBoardsBySearch] };
          }
          return {
            fetchBoardsBySearch: [
              ...prev.fetchBoardsBySearch,
              ...options.fetchMoreResult.fetchBoardsBySearch,
            ],
          };
        },
      });
    } catch (error) {}
  };

  return (
    <MainListUI
      // loadDistricts={loadDistricts}
      onClickToMap={onClickToMap}
      onClickListItem={onClickListItem}
      handleChangeGenre={handleChangeGenre}
      handleChangeLocation={handleChangeLocation}
      locationOptions={locationOptions}
      genreOptions={genreOptions}
      data={boardsData}
      onClickMoveToArtRegister={onClickMoveToArtRegister}
      loadMore={loadMore}
    />
  );
};

export default MainList;
