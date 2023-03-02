import React from "react";
import { Box, Card, Image, Heading, Text } from "rebass";

function CardComponent ({ image, title, description }){
  <Box width={256}>
    <Card
      sx={{
        p: 1,
        borderRadius: 2,
        boxShadow: "0 0 16px rgba(0, 0, 0, .25)",
      }}
    >
      <Image src={image} />
      <Box px={2}>
        <Heading as="h3">{title}</Heading>
        <Text fontSize={0}>{description}</Text>
      </Box>
    </Card>
  </Box>
}

export default CardComponent;
