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
`;

export const ContentsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 30px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  @media ${breakPoints.mobile} {
    width: 280px;
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
  max-width: 300px;
  width: 100%;
`;

export const PlaceGenreWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
    width: 200px;
  }
`;

export const ArtistPlaceWrapper = styled.div`
  gap: 5rem;
  width: 100%;
  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
    width: 200px;
    justify-content: center;
  }
`;

export const MainPlaceGenreWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  input {
    width: 200px;
    margin-right: 20px;
  }
  button {
    height: 50px;
    width: 80px;
    border-radius: 1.5rem;
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
  height: 3rem;
  width: 30%;
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
  align-items: center;
  gap: 10px;
  border: 1px solid ${stylePrimaryColor};
  border-radius: 10px;
  margin: 20px 0;
  padding: 10px;
  width: 80%;
  max-width: 600px;
  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
    input {
      width: 100%;
    }
  }
`;

export const AddBtn = styled.button`
  height: 50px;
  width: 50px;
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
  width: 80px;
  margin-right: 24px;
  background-color: #ccc;
  cursor: pointer;
  text-align: center;
  line-height: 7.6rem;
  font-size: 2.5rem;
  aspect-ratio: 1/1;
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
  width: 50px;
  height: 50px;
  aspect-ratio: 1/1;
`;

export const SubmitBtn = styled.button`
  height: 5rem;
  width: 20%;
  min-width: 200px;
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
  margin: 40px auto;
`;

export const AddressModal = styled(Modal)``;

export const AddressSearchInput = styled(DaumPostcodeEmbed)``;

export const ErrorMsg = styled.div`
  font-size: 1.5rem;
  color: red;
  padding: 0 20px;
`;
