import { Platform } from "@/hooks/useGames";
import usePlatforms from "@/hooks/usePlatFortms";
import { HStack, Menu, Text, Portal, Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, errorMsg } = usePlatforms();
  if (errorMsg) return null;

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button
          variant="outline"
          bg="dropdown.bg"
          borderColor="dropdown.border"
          color="text.muted"
          _hover={{ bg: "dropdown.hover" }}
        >
          <HStack>
            <Text>{selectedPlatform?.name || "Platforms"}</Text>
            <BsChevronDown />
          </HStack>
        </Button>
      </Menu.Trigger>

      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {data.map((platform) => (
              <Menu.Item
                key={platform.id}
                value={String(platform.id)}
                onClick={() => onSelectPlatform(platform)}
              >
                <Text>{platform.name}</Text>
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default PlatformSelector;
