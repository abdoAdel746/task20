import React from "react";
import { Box, Heading,Text } from "@chakra-ui/react";

export const Header = () => {
  return (
    <>
      <Box paddingLeft={"5rem"} paddingTop={"5rem"} w={"50%"}>
        <Heading textTransform={"capitalize"} as={"h2"} marginBottom={"1rem"}>
          react router task
        </Heading>
        <Text >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere ducimus perspiciatis aperiam, cum minima repellendus ipsa, doloremque, aut impedit totam iure sunt omnis nemo cupiditate unde. Ducimus soluta maiores vitae officia optio! Deleniti possimus at blanditiis libero doloribus excepturi quia voluptatibus distinctio, sunt eum voluptate itaque, architecto maxime iure eius!
        </Text>
      </Box>
    </>
  );
};
