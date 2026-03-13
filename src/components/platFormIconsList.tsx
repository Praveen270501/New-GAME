import { Platform } from "@/hooks/useGames";
import {
  FaWindows,
  FaPlaystation,
  FaApple,
  FaAndroid,
  FaLinux,
  FaXbox,
} from "react-icons/fa";

import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  platform: Platform[];
}

const PlatFormIconsList = ({ platform }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation, // FIXED
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid,
  };

  return (
    <HStack marginTop={"10px"}>
      {platform.map((pla) => {
        const IconComponent = iconMap[pla.slug];
        if (!IconComponent) return null;

        return <Icon as={IconComponent} key={pla.id} color="gray.500" />;
      })}
    </HStack>
  );
};

export default PlatFormIconsList;
