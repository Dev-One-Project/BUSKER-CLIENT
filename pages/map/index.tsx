import { useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { deviceState, userPositionState } from "../../src/commons/store";
import {
  breakPoints,
  stylePrimaryColor,
} from "../../src/commons/styles/globalStyles";
import {
  IQuery,
  IQueryFetchMapBoardsArgs,
} from "../../src/commons/types/generated/types";
import Button01 from "../../src/components/common/buttons/01";
import KakaoMap from "../../src/components/common/kakaoMap";
import { FETCH_MAP_BOARDS } from "../../src/commons/map/Map.queries";
// import useAuth from "../../src/commons/libraries/useAuth";

export default function KaKaoMapPage() {
  // useAuth();
  const router = useRouter();
  const [userPosition, setUserPosition] = useRecoilState(userPositionState);
  const [isMobile, setIsMobile] = useRecoilState(deviceState);
  useEffect(() => {
    if (!userPosition.lat) {
      navigator.geolocation.getCurrentPosition((position) => {
        setUserPosition({
          lat: String(position.coords.latitude),
          lng: String(position.coords.longitude),
        });
      });
    }

    setIsMobile(
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    );
  }, []);

  const { data } = useQuery<
    Pick<IQuery, "fetchMapBoards">,
    IQueryFetchMapBoardsArgs
  >(FETCH_MAP_BOARDS, {
    variables: {
      lat: Number(userPosition.lat),
      lng: Number(userPosition.lng),
      distance: 2,
    },
  });

  return (
    <Wrapper>
      {userPosition.lat === "" ? (
        <div className="wrapper">
          <div>
            <span className="loader"></span>
            <span style={{ color: "white", fontSize: "1.5rem" }}>
              지도를 불러오는 중입니다...
            </span>
          </div>
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
          <KakaoMap address="" position={userPosition} data={data} />
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

  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: linear-gradient(270deg, #30004b, #a300ff, #430069);
    background-size: 600% 600%;

    -webkit-animation: AnimationName 9s ease infinite;
    -moz-animation: AnimationName 9s ease infinite;
    animation: AnimationName 9s ease infinite;
  }

  @-webkit-keyframes AnimationName {
    0% {
      background-position: 0% 51%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 51%;
    }
  }
  @-moz-keyframes AnimationName {
    0% {
      background-position: 0% 51%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 51%;
    }
  }
  @keyframes AnimationName {
    0% {
      background-position: 0% 51%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 51%;
    }
  }

  .loader {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    display: block;
    margin: 15px auto;
    position: relative;
    color: white;
    left: -120px;
    box-sizing: border-box;
    animation: shadowRolling 2s linear infinite;
  }

  @keyframes shadowRolling {
    0% {
      box-shadow: 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0),
        0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0);
    }
    12% {
      box-shadow: 100px 0 white, 0px 0 rgba(255, 255, 255, 0),
        0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0);
    }
    25% {
      box-shadow: 110px 0 white, 100px 0 white, 0px 0 rgba(255, 255, 255, 0),
        0px 0 rgba(255, 255, 255, 0);
    }
    36% {
      box-shadow: 120px 0 white, 110px 0 white, 100px 0 white,
        0px 0 rgba(255, 255, 255, 0);
    }
    50% {
      box-shadow: 130px 0 white, 120px 0 white, 110px 0 white, 100px 0 white;
    }
    62% {
      box-shadow: 200px 0 rgba(255, 255, 255, 0), 130px 0 white, 120px 0 white,
        110px 0 white;
    }
    75% {
      box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0),
        130px 0 white, 120px 0 white;
    }
    87% {
      box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0),
        200px 0 rgba(255, 255, 255, 0), 130px 0 white;
    }
    100% {
      box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0),
        200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0);
    }
  }
`;
