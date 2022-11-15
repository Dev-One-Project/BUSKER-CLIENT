import { useEffect, useState } from "react";
import { MapMarker, Map, CustomOverlayMap } from "react-kakao-maps-sdk";
import { UseFormSetValue } from "react-hook-form";
import { IFormData } from "../../units/artregister/artregister.types";
import ImageBox from "../imageBox";
import { CloseOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";

interface IKakaoMapProps {
  address: string;
  position?: {
    lat: string;
    lng: string;
  };
  isMap?: boolean;
  setValue?: UseFormSetValue<IFormData>;
}

const KakaoMap = ({ position, address, isMap, setValue }: IKakaoMapProps) => {
  const router = useRouter();
  const [dummyPosition, setPosition] = useState([
    { lat: Number(position?.lat) - 0.001, lng: Number(position?.lng) - 0.003 },
    { lat: Number(position?.lat) + 0.002, lng: Number(position?.lng) + 0.004 },
    { lat: Number(position?.lat) - 0.003, lng: Number(position?.lng) - 0.008 },
    { lat: Number(position?.lat) + 0.004, lng: Number(position?.lng) + 0.009 },
  ]);

  const [isOpen, setIsOpen] = useState(new Array(4).fill(false));
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
            console.log("!", result[0]);
            const newSearch = result[0];
            setCenter({ lat: newSearch.y, lng: newSearch.x });

            setValue?.("boardAddressInput.lat", newSearch.y);
            setValue?.("boardAddressInput.lng", newSearch.x);
          }
        });
      }
      setPosition([
        {
          lat: Number(position?.lat) - 0.001,
          lng: Number(position?.lng) - 0.003,
        },
        {
          lat: Number(position?.lat) + 0.002,
          lng: Number(position?.lng) + 0.003,
        },
        {
          lat: Number(position?.lat) - 0.003,
          lng: Number(position?.lng) + 0.002,
        },
        {
          lat: Number(position?.lat) + 0.002,
          lng: Number(position?.lng) - 0.004,
        },
      ]);
    });
  }, [position, address, isMap, setValue]);
  console.log(center);

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
        margin: "0 auto",
      }}
      level={typeof window !== "undefined" && window.outerWidth > 1000 ? 4 : 5}
      zoomable={false}
    >
      {address ? (
        <MapMarker
          position={{ lat: Number(center.lat), lng: Number(center.lng) }}
        ></MapMarker>
      ) : (
        dummyPosition.map((pos, i) => (
          <div key={i}>
            <MapMarker position={pos} onClick={onClickMarker(i)} />
            {isOpen[i] && (
              <CustomOverlayMap position={pos} zIndex={99}>
                <div className="wrap">
                  <div className="info">
                    <div className="title">
                      아티스트 이름
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
                        <ImageBox width="75px" height="75px" src="" />
                      </div>
                      <div className="desc">
                        <div className="ellipsis"># 악기 연주</div>
                        <div className="jibun ellipsis">
                          오후 7시 30분 ~ 오후 9시 30분
                        </div>
                        <span
                          className="link"
                          title=""
                          onClick={onClickMoveToArtDetail("123")}
                        >
                          버스킹 정보 보러가기
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CustomOverlayMap>
            )}
          </div>
        ))
      )}
    </Map>
  );
};

export default KakaoMap;
