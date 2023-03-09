import styled from "@emotion/styled";
import { IBoards } from "../../../../commons/types/generated/types";
import { motion } from "framer-motion";

interface IListItemProps {
  board?: IBoards;
  onClickListItem: (id: string) => () => void;
}

const ListItem = ({ board, onClickListItem }: IListItemProps) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClickListItem(board?.id ?? "")}
      style={{ cursor: "pointer" }}
    >
      <Wrapper>
        <ImageBox>
          <Image
            src={`https://storage.googleapis.com/busker-storage/${String(
              board?.boardImageURL[0]?.url
            )}`}
          />
        </ImageBox>
        <ContentBox>
          <div>
            <span
              style={{
                fontSize: "1.4rem",
                fontWeight: "600",
                color: "#9900ff",
              }}
            >
              {board?.artist?.active_name}
            </span>
          </div>
          <ItemInfo>
            장소{" "}
            <span
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {board?.boardAddress.address}
            </span>
          </ItemInfo>
          <ItemInfo>
            장르 <span>{board?.category?.name}</span>
          </ItemInfo>
        </ContentBox>
      </Wrapper>
    </motion.div>
  );
};

export default ListItem;

const ItemInfo = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
`;

const Wrapper = styled.div`
  max-width: 355px;
  width: 100%;
  aspect-ratio: 1 / 1.2;
  margin: 0 auto;
  transition: filter 0.3s ease-in-out;
  :hover {
    filter: brightness(90%);
  }
`;

const ImageBox = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  background-color: #ddd;
  border-radius: 15px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const ContentBox = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > span {
    font-size: 1.4rem;
  }
`;
