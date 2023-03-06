import { useEffect, useState } from "react";
import { MapMarker, Map, CustomOverlayMap } from "react-kakao-maps-sdk";
import ImageBox from "../imageBox";
import { CloseOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import { IKakaoMapProps } from "../../../commons/map/Map.types";
import styled from "@emotion/styled";

const KakaoMap = ({
  position,
  address,
  isMap,
  setValue,
  data,
}: IKakaoMapProps) => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState<boolean[]>([]);
  const [center, setCenter] = useState({
    lat: position?.lat,
    lng: position?.lng,
  });

  const onClickMarker = (i: number) => () => {
    setIsOpen((prev) => {
      const filteredPrev = prev.map((TF, index) => (index === i ? !TF : TF));
      return filteredPrev;
    });
  };

  useEffect(() => {
    kakao.maps.load(() => {
      if (!isMap) {
        const geocoder = new kakao.maps.services.Geocoder();

        geocoder.addressSearch(address, function (result, status) {
          if (status === kakao.maps.services.Status.OK) {
            // 정상적으로 검색이 완료됐으면

            const newSearch = result[0];
            setCenter({ lat: newSearch.y, lng: newSearch.x });

            setValue?.("boardAddressInput.lat", Number(newSearch.y));
            setValue?.("boardAddressInput.lng", Number(newSearch.x));
          }
        });
      }
    });
    if (data) setIsOpen(new Array(data.fetchMapBoards.length).fill(false));
  }, [position, address, isMap, setValue, data]);

  const onClickMoveToArtDetail = (id: string) => async () => {
    await router.push(`/main/list/${id}`);
  };
  return (
    <Map
      center={{
        lat: address ? Number(center.lat) : Number(position?.lat),
        lng: address ? Number(center.lng) : Number(position?.lng),
      }}
      style={{
        width: "100%",
        height: "100%",
      }}
      level={typeof window !== "undefined" && window.outerWidth > 1000 ? 4 : 5}
      zoomable={false}
    >
      {address ? (
        <MapMarker
          position={{ lat: Number(center.lat), lng: Number(center.lng) }}
        ></MapMarker>
      ) : (
        <>
          <CustomOverlayMap
            position={{
              lat: Number(position?.lat),
              lng: Number(position?.lng),
            }}
            clickable={false}
          >
            <UserPosition></UserPosition>
            <span
              style={{
                color: "red",
                fontWeight: "bold",
                position: "relative",
                left: "-20px",
                fontSize: "1.5rem",
                cursor: "none",
              }}
            >
              현재 위치
            </span>
          </CustomOverlayMap>
          <MapMarker
            position={{
              lat: Number(position?.lat) - 0.0015,
              lng: Number(position?.lng) - 0.0015,
            }}
          />
          <CustomOverlayMap
            position={{
              lat: Number(position?.lat) - 0.0015,
              lng: Number(position?.lng) - 0.0015,
            }}
            zIndex={99}
          >
            <div className="wrap">
              <div className="info">
                <div className="title">
                  test name
                  <div className="close" title="닫기">
                    <CloseOutlined />
                  </div>
                </div>
                <div className="body">
                  <div className="img">
                    <ImageBox width="75px" height="75px" src={``} />
                  </div>
                  <div className="desc">
                    <div className="ellipsis category">
                      # test category name
                    </div>
                    <div className="jibun ellipsis">시작: test startAt</div>
                    <div className="jibun ellipsis">종료: test endAt</div>
                    <span className="link" title="">
                      버스킹 정보 보러가기
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </CustomOverlayMap>
          {data?.fetchMapBoards.map((board, i) => {
            const position = {
              lat: board.boardAddress.lat,
              lng: board.boardAddress.lng,
            };

            const startAt = new Intl.DateTimeFormat("ko-KR", {
              hour: "numeric",
              minute: "numeric",
            }).format(new Date(board.start_time));
            const endAt = new Intl.DateTimeFormat("ko-KR", {
              hour: "numeric",
              minute: "numeric",
            }).format(new Date(board.end_time));
            return (
              <div key={i}>
                <MapMarker position={position} onClick={onClickMarker(i)} />
                <>
                  {isOpen[i] && (
                    <CustomOverlayMap position={position} zIndex={99}>
                      <div className="wrap">
                        <div className="info">
                          <div className="title">
                            {board.artist.active_name}
                            <div
                              className="close"
                              onClick={onClickMarker(i)}
                              title="닫기"
                            >
                              <CloseOutlined />
                            </div>
                          </div>
                          <div className="body">
                            <div className="img">
                              <ImageBox
                                width="75px"
                                height="75px"
                                src={`https://storage.googleapis.com/busker-storage/${board.artist.artistImageURL}`}
                              />
                            </div>
                            <div className="desc">
                              <div className="ellipsis category">
                                # {board.category.name}
                              </div>
                              <div className="jibun ellipsis">
                                시작: {startAt}
                              </div>
                              <div className="jibun ellipsis">
                                종료: {endAt}
                              </div>
                              <span
                                className="link"
                                title=""
                                onClick={onClickMoveToArtDetail(board.id)}
                              >
                                버스킹 정보 보러가기
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CustomOverlayMap>
                  )}
                </>
              </div>
            );
          })}
        </>
      )}
    </Map>
  );
};

export default KakaoMap;

const UserPosition = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: red;

  animation: flicker 1.5s infinite;

  @keyframes flicker {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
