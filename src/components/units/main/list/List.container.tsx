import MainListUI from "./List.presenter";
import { Modal, SelectProps } from "antd";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsBySearchArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_BOARDS_BY_SEARCH, FETCH_CATEGORIES } from "./List.queries";
import DistrcitData from "./DistrictData";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { userState } from "../../../../commons/store";

const MainList = () => {
  const router = useRouter();
  const locationOptions = [...DistrcitData];
  const currUserState = useRecoilValue(userState);

  console.log(currUserState);

  const {
    data: boardsData,
    fetchMore,
    refetch,
  } = useQuery<
    Pick<IQuery, "fetchBoardsBySearch">,
    IQueryFetchBoardsBySearchArgs
  >(FETCH_BOARDS_BY_SEARCH);

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
        categoryId: value,
        districtId: selectedDistrict,
      });
    } else {
      await refetch({
        page: 1,
        categoryId: null,
        districtId: selectedDistrict,
      });
      setSelectedGenre(null);
    }
  };

  console.log(boardsData);

  const handleChangeLocation = async (value: string[]) => {
    const district = `${value?.[0]} ${value?.[1]}`;
    setSelectedDistrict(district);

    if (district === "undefined undefined") {
      await refetch({ page: 1, categoryId: selectedGenre });
      setSelectedDistrict(null);
    } else {
      await refetch({
        districtId: district,
        categoryId: selectedGenre,
      });
    }
  };

  const onClickListItem = (id: string) => async () => {
    await router.push(`/main/list/${id}`);
  };

  const onClickToMap = async () => {
    if (currUserState.isLoggedIn) {
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
    if (currUserState.isArtist) {
      await router.push("/artregister");
    } else if (currUserState.isLoggedIn) {
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
        onOk: async () => await router.push("/login"),
      });
    }
  };

  const loadMore = async () => {
    if (boardsData === undefined) return;

    try {
      await fetchMore({
        variables: {
          page: Math.ceil(boardsData.fetchBoardsBySearch.length / 12) + 1,
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
