"use client";

import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";

function CardItem({ main, value, isCorrect }) {
  return (
    <Card>
      <CardHeader>{value}</CardHeader>
      <CardBody>{main}</CardBody>
      <CardFooter>{isCorrect ? "Correct" : "Incorrect"}</CardFooter>
    </Card>
  );
}

export default CardItem;
