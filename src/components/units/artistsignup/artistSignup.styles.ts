import styled from "@emotion/styled";
import { Modal } from "antd";
import DaumPostcodeEmbed from "react-daum-postcode";
import "antd/dist/antd.css";
import {
  breakPoints,
  stylePrimaryColor,
} from "../../../commons/styles/globalStyles";

export const MainWrapper = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 5rem;
  padding-bottom: 100px;
`;

export const ContentsWrapper = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 0 30px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);

  @media ${breakPoints.desktop} {
    margin: 0 30px;
  }
  @media ${breakPoints.tablet} {
    margin: 0 20px;
  }
  @media ${breakPoints.mobile} {
    margin: 0 10px;
  }
`;

export const ContentsTopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 0;
  width: 100%;
`;

export const ArtistProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 100%;
  min-width: 300px;
`;

export const PlaceGenreWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  @media ${breakPoints.mobile} {
    width: 100%;
    display: flex;
    flex-direction: column;

    input {
      width: 100%;
    }
  }
`;

export const ArtistPlaceWrapper = styled.div`
  gap: 5rem;
  width: 100%;
  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const MainPlaceGenreWrapper = styled.div`
  display: flex;
  flex-direction: column;
  &.map {
    width: 100%;
  }
  &.select {
    width: 100%;
  }
  .ant-select-single .ant-select-selector {
    align-items: center !important;
  }
  .ant-select {
    height: 50px;
    div {
      height: 100% !important;
      span {
        font-size: 1.5rem;
      }
    }
  }
  input {
    width: 100%;
    margin-right: 20px;
  }
  button {
    height: 50px;
    width: 200px;
    border-radius: 10px;
    font-size: 1.5rem;
    font-weight: 600;
    aspect-ratio: 1/1;
    cursor: pointer;
    color: ${stylePrimaryColor};
    background: none;
    border: 1px solid ${stylePrimaryColor};
    :hover {
      background-color: ${stylePrimaryColor};
      color: white;
    }
  }
  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
  }
`;

export const RemarksLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const AddressWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
  }
`;

export const RemarksInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TextStyle = styled.div`
  font-size: 1.8rem;
  padding: 10px 0;
  color: ${stylePrimaryColor};
`;

export const ContentsBottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const TeamBtn = styled.button`
  height: 50px;
  width: 30%;
  font-size: 1.5rem;
  border-radius: 1.5rem;
  font-weight: 600;
  cursor: pointer;
  color: ${stylePrimaryColor};
  background: none;
  border: 1px solid ${stylePrimaryColor};
  :hover {
    background-color: ${stylePrimaryColor};
    color: white;
  }
`;

export const AddTeamWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const AddTeamInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  border: 1px solid ${stylePrimaryColor};
  border-radius: 10px;
  margin: 20px 0;
  padding: 10px;
  max-width: 700px;
  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
    input {
      width: 100%;
    }
  }
`;

export const AddBtn = styled.button`
  border-radius: 1.5rem;
  font-weight: 600;
  font-size: 1.7rem;
  cursor: pointer;
  color: white;
  background: ${stylePrimaryColor};
  border: 1px solid ${stylePrimaryColor};
`;

export const ImgBtn = styled.label`
  display: inline-block;
  width: 150px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  margin-right: 24px;
  background-color: #ccc;
  cursor: pointer;
  line-height: 7.6rem;
  font-size: 2.5rem;
  aspect-ratio: 1/1;
  justify-content: center;
`;

export const FileInput = styled.input`
  display: none;
`;

export const MemberImgBtn = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-align: center;
  font-size: 2.5rem;
  border-radius: 100px;
  background-color: #ccc;
  width: 75px;
  height: 75px;
  aspect-ratio: 1/1;
`;

export const SubmitBtn = styled.button`
  height: 5rem;
  width: 20%;
  min-width: 200px;
  border-radius: 1.5rem;
  font-size: 2rem;
  font-weight: 600;
  cursor: pointer;
  color: ${stylePrimaryColor};
  background: none;
  border: 1px solid ${stylePrimaryColor};
  :hover {
    background-color: ${stylePrimaryColor};
    color: white;
  }
  margin: 40px auto;
`;

export const AddressModal = styled(Modal)``;

export const AddressSearchInput = styled(DaumPostcodeEmbed)``;

export const ErrorMsg = styled.div`
  font-size: 1.5rem;
  color: red;
  padding: 0 20px;
`;

export const ImgNameWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  img {
    position: absolute;
    border-radius: 50%;
    padding: 10px;
    background-color: #fff;
    bottom: 0;
    right: 25px;
    border: 1px solid #aaa;
  }
`;

export const Edit = styled.p`
  font-size: 3rem;
  font-weight: 600;
  text-align: center;
  margin: 0 auto;
`;
