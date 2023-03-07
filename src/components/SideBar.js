import React from "react";
import { Flex, Box, Image, Text } from "rebass";

import { Link as RebassLink } from "rebass";
import { Link as RouterLink } from "react-router-dom";

const SideBar = ({
  backgroundColor,
  color,
  hoverColor,
  links,
  logo,
  title,
  icons,
}) => {
  return (
    <Flex
      sx={{
        height: "100vh",
        flexDirection: "column",
        justifyContent: "start",
        // position: "fixed",
        top: 0,
        left: 0,
        backgroundColor: backgroundColor,
        color: color,
        width: "250px",
        boxShadow: "2px 0px 5px rgba(0, 0, 0, 0.5)",
        overflow: "hidden",
        border: "2px red solid",
      }}
    >
      <Box px={3} py={4}>
        <Flex alignItems="center" justifyContent="center">
          <Image src="./images/logo.png" alt="logo" width={150} height={50} />
        </Flex>
        <Text as="h1" fontSize={[3, 4]} fontWeight="bold" my={3}>
          {title}
        </Text>
      </Box>
      <Box as="nav" mb={3}>
        {links.map((link) => (
          <div
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <RebassLink
              key={link.id}
              to={link.url}
              variant="sidebar"
              sx={{
                fontFamily: "Arial, sans-serif", // set font family to Arial
                fontSize: "16px",
                display: "block",
                fontWeight: "bold",
                marginTop: 25,
                textAlign: "center",
                px: 3,
                py: 15,
                color: color,
                textDecoration: "none",
                "&:hover": {
                  backgroundColor: hoverColor,
                  color: color,
                  // border: "2px solid orange",
                  borderRadius: "10px",
                  transform: "translateY(-10px)",
                  boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
                },
              }}
              as={RouterLink}
            >
              {link.text}
            </RebassLink>
          </div>
        ))}
      </Box>
    </Flex>
  );
};

export default SideBar;
