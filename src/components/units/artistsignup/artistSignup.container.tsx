import { useMutation, useQuery } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal, SelectProps } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import { Address } from "react-daum-postcode";
import { useForm } from "react-hook-form";
import {
  IMutation,
  IMutationCreateArtistArgs,
  IMutationCreateMemberArgs,
  IMutationUpdateArtistArgs,
  IMutationUpdateMemberArgs,
  IMutationUploadFileArgs,
  IQuery,
  IQueryFetchMembersArgs,
} from "../../../commons/types/generated/types";

import { UPDATE_MEMBER } from "../member/MemberFetch.quries";
import ArtistSignupPageWriteUI from "./artistSignup.presenter";

import {
  CREATE_ARTIST,
  CREATE_MEMBER,
  FECTH_CATEGORIES,
  FETCH_ARTIST,
  FETCH_MEMBERS,
  UPDATE_ARTIST,
  UPLOAD_FILE,
} from "./artistSignup.queries";
import { ArtistSignupYup } from "./artistSignup.schema";
import { IArtistSignupPageWrite, IFormData } from "./artistSignup.types";

const ArtistSignupPageWrite = ({ isEdit }: IArtistSignupPageWrite) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isTeam, setIsTeam] = useState(false);
  const [isMemberEdit, setIsMemberEdit] = useState(false);
  const [address] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [editUrl, setEditUrl] = useState("");
  const [getId, setGetId] = useState("");
  const [editData, setEditData] = useState(["", "", ""]);

  const { register, handleSubmit, formState, setValue } = useForm<IFormData>({
    resolver: yupResolver(ArtistSignupYup),
  });

  const [createArtist] = useMutation<
    Pick<IMutation, "createArtist">,
    IMutationCreateArtistArgs
  >(CREATE_ARTIST);

  const [updateArtist] = useMutation<
    Pick<IMutation, "updateArtist">,
    IMutationUpdateArtistArgs
  >(UPDATE_ARTIST);

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const [createMember] = useMutation<
    Pick<IMutation, "createMember">,
    IMutationCreateMemberArgs
  >(CREATE_MEMBER);

  const { data } = useQuery<Pick<IQuery, "fetchArtist">>(FETCH_ARTIST);

  const { data: MemberData } = useQuery<
    Pick<IQuery, "fetchMembers">,
    IQueryFetchMembersArgs
  >(FETCH_MEMBERS, { variables: { artistId: String(router.query.id) } });

  const { data: CategoryData } =
    useQuery<Pick<IQuery, "fetchCategories">>(FECTH_CATEGORIES);

  useEffect(() => {
    if (data) {
      setValue("active_name", String(data?.fetchArtist.active_name));
      setValue("description", String(data?.fetchArtist.description));
      setValue("promotion_url", String(data?.fetchArtist.promotion_url));
      setValue("artistImageURL", String(data?.fetchArtist.artistImageURL));
    }
  }, [data]);

  const onClickSearchAddress = () => {
    setIsOpen((prev) => !prev);
  };

  const onClickHandleCancel = () => {
    setIsOpen(false);
  };

  const [updateMember] = useMutation<
    Pick<IMutation, "updateMember">,
    IMutationUpdateMemberArgs
  >(UPDATE_MEMBER);

  const onCompleteAddressSearch = (data: Address) => {
    setIsOpen((prev) => !prev);
    localStorage.setItem("address", JSON.stringify(data.address));
  };

  const onClickTeam = () => {
    setIsTeam((prev) => !prev);
  };

  const onChangeMemberName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };

  const onChangeRole = (event: ChangeEvent<HTMLInputElement>) => {
    setRole(event.currentTarget.value);
  };

  const options: SelectProps["options"] = [];

  for (let i = 0; i < Number(CategoryData?.fetchCategories.length); i++) {
    options.push({
      value: CategoryData?.fetchCategories[i].id,
      label: CategoryData?.fetchCategories[i].name,
    });
  }

  const handleChange = (value: string) => {
    console.log(value);
    setValue("category", value);
  };

  const onClickSignup = async (data: IFormData) => {
    console.log(data);
    try {
      const result = await createArtist({
        variables: { createArtistInput: { ...data } },
      });
      Modal.success({
        content: "버스커로 등록되셨습니다. 당신의 버스킹 활동을 응원합니다.",
      });
      await router.push(
        `/artistdetail/${String(result.data?.createArtist.id)}`
      );
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickMember = async () => {
    await createMember({
      variables: {
        artistId: String(router.query.id),
        createMemberInput: {
          name,
          role,
          memberImageURL: editUrl,
        },
      },
      refetchQueries: [
        {
          query: FETCH_MEMBERS,
          variables: {
            artistId: router.query.id,
          },
        },
      ],
    });
    await router.push("/main/list");
  };

  const onClickMemberEdit = async () => {
    await updateMember({
      variables: {
        memberId: getId,
        updateMemberInput: {
          name,
          role,
          memberImageURL: editUrl,
        },
      },
      refetchQueries: [
        {
          query: FETCH_MEMBERS,
          variables: {
            artistId: router.query.id,
          },
        },
      ],
    });
    setIsMemberEdit(false);
  };

  const onClickEdit = async (data: IFormData) => {
    try {
      const result = await updateArtist({
        variables: {
          updateArtistInput: data,
        },
        update(cache) {
          cache.modify({
            fields: () => {},
          });
        },
      });

      void router.push(`/artistdetail/${String(result.data?.updateArtist.id)}`);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
      }
    }
  };

  const onCreateArtistImage = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (event) => {
      if (typeof event.target?.result === "string") {
        setImgUrl(event.target.result);
      }
    };
    const result = await uploadFile({ variables: { file } });
    setValue("artistImageURL", String(result.data?.uploadFile));
    setEditUrl(String(result.data?.uploadFile));
  };

  return (
    <ArtistSignupPageWriteUI
      editUrl={editUrl}
      MemberData={MemberData}
      onClickSearchAddress={onClickSearchAddress}
      isOpen={isOpen}
      onClickHandleCancel={onClickHandleCancel}
      onCompleteAddressSearch={onCompleteAddressSearch}
      onClickTeam={onClickTeam}
      isTeam={isTeam}
      isEdit={isEdit}
      handleSubmit={handleSubmit}
      register={register}
      onClickSignup={onClickSignup}
      onClickEdit={onClickEdit}
      formState={formState}
      address={address}
      handleChange={handleChange}
      options={options}
      onCreateArtistImage={onCreateArtistImage}
      imgUrl={imgUrl}
      data={data}
      onChangeMemberName={onChangeMemberName}
      onChangeRole={onChangeRole}
      onClickMember={onClickMember}
      setIsMemberEdit={setIsMemberEdit}
      isMemberEdit={isMemberEdit}
      setGetId={setGetId}
      onClickMemberEdit={onClickMemberEdit}
      editData={editData}
      setEditData={setEditData}
    />
  );
};

export default ArtistSignupPageWrite;
