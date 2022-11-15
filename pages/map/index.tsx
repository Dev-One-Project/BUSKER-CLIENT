import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { deviceState, userPositionState } from "../../src/commons/store";
import {
  breakPoints,
  stylePrimaryColor,
} from "../../src/commons/styles/globalStyles";
import Button01 from "../../src/components/common/buttons/01";
import KakaoMap from "../../src/components/common/kakaoMap";

export default function KaKaoMapPage() {
  const router = useRouter();
  const [userPosition, setUserPosition] = useRecoilState(userPositionState);
  const [isMobile, setIsMobile] = useRecoilState(deviceState);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setUserPosition({
        lat: String(position.coords.latitude),
        lng: String(position.coords.longitude),
      });
    });
    setIsMobile(
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    );
  }, []);

  return (
    <Wrapper>
      {userPosition.lat === "" ? (
        <div
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          불러오는 중입니다...
        </div>
      ) : (
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
            margin: "0 auto",
          }}
        >
          <KakaoMap address="" position={userPosition} />
          <Button01
            style={{
              position: "absolute",
              bottom: `${isMobile ? "80px" : "50px"}`,
              left: "50%",
              transform: "translate(-50%,-50%)",
              zIndex: "2",
              backgroundColor: `${stylePrimaryColor}`,
              color: "white",
            }}
            onClick={async () => await router.push("/main/list")}
          >
            리스트로 보기
          </Button01>
        </div>
      )}
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  width: 100vw;
  height: calc(100vh - 100px);
  position: relative;
  @media ${breakPoints.mobile} {
    height: calc(100vh - 50px);
  }
`;
