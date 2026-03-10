import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import Logo from "../assets/react.svg";

const NavBar = () => {
  return (
    <HStack>
      <Image src={Logo}></Image>
      <Text> Navbar</Text>
    </HStack>
  );
};

export default NavBar;
