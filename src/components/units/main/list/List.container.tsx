import { useEffect, useState } from "react";
import MainListUI from "./List.presenter";
import type { SelectProps } from "antd";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import {
  IMutation,
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchCityArgs,
} from "../../../../commons/types/generated/types";
import {
  CREATE_CITY,
  CREATE_DISTRICT_LIST,
  FETCH_BOARDS,
  FETCH_CITY,
} from "./List.queries";
import { Option } from "./List.types";

const MainList = () => {
  const router = useRouter();
  const [locationOptions] = useState<Option[]>([
    {
      value: "서울",
      label: "서울",
      children: [
        {
          value: "구로구",
          label: "구로구",
        },
      ],
    },
    { value: "강원", label: "강원", children: [] },
    {
      value: "경기",
      label: "경기",
      children: [],
    },
    {
      value: "경북",
      label: "경북",
      children: [],
    },
    {
      value: "경남",
      label: "경남",
      children: [],
    },
    {
      value: "충북",
      label: "충북",
      children: [],
    },
    {
      value: "전북",
      label: "전북",
      children: [],
    },
    {
      value: "전남",
      label: "전남",
      children: [],
    },
    {
      value: "인천",
      label: "인천",
      children: [],
    },
    {
      value: "대구",
      label: "대구",
      children: [],
    },
    {
      value: "대전",
      label: "대전",
      children: [],
    },
    {
      value: "광주",
      label: "광주",
      children: [],
    },
    {
      value: "부산",
      label: "부산",
      children: [],
    },
    {
      value: "울산",
      label: "울산",
      children: [],
    },
    {
      value: "충남",
      label: "충남",
      children: [],
    },
    {
      value: "제주",
      label: "제주",
      children: [],
    },
  ]);
  const [filteredGenre, setFilteredGenre] = useState<string[]>([]);
  const [filteredLocation, setFilteredLocation] = useState("");
  const { data: boardsData, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);
  // const { data: districtData } = useQuery<
  //   Pick<IQuery, "fetchCity">,
  //   IQueryFetchCityArgs
  // >(FETCH_CITY, {
  //   variables: { name: "서울" },
  // });

  // const [createDistrictList] =
  //   useMutation<Pick<IMutation, "createDistrictList">>(CREATE_DISTRICT_LIST);
  // const [createCity] = useMutation<Pick<IMutation, "createCity">>(CREATE_CITY);

  // useEffect(() => {
  //   const getLocation = () => {
  //     void createDistrictList();
  //     void createCity();
  //   };
  //   getLocation();
  // }, []);
  const options: SelectProps["options"] = [
    {
      value: "춤",
      label: "춤",
    },
    {
      value: "노래",
      label: "노래",
    },
    {
      value: "악기",
      label: "악기",
    },
    {
      value: "몰라",
      label: "몰라",
    },
  ];

  const handleChangeGenre = (value: string[]) => {
    setFilteredGenre(value);
    // refetch({})
  };

  const handleChangeLocation = (value: string[]) => {
    let arrToString = `${value?.[1]} ${value?.[2]}`;
    if (arrToString === "undefined undefined") {
      arrToString = "";
    }
    setFilteredLocation(arrToString);
  };

  const onClickListItem = (id: string) => async () => {
    await router.push(`/main/list/${id}`);
  };

  const onClickToMap = async () => {
    await router.push("/map");
  };

  console.log("boardsData:", boardsData);
  // console.log("지역 data:", districtData);
  return (
    <MainListUI
      // loadDistricts={loadDistricts}
      onClickToMap={onClickToMap}
      onClickListItem={onClickListItem}
      handleChangeGenre={handleChangeGenre}
      handleChangeLocation={handleChangeLocation}
      filteredGenre={filteredGenre}
      filteredLocation={filteredLocation}
      locationOptions={locationOptions}
      options={options}
      data={boardsData}
    />
  );
};

export default MainList;
