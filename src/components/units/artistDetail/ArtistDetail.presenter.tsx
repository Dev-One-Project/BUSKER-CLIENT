import { Divider } from "antd";
import ImageBox from "../../common/imageBox";
import * as S from "./ArtistDetail.styles";
import { IArtistDetailProps } from "./ArtistDetail.types";

const ArtistDetailUI = (props: IArtistDetailProps) => {
  return (
    <S.Wrapper>
      <S.Header>
        <ImageBox width="150px" height="150px" src="" />
        <S.TypingIntro>
          <div className="typewriter">
            <span>
              안녕하세요. <strong>버스커 ㅁㄴㅇㄹㅁㅇㄴㄹㅁㄴㅇㄹ</strong>
              입니다.
            </span>
            <span>
              저의 버스킹 주제는 <strong>춤</strong> 입니다.
            </span>
          </div>
        </S.TypingIntro>
      </S.Header>
      <Divider />
      <S.ArtistContents>
        <S.ArtistContentsLeft>
          <S.ArtistIntro>
            안녕하세요. 저는 어쩌구 저쩌구 블라블라 어쩌구 저쩌구 블라블라어쩌구
            저쩌구 블라블라어쩌구 저쩌구 블라블라어쩌구 저쩌구 블라블라어쩌구
            저쩌구 블라블라어쩌구 저쩌구 블라블라어쩌구 저쩌구 블라블라어쩌구
            저쩌구 블라블라어쩌구 저쩌구 블라블라어쩌구 저쩌구 블라블라어쩌구
            저쩌구 블라블라어쩌구 저쩌구 블라블라 어쩌구 저쩌구 블라블라 어쩌구
            저쩌구 블라블라어쩌구 저쩌구 블라블라어쩌구 저쩌구 블라블라어쩌구
            저쩌구 블라블라어쩌구 저쩌구 블라블라어쩌구 저쩌구 블라블라어쩌구
            저쩌구 블라블라어쩌구 저쩌구 블라블라어쩌구 저쩌구 블라블라어쩌구
            저쩌구 블라블라어쩌구 저쩌구 블라블라어쩌구 저쩌구 블라블라 어쩌구
            저쩌구 블라블라 어쩌구 저쩌구 블라블라어쩌구 저쩌구 블라블라어쩌구
            저쩌구 블라블라어쩌구 저쩌구 블라블라어쩌구 저쩌구 블라블라어쩌구
            저쩌구 블라블라어쩌구 저쩌구 블라블라어쩌구 저쩌구 블라블라어쩌구
            저쩌구 블라블라어쩌구 저쩌구 블라블라어쩌구 저쩌구 블라블라어쩌구
            저쩌구 블라블라 왤케 말이 많을까요 저는 꺄륵쿠스투스!
          </S.ArtistIntro>
          <Divider />
          {/* 팀 멤버가 존재한다면 start */}
          <S.CommonTitle>저희 멤버들을 소개할게요!</S.CommonTitle>
          <S.TeamMemberBox>
            {new Array(3).fill(1).map((_, index) => (
              <S.Member key={index}>
                <ImageBox width="50px" height="50px" src="" />
                <S.MemberInfo>
                  <span>멤버{index} 이름</span>
                  <span>멤버{index} 역할</span>
                </S.MemberInfo>
              </S.Member>
            ))}
          </S.TeamMemberBox>
          {/* 팀 멤버가 존재한다면 end */}
        </S.ArtistContentsLeft>
        <S.ArtistContentsRight>
          <S.StickyBox>
            유저한테는 대충 돌아가기 버튼이랑 찜하기 버튼
            <br /> 아티스트한테는 수정하기 버튼 삭제하기 버튼
          </S.StickyBox>
        </S.ArtistContentsRight>
      </S.ArtistContents>
      <Divider />
      <S.CommonTitle>최근에 이런 공연들을 했어요!</S.CommonTitle>
      <S.RecentArts>
        {new Array(3).fill(1).map((_, index) => (
          <S.RecentArt key={index}>
            공연 장소 이미지랑 공연 언제 했는지(end day) 어디서 했는지(address)
          </S.RecentArt>
        ))}
      </S.RecentArts>
    </S.Wrapper>
  );
};

export default ArtistDetailUI;
