import styled from "@emotion/styled";
import "aos/dist/aos.css";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import {
  deviceState,
  // districtDataState,
  userPositionState,
} from "../src/commons/store";
import Head from "next/script";
import { FETCH_USER } from "../src/components/units/artistsignup/ArtistSignup.Quries";
import { useQuery } from "@apollo/client";
import { IQuery } from "../src/commons/types/generated/types";
// import { DISTRICT_LIST } from "../src/components/units/main/list/List.queries";

export default function Home() {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchUser">>(FETCH_USER);

  // const [districtData, setDistrictData] = useRecoilState(districtDataState);
  // const { data: districtList } =
  //   useQuery<Pick<IQuery, "districtList">>(DISTRICT_LIST);

  // useEffect(() => {
  //   setDistrictData(districtList ?? {});
  // }, [districtList]);
  const [isMobile, setIsMobile] = useRecoilState(deviceState);
  const [userPosition, setUserPosition] = useRecoilState(userPositionState);
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
  console.log("현재 좌표:", userPosition);
  console.log(isMobile ? "데탑아님" : "데탑임");
  console.log(data ? "로그인 상태" : "로그인 안된 상태");
  return (
    <>
      <Head>
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      </Head>
      <Wrapper>
        <VideoBox>
          <Video
            src="/streetDance.mp4"
            autoPlay
            muted
            loop
            preload="auto"
            playsInline
          ></Video>
        </VideoBox>
        <button onClick={async () => await router.push("/map")}>
          근처의 버스킹 확인하기
        </button>
        <div style={{ width: "100%", height: "500px" }}>
          <div data-aos="fade-left" className="box">
            <h2 className="title">fade-left</h2>
          </div>
          <div data-aos="fade-right" className="box">
            <h2 className="title">fade-right</h2>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export const Wrapper = styled.div`
  position: relative;
  padding-top: 100vh;
`;

export const VideoBox = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: 0;
  overflow: hidden;
`;

export const Video = styled.video`
  display: block;
  position: absolute;
  left: 50%;
  top: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translate(-50%, -50%);
  filter: brightness(50%);
  z-index: -1;
`;
