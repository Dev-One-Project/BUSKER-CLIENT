import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { useRecoilState } from "recoil";
import { sidebarState } from "../../../commons/store";
import {
  breakPoints,
  stylePrimaryColor,
} from "../../../commons/styles/globalStyles";
import { IMutation, IQuery } from "../../../commons/types/generated/types";
import { FETCH_USER } from "../../units/myPage/detail/MyPageDetail.queries";

import Header from "./header";

const LOGOUT = gql`
  mutation {
    logout
  }
`;

interface ILayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchUser">>(FETCH_USER);
  const [isOpen, setIsOpen] = useRecoilState(sidebarState);
  const [logout] = useMutation<Pick<IMutation, "logout">>(LOGOUT);

  const onClickMove = (path: string) => async () => {
    await router.push(path);
    setIsOpen(false);
  };

  const onClickLogout = async () => {
    try {
      await logout({
        update(cache) {
          cache.modify({
            fields: () => {},
          });
        },
      });
      Modal.success({
        content: "로그아웃 되었습니다.",
        onOk: () => {
          void router.reload();
        },
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <>
      <Sidebar className={isOpen ? "open" : ""}>
        {data ? (
          <Greeting>{data.fetchUser.nickname}님 어서오세요!</Greeting>
        ) : null}
        <MenuUl>
          <MenuLi onClick={onClickMove("/main/list")}>List</MenuLi>
          {data && <MenuLi onClick={onClickMove("/myPage")}>MyPage</MenuLi>}
          {data && <MenuLi onClick={onClickLogout}>Logout</MenuLi>}
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
  width: 100%;
  margin: 0 auto;
  position: relative;
`;

export const Greeting = styled.div`
  width: 100%;
  padding-top: 80px;
  padding-left: 20px;
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
