import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import Logo from "../assets/gaming_logo.svg";
import { ColorModeButton } from "./ui/color-mode";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={Logo}></Image>
      <ColorModeButton> </ColorModeButton>
    </HStack>
  );
};

export default NavBar;
