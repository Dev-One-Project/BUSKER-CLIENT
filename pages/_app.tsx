import { Global } from "@emotion/react";
import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import ApolloSetting from "../src/commons/apollo";
import { globalStyles } from "../src/commons/styles/globalStyles";
import Layout from "../src/components/common/layout";
import Script from "next/script";
import "antd/dist/antd.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <>
          <Global styles={globalStyles} />
          <Layout>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            ></meta>
            <Script
              src="//dapi.kakao.com/v2/maps/sdk.js?appkey=edfba38ac62a236b1b1c5471e6851110&libraries=services,clusterer&autoload=false"
              strategy="beforeInteractive"
            />
            <Component {...pageProps} />
          </Layout>
        </>
      </ApolloSetting>
    </RecoilRoot>
  );
}

export default MyApp;
