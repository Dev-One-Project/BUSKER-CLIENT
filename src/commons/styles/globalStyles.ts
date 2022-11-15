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
    left: 20px;
    bottom: 40px;
    width: 250px;
    height: 132px;
    margin-left: -144px;
    text-align: left;
    overflow: hidden;
    font-size: 12px;
    line-height: 1.5;
  }
  .wrap * {
    padding: 0;
    margin: 0;
  }
  .wrap .info {
    width: 250px;
    height: 120px;
    border-radius: 5px;
    border-bottom: 2px solid #ccc;
    border-right: 1px solid #ccc;
    overflow: hidden;
    background: #fff;
  }
  .wrap .info:nth-of-type(1) {
    border: 0;
    box-shadow: 0px 1px 2px #888;
  }
  .info .title {
    padding: 2px 0 0 10px;
    height: 30px;
    background: #9900ff;
    border-bottom: 1px solid #ddd;
    font-size: 18px;
    font-weight: bold;
    color: white;
  }
  .info .close {
    position: absolute;
    top: 8px;
    right: 8px;
    color: #888;
    width: 17px;
    height: 17px;
    & * {
      font-size: 1.5rem;
      color: white;
    }
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
    width: 75px;
    height: 75px;
    border: 1px solid #ddd;
    color: #888;
    overflow: hidden;
    border: none;
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
    color: #9900ff;
  }

  .info .link:hover {
    cursor: pointer;
  }

  main {
    display: flex;
  }

  aside {
    background-color: #c4a8ff;
    width: 18.75rem;
    height: 100vh;
  }

  .container {
    margin: 4.5rem 1.4rem;
  }

  .btn-container {
    position: fixed;
  }

  .container a {
    color: #f9fafb;
    text-decoration: none;
    font-size: 1.75rem;
    font-weight: 600;
    display: block;
    margin: 20px;
  }
`;

export const stylePrimaryColor = "#9900FF";
export const styleSecondColor = "#6600FF";
export const breakPoints = {
  desktop: "(min-width: 992px)",
  tablet: "(min-width: 768px) and (max-width: 991px)",
  mobile: "(max-width: 767px)",
};

export const boxShadow = "2px 3px 10px 2px rgba(0, 0, 0, 0.2)";
