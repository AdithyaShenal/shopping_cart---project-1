import { Image, HStack } from "@chakra-ui/react";
import market_logo from "../assets/market_logo.png";
import ItemCount from "./ItemCount";

interface Props {
  count: number;
}

const NavBar = ({ count }: Props) => {
  return (
    <>
      <HStack justifyContent={"space-between"} padding={5}>
        <Image boxSize={"80px"} src={market_logo} borderRadius={5} />
        <ItemCount count={count} />
      </HStack>
    </>
  );
};

export default NavBar;
