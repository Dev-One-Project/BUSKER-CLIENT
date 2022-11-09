import { css } from "@emotion/react";

export const globalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap%22");
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 10px;
    /* background-color: #fffbfd; */
  }

  .wrap {
    position: absolute;
    left: 0;
    bottom: 40px;
    width: 288px;
    height: 132px;
    margin-left: -144px;
    text-align: left;
    overflow: hidden;
    font-size: 12px;
    font-family: "Malgun Gothic", dotum, "돋움", sans-serif;
    line-height: 1.5;
  }
  .wrap * {
    padding: 0;
    margin: 0;
  }
  .wrap .info {
    width: 286px;
    height: 120px;
    border-radius: 5px;
    border-bottom: 2px solid #ccc;
    border-right: 1px solid #ccc;
    overflow: hidden;
    background: #fff;
  }
  .wrap .info:nth-child(1) {
    border: 0;
    box-shadow: 0px 1px 2px #888;
  }
  .info .title {
    padding: 5px 0 0 10px;
    height: 30px;
    background: #eee;
    border-bottom: 1px solid #ddd;
    font-size: 18px;
    font-weight: bold;
  }
  .info .close {
    position: absolute;
    top: 10px;
    right: 10px;
    color: #888;
    width: 17px;
    height: 17px;
    background: url("https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/overlay_close.png");
  }
  .info .close:hover {
    cursor: pointer;
  }
  .info .body {
    position: relative;
    overflow: hidden;
  }
  .info .desc {
    position: relative;
    margin: 13px 0 0 90px;
    height: 75px;
  }
  .desc .ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .desc .jibun {
    font-size: 11px;
    color: #888;
    margin-top: -2px;
  }
  .info .img {
    position: absolute;
    top: 6px;
    left: 5px;
    width: 73px;
    height: 71px;
    border: 1px solid #ddd;
    color: #888;
    overflow: hidden;
  }
  .info:after {
    content: "";
    position: absolute;
    margin-left: -12px;
    left: 50%;
    bottom: 0;
    width: 22px;
    height: 12px;
    background: url("https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/vertex_white.png");
  }
  .info .link {
    color: #5085bb;
  }
`;

export const stylePrimaryColor = "#7D2BBE";

export const breakPoints = {
  desktop: "(min-width: 992px)",
  tablet: "(min-width: 768px) and (max-width: 991px)",
  mobile: "(max-width: 767px)",
};

export const boxShadow = "2px 3px 10px 2px rgba(0, 0, 0, 0.2)";
