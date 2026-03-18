import { Platform } from "@/hooks/useGames";
import usePlatforms from "@/hooks/usePlatFortms";
import { HStack, Menu, Text } from "@chakra-ui/react";
import { Button, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { Box } from "@chakra-ui/react";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}
const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, errorMsg } = usePlatforms();
  if (errorMsg) return null;
  return (
    <Box ml="10px">
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button variant="outline">
            <HStack>
              <Text>{selectedPlatform?.name || "Platforms"}</Text>
              <BsChevronDown />
            </HStack>
          </Button>
        </Menu.Trigger>

        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              {data.map((platforms) => (
                <Menu.Item
                  key={platforms.id}
                  onClick={() => onSelectPlatform(platforms)}
                  value={platforms.name}
                >
                  {platforms.name}
                </Menu.Item>
              ))}
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </Box>
  );
};

export default PlatformSelector;
