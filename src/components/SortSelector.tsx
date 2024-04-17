import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By : relevance
      </MenuButton>
      <MenuList>
        <MenuItem>Relevance</MenuItem>
        <MenuItem>DAte addded</MenuItem>
        <MenuItem>name</MenuItem>
        <MenuItem>release date</MenuItem>
        <MenuItem>popularity</MenuItem>
        <MenuItem>average rating</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
