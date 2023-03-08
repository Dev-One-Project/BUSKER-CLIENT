import { AnimatePresence } from "framer-motion";
import { IBoards } from "../../../../commons/types/generated/types";
import * as S from "./List.styles";
import ListItem from "./ListItem";
import { Select, Cascader } from "antd";
import Button01 from "../../../common/buttons/01";
import { stylePrimaryColor } from "../../../../commons/styles/globalStyles";
import { IMainListProps } from "./List.types";
import InfiniteScroll from "react-infinite-scroller";

const MainListUI = (props: IMainListProps) => {
  return (
    <S.Wrapper>
      <S.OptionBox>
        <S.LocationOptionBox>
          <Cascader
            options={props.locationOptions}
            onChange={props.handleChangeLocation}
            placeholder="지역 검색"
          />
        </S.LocationOptionBox>
        <S.GenreOptionBox>
          <Select
            mode="multiple"
            allowClear
            placeholder="장르 검색"
            onChange={props.handleChangeGenre}
            options={props.genreOptions}
          />
        </S.GenreOptionBox>
        <Button01 onClick={props.onClickMoveToArtRegister}>
          버스킹 등록하기
        </Button01>
      </S.OptionBox>
      <S.ListBox>
        <AnimatePresence>
          <InfiniteScroll
            pageStart={0}
            loadMore={props.loadMore}
            hasMore={true || false}
          >
            {props.data?.fetchBoardsBySearch.map((board: IBoards) => (
              <ListItem
                key={board.id}
                board={board}
                onClickListItem={props.onClickListItem}
              />
            ))}
          </InfiniteScroll>
        </AnimatePresence>
      </S.ListBox>
      <Button01
        style={{
          position: "fixed",
          bottom: "40px",
          left: "50%",
          transform: "translate(-50%,-50%)",
          zIndex: "2",
          backgroundColor: `${stylePrimaryColor}`,
          color: "white",
          boxShadow: "3px 5px 10px 3px rgba(0,0,0,0.5)",
        }}
        onClick={props.onClickToMap}
      >
        주변 버스킹 확인하기
      </Button01>
    </S.Wrapper>
  );
};

export default MainListUI;
