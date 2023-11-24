import React, { useState, useEffect } from "react";

import axios from "axios";
import { useParams } from "react-router-dom";
import { NavLink as Routerlink } from "react-router-dom";
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Button,
  ButtonGroup,
  Image,
  Stack,
  Heading,
  Text,
} from "@chakra-ui/react";

export const SingleProduct = () => {
  const [product, Setproduct] = useState({});
  const { id } = useParams();
  const domain = "http://localhost:5173";
  const apiFile = `data.json`;
  async function getProduct() {
    const { data } = await axios.get(`${domain}/${apiFile}`);
    const data1 = data.find((d) => d.id == id);

    if (data1) {
      Setproduct(data1);
    }
  }

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <>
      <Card maxW="sm">
        <CardBody>
          <Image
            src={"../" + product.img_src}
            alt={product.name}
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{product.name}</Heading>
            <Text>{product.description}</Text>
            <Text color="blue.600" fontSize="2xl">
              ${product.price}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
              Buy now
            </Button>
            <Button variant="ghost" colorScheme="blue">
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  );
};
