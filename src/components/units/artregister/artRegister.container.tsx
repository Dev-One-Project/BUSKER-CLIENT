import { yupResolver } from "@hookform/resolvers/yup";
import { SelectProps } from "antd";
import { ChangeEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import type { DatePickerProps, RangePickerProps } from "antd/es/date-picker";
import { Address } from "react-daum-postcode";
import { useMutation, useQuery } from "@apollo/client";
import {
  IMutation,
  IMutationCreateBoardsArgs,
  IMutationUpdateBoardArgs,
  IMutationUploadFileArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../commons/types/generated/types";

import { useRouter } from "next/router";
import { FETCH_CATEGORIES } from "../main/list/List.queries";
import ArtRegisterPageWriteUI from "./artRegister.presenter";
import { ArtRegisterYup } from "./artRegister.schema";
import { IFormData } from "./artRegister.types";

import {
  CREATE_BOARDS,
  FETCH_BOARD,
  UPDATE_BOARD,
  UPLOAD_FILE,
} from "./artRegister.queries";

interface IArtRegisterPageWriteProps {
  isEdit?: boolean;
}

const ArtRegisterPageWrite = ({ isEdit }: IArtRegisterPageWriteProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [address, setAddress] = useState("");
  const [genre, setGenre] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [imgUrl, setImgUrl] = useState(["", "", ""]);
  const [preview, setPreview] = useState(["", "", ""]);

  const [createBoards] = useMutation<
    Pick<IMutation, "createBoards">,
    IMutationCreateBoardsArgs
  >(CREATE_BOARDS);

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const [updateBoard] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);
  const router = useRouter();

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    { variables: { boardId: String(router.query.id) } }
  );

  const { data: CategoryData } =
    useQuery<Pick<IQuery, "fetchCategories">>(FETCH_CATEGORIES);

  const { register, formState, handleSubmit, setValue } = useForm<IFormData>({
    resolver: yupResolver(ArtRegisterYup),
  });

  useEffect(() => {
    if (data) {
      setValue("contents", String(data?.fetchBoard.contents));
      setValue("start_time", data?.fetchBoard.start_time);
      setValue("end_time", data?.fetchBoard.end_time);
      setValue(
        "boardAddressInput.address",
        String(data?.fetchBoard.boardAddress.address)
      );
      setValue(
        "boardAddressInput.lat",
        Number(data?.fetchBoard.boardAddress.lat)
      );
      setValue(
        "boardAddressInput.lng",
        Number(data?.fetchBoard.boardAddress.lng)
      );
    }
  }, [data]);

  const TimeChange = (
    value: DatePickerProps["value"] | RangePickerProps["value"],
    dateString: [string, string] | string
  ) => {
    setStartTime(dateString[0]);
    setEndTime(dateString[1]);
    setValue("start_time", dateString[0]);
    setValue("end_time", dateString[1]);
  };

  const onClickAddressOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const onClickHandleCancel = () => {
    setIsOpen(false);
  };

  const onCompleteAddressSearch = (data: Address) => {
    setAddress(data.address);
    setIsOpen((prev) => !prev);
    setValue("boardAddressInput.address", data.address);
  };

  const options: SelectProps["options"] = [];

  for (let i = 0; i < Number(CategoryData?.fetchCategories.length); i++) {
    options.push({
      value: CategoryData?.fetchCategories[i].id,
      label: CategoryData?.fetchCategories[i].name,
    });
  }

  const handleChange = (value: any) => {
    setGenre(value);
    setValue("category", value);
  };

  const onChangeFile =
    (index: number) => async (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (!file) return;
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = (event) => {
        const newPreview = [...preview];
        if (event.target === null) return;
        newPreview[index] = String(event.target.result);
        setPreview(newPreview);
      };

      const result = await uploadFile({ variables: { file } });
      const newImgUrls = [...imgUrl];
      newImgUrls[index] = String(result.data?.uploadFile);
      setImgUrl(newImgUrls);
      setValue("boardImageURL", imgUrl);
    };

  const onClickEdit = async (data: IFormData) => {
    data.boardImageURL = imgUrl;
    const result = await updateBoard({
      variables: {
        boardId: String(router.query.id),
        updateBoardInput: {
          contents: data.contents,
          categoryId: data.category,
          start_time: data.start_time,
          end_time: data.end_time,
          boardAddressInput: {
            address,
            lat: Number(data.boardAddressInput.lat),
            lng: Number(data.boardAddressInput.lng),
          },
          boardImageURL: data.boardImageURL,
        },
      },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: {
            boardId: router.query.id,
          },
        },
      ],
    });
    await router.push(`/main/list/${String(result.data?.updateBoard.id)}`);
  };

  const onClickRegister = async (data: IFormData) => {
    try {
      data.boardImageURL = imgUrl;

      const result = await createBoards({
        variables: {
          createBoardInput: {
            contents: data.contents,
            categoryId: data.category,
            start_time: data.start_time,
            end_time: data.end_time,
            boardAddressInput: {
              address,
              lat: Number(data.boardAddressInput.lat),
              lng: Number(data.boardAddressInput.lng),
            },
            boardImageURL: data.boardImageURL,
          },
        },
        update(cache) {
          cache.modify({
            fields: () => {},
          });
        },
      });

      await router.push(`/main/list/${String(result.data?.createBoards.id)}`);
    } catch (error) {}
  };

  return (
    <ArtRegisterPageWriteUI
      data={data}
      onClickAddressOpen={onClickAddressOpen}
      isOpen={isOpen}
      onClickHandleCancel={onClickHandleCancel}
      onCompleteAddressSearch={onCompleteAddressSearch}
      address={address}
      register={register}
      formState={formState}
      handleSubmit={handleSubmit}
      onClickRegister={onClickRegister}
      handleChange={handleChange}
      options={options}
      genre={genre}
      TimeChange={TimeChange}
      startTime={startTime}
      onChangeFile={onChangeFile}
      imgUrl={imgUrl}
      endTime={endTime}
      setValue={setValue}
      preview={preview}
      isEdit={isEdit}
      onClickEdit={onClickEdit}
    />
  );
};

export default ArtRegisterPageWrite;
