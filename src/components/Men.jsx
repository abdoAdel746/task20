import React, { useState } from "react";
import { GridItem, Grid, Image, Box } from "@chakra-ui/react";
import axios from "axios";
import { useEffect } from "react";
import { NavLink as Routerlink } from "react-router-dom";
import { useParams } from "react-router-dom";

export const Men = () => {
  const domain = "http://localhost:5173";
  const apiFile = "data.json";
  const [product, Setproduct] = useState([]);

  async function getProduct() {
    const { data } = await axios.get(`${domain}/${apiFile}`);
    console.log(data);

    Setproduct(data);
  }

  useEffect(() => {
    getProduct();
  }, []);
console.log(useParams());
  return (
    <Grid
      templateColumns="repeat(3, 1fr)"
      gap={"1rem"}
      rowGap={"3rem"}
      w="100%"
      justifyContent={"center"}
    >
      {product.map((item) =>
        item.category == "men" ? (
          <GridItem
            key={item.id}
            w="100%"
            bg=""
            pos={"relative"}
            borderRadius={".2rem"}
            textDecoration={"none"}
            as={Routerlink}
            to={`/single_product/${item.id}`}
          >
            <Image src={item.img_src} w={"100%"} />
            <Box
              pos={"absolute"}
              textTransform={"capitalize"}
              right={"0"}
              background={"#7600dc"}
              color={"white"}
              p={".5rem"}
              w={"4em"}
              textAlign={"center"}
              borderRadius={".3rem"}
              cursor={"pointer"}
              _hover={{
                background: "black",
              }}
            >
              Men
            </Box>
          </GridItem>
        ) : (
          ""
        )
      )}
    </Grid>
  );
};
