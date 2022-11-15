import { useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import AOS from "aos";
import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";
import { useRecoilState } from "recoil";
import { sidebarState } from "../../../commons/store";
import {
  breakPoints,
  stylePrimaryColor,
} from "../../../commons/styles/globalStyles";
import { IQuery } from "../../../commons/types/generated/types";
import { FETCH_USER } from "../../units/artistsignup/ArtistSignup.Quries";
import Header from "./header";

interface ILayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchUser">>(FETCH_USER);
  const [isOpen, setIsOpen] = useRecoilState(sidebarState);

  useEffect(() => {
    AOS.init();
  }, []);

  const onClickMove = (path: string) => async () => {
    await router.push(path);
    setIsOpen(false);
  };

  return (
    <>
      <Sidebar className={isOpen ? "open" : ""}>
        {data ? <Greeting>회원님 어서오세요!</Greeting> : null}
        <MenuUl>
          <MenuLi onClick={onClickMove("/main/list")}>List</MenuLi>
          {data && <MenuLi onClick={onClickMove("/myPage")}>MyPage</MenuLi>}
          {data ? null : <MenuLi onClick={onClickMove("/login")}>Login</MenuLi>}
          {data ? null : (
            <MenuLi onClick={onClickMove("/signup")}>SignUp</MenuLi>
          )}
        </MenuUl>
      </Sidebar>
      <Header />
      {router.asPath === "/" ? (
        <div style={{ width: "100%", position: "relative" }}>{children}</div>
      ) : (
        <HomeWrapper onClick={() => setIsOpen(false)}>{children}</HomeWrapper>
      )}
    </>
  );
};

export default Layout;

export const HomeWrapper = styled.div`
  @media ${breakPoints.desktop} {
    /* background-color: green; */
    max-width: 1440px;
  }
  @media ${breakPoints.tablet} {
    /* background-color: blue; */
    /* max-width: 991px; */
  }
  @media ${breakPoints.mobile} {
    /* background-color: red; */
    /* min-width: 250px; */
  }
  width: 100%;
  margin: 0 auto;
  position: relative;
`;

export const Greeting = styled.div`
  padding-top: 40px;
  padding-left: 50px;
  font-size: 2rem;
  color: white;
  font-weight: bold;
`;

export const Sidebar = styled.div`
  position: fixed;
  top: -1px;
  right: -360px;
  min-width: 250px;
  max-width: 350px;
  width: 100%;
  height: 100vh;
  background-color: ${stylePrimaryColor};
  z-index: 98;
  transition: all 0.5s ease-in-out;
  @media ${breakPoints.mobile} {
    padding-top: 50px;
  }
  box-shadow: -1px 0px 10px 10px rgba(0, 0, 0, 0.4);

  &.open {
    right: 0;
  }

  @media ${breakPoints.mobile} {
    right: -300px;
    max-width: 280px;
  }
`;

export const MenuUl = styled.ul`
  padding-top: 100px;
  list-style: none;
`;

export const MenuLi = styled.li`
  padding: 1rem;
  color: white;
  border-bottom: 1px solid white;
  font-size: 2.5rem;
  margin-left: 10px;
  margin-bottom: 10px;
  text-indent: 3rem;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: bold;
  :hover {
    font-size: 3rem;
    letter-spacing: 3px;
  }
`;
