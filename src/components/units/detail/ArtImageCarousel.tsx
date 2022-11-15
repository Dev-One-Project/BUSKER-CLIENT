import styled from "@emotion/styled";
import Slider from "react-slick";
import {
  breakPoints,
  stylePrimaryColor,
} from "../../../commons/styles/globalStyles";

const ImageCarousel = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
  };
  return (
    <SlideWrapper>
      <StyledSlider {...settings}>
        {new Array(3).fill(1).map((_, i) => (
          <ImageBox key={i}>
            <StyledImage src="" />
          </ImageBox>
        ))}
      </StyledSlider>
    </SlideWrapper>
  );
};

export default ImageCarousel;

const SlideWrapper = styled.div``;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  background-color: #ddd;
  opacity: 0.3;
  transition: opacity 1s ease;
`;

const ImageBox = styled.div`
  height: 400px;

  @media ${breakPoints.tablet} {
    height: 300px;
  }

  @media ${breakPoints.mobile} {
    height: 200px;
  }
`;

const StyledSlider = styled(Slider)`
  .slick-slider {
    width: 100%;
  }

  .slick-list {
    border-radius: 20px;
    border: 1px solid ${stylePrimaryColor};
  }

  .slick-track {
    display: flex;
    gap: 50px;
  }

  .slick-slide {
    flex: 1;
  }

  .slick-prev::before,
  .slick-next::before {
    color: ${stylePrimaryColor};
  }

  .slick-prev,
  .slick-next {
    z-index: 10;
  }

  .slick-prev {
    left: 50px;
  }

  .slick-next {
    right: 36px;
  }

  .slick-center img {
    opacity: 1;
  }
`;
