import React from "react";
import { Header } from "../Header";
import { Outlet } from "react-router-dom";
import { ListItem } from "../ListItem";
import { Flex } from "@chakra-ui/react";

export const Layout = () => {
  return (
    <div>
      <Header />
      <Flex>
        <Flex m={"4rem 8rem 0 4rem"}>
          <ListItem />
        </Flex>
        <Flex m={"4rem 8rem 4em 4rem"}>
          <Outlet />
        </Flex>
      </Flex>
    </div>
  );
};
