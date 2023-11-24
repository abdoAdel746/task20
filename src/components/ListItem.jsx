import React from "react";
import { NavLink as Routerlink } from "react-router-dom";
import { Button, Container, Flex } from "@chakra-ui/react";
import { Link as ChakraLink } from "@chakra-ui/react";

export const ListItem = () => {
  return (
    <>
      <Flex flexDirection={"column"} gap={"2rem"}>
        <Button
          p={".5rem"}
          w={"5rem"}
          borderRadius={".2rem"}
          style={({ isActive }) =>
            isActive
              ? {
                  color: "#fff",
                  background: "#7600dc",
                }
              : {}
          }
          textDecoration={"none"}
          as={Routerlink}
          to=""
        >
          Men
        </Button>
        <Button
          p={".5rem"}
          w={"5rem"}
          borderRadius={".2rem"}
          style={({ isActive }) =>
            isActive
              ? {
                  color: "#fff",
                  background: "#7600dc",
                }
              : {}
          }
          textDecoration={"none"}
          as={Routerlink}
          to="/women"
        >
          Women
        </Button>
        <Button
          p={".5rem"}
          w={"5rem"}
          borderRadius={".2rem"}
          style={({ isActive }) =>
            isActive
              ? {
                  color: "#fff",
                  background: "#7600dc",
                }
              : {}
          }
          textDecoration={"none"}
          as={Routerlink}
          to="/kids"
        >
          Kids
        </Button>
      </Flex>
    </>
  );
};
