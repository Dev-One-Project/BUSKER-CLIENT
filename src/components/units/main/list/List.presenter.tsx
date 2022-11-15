import { AnimatePresence } from "framer-motion";
import { IBoards } from "../../../../commons/types/generated/types";
import * as S from "./List.styles";
import ListItem from "./ListItem";
import { Select, Cascader } from "antd";
import Button01 from "../../../common/buttons/01";
import { stylePrimaryColor } from "../../../../commons/styles/globalStyles";
import { IMainListProps } from "./List.types";

const MainListUI = (props: IMainListProps) => {
  return (
    <S.Wrapper>
      <S.OptionBox>
        <S.LocationOptionBox>
          <Cascader
            options={props.locationOptions}
            onChange={props.handleChangeLocation}
            placeholder="지역 검색"
            // onClick={props.loadDistricts}
          />
        </S.LocationOptionBox>
        <S.GenreOptionBox>
          <Select
            mode="multiple"
            allowClear
            style={{ width: "100%" }}
            placeholder="장르 검색"
            onChange={props.handleChangeGenre}
            options={props.options}
          />
        </S.GenreOptionBox>
      </S.OptionBox>
      <S.ListBox>
        <AnimatePresence>
          {props.filteredGenre.length || props.filteredLocation
            ? props.data?.fetchBoards
                ?.filter(
                  (board: IBoards) =>
                    props.filteredGenre?.includes(board.category.name) ||
                    board.boardAddress.address === props.filteredLocation
                )
                .map((board: IBoards) => (
                  <ListItem
                    key={board.id}
                    board={board}
                    onClickListItem={props.onClickListItem}
                  />
                ))
            : props.data?.fetchBoards.map((board: IBoards) => (
                <ListItem
                  key={board.id}
                  board={board}
                  onClickListItem={props.onClickListItem}
                />
              ))}
        </AnimatePresence>
      </S.ListBox>
      <Button01
        style={{
          position: "fixed",
          bottom: "5px",
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
