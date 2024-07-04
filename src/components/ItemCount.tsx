import { Tag, TagLabel } from "@chakra-ui/react";
import { CiShoppingCart } from "react-icons/ci";

export interface ItemCountProps {
  count: number;
}

const ItemCount = ({ count }: ItemCountProps) => {
  return (
    <>
      <Tag size="lg" colorScheme="gray" borderRadius="full">
        <CiShoppingCart size={30} />
        <TagLabel margin={3} fontSize={15}>
          {count}
        </TagLabel>
      </Tag>
    </>
  );
};

export default ItemCount;
