import React from "react";
import { Button } from "rebass";

function ButtonComponent({ text, color }) {
  return (
    <div>
      <Button
        variant="primary"
        sx={{
          marginRight: "5px",
          marginLeft: "5px",
          backgroundColor: color,
          ":hover": {
            backgroundColor: "theme.colors.primary",
          },
        }}
      >
        {text}
      </Button>
    </div>
  );
}

export default ButtonComponent;
