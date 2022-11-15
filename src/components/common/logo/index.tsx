import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { breakPoints } from "../../../commons/styles/globalStyles";

export const LogoIcon = styled.span``;

export const HomeLink = styled.a`
  display: block;
  width: 100%;
  height: 100%;
  font-size: 3rem;

  padding: 1em;
  letter-spacing: 5px;
  cursor: pointer;

  @media ${breakPoints.mobile} {
    font-size: 1.5rem;
  }
`;

const Logo = () => {
  const router = useRouter();
  const onClickLogo = async () => {
    await router.push("/");
  };
  return (
    <LogoIcon>
      <HomeLink
        style={{ color: router.asPath === "/" ? "white" : "black" }}
        onClick={onClickLogo}
      >
        BUSKER
      </HomeLink>
    </LogoIcon>
  );
};

export default Logo;
