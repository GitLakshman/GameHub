import {
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import { BsSearch } from "react-icons/bs";
const Navbar = () => {
  return (
    <HStack p={"10px"}>
      <Image src={logo} boxSize="60px" />
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          borderRadius={20}
          variant="filled"
          placeholder="Search games ...."
        />
      </InputGroup>
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
