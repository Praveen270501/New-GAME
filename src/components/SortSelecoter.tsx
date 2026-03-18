import React from "react";
import { Platform } from "@/hooks/useGames";
import usePlatforms from "@/hooks/usePlatFortms";
import { HStack, Menu, MenuItem, Text } from "@chakra-ui/react";
import { Button, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { Box } from "@chakra-ui/react";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

const SortSelecoter = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOrders = [
    { value: "", lable: "Relevance" },
    { value: "-added", lable: "Date added" },
    { value: "name", lable: "Name" },
    { value: "-released", lable: "Release date" },
    { value: "-metacritic", lable: "Popularity" },
    { value: "-rating", lable: "Average rating" },
  ];
  const currentSortSelector = sortOrders.find(
    (order) => order.value === sortOrder,
  );
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline">
          <HStack>
            <Text>Order by :{currentSortSelector?.lable || "Relevence"}</Text>
            <BsChevronDown />
          </HStack>
        </Button>
      </Menu.Trigger>

      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {sortOrders.map((order) => (
              <MenuItem
                onClick={() => onSelectSortOrder(order.value)}
                key={order.value}
                value={order.value}
              >
                {order.lable}
              </MenuItem>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelecoter;
