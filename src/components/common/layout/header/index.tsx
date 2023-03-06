import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { sidebarState } from "../../../../commons/store";
import { breakPoints } from "../../../../commons/styles/globalStyles";
import Logo from "../../logo";

const Header = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useRecoilState(sidebarState);
  const onOpenMenu = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      {router.asPath !== "/" && <HeaderDiv></HeaderDiv>}
      <Wrapper>
        <HeaderBox>
          <Logo />
          <Menu>
            <MenuButton onClick={onOpenMenu}>
              <span
                className={`bar f ${isOpen ? "isClicked" : ""} ${
                  router.asPath === "/" ? "isHome" : ""
                }`}
              ></span>
              <span
                className={`bar f ${isOpen ? "isClicked" : ""} ${
                  router.asPath === "/" ? "isHome" : ""
                }`}
              ></span>
              <span
                className={`bar f ${isOpen ? "isClicked" : ""} ${
                  router.asPath === "/" ? "isHome" : ""
                }`}
              ></span>
            </MenuButton>
          </Menu>
        </HeaderBox>
      </Wrapper>
    </>
  );
};

export default Header;

export const HeaderDiv = styled.div`
  width: 100%;
  height: 100px;
  @media ${breakPoints.mobile} {
    height: 50px;
  }
`;

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;
  @media ${breakPoints.mobile} {
    height: 50px;
  }
  background-color: transparent;
`;

export const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Menu = styled.div`
  position: relative;
  top: 0;
  width: 80px;
  height: 100%;
  padding: 1em;
  padding-right: 50px;
  @media ${breakPoints.mobile} {
    padding-right: 0px;
    width: 70px;
  }
  z-index: 3;
`;

export const MenuButton = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;

  .bar {
    position: relative;
    display: block;
    width: 30px;
    height: 5px;
    background: black;
    border-radius: 5px;
    transition: 0.3s;
  }

  .bar.isClicked {
    background: white;
  }

  .bar:nth-of-type(1).isClicked {
    transform: translateY(10px) rotate(45deg) scaleX(1.2);
  }

  .bar:nth-of-type(2).isClicked {
    transform: scale(0);
  }

  .bar:nth-of-type(3).isClicked {
    transform: translateY(-10px) rotate(-45deg) scaleX(1.2);
  }

  .bar.isHome {
    background-color: white;
  }
`;
