import React from 'react';
import { Box } from 'rebass';

const BeautifulJHeading = ({ color, text }) => {
  const headingStyle = {
    fontFamily: 'Beautiful J',
    color: color
  };

  return (
    <Box as="h1" sx={headingStyle}>
      {text}
    </Box>
  );
};

export default BeautifulJHeading;

