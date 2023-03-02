import React from "react";
import { ThemeProvider } from "theme-ui";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Flex, Box } from "rebass";

import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import AddEmployeePage from "./pages/AddEmployeePage";
import UpdateEmployeePage from "./pages/UpdateEmployeePage";

const theme = {
  fontSizes: [12, 14, 16, 24, 32, 48, 64],
  colors: {
    primary: "##2596be",
    secondary: "tomato",
    ltprimary: "#2596BE",
    gray: "#f6f6ff",
    ltgray: "#eeeee4",
    black: "",
    green: "#48bf21",
    red: "#bf2121",
    ltred: "#bf2121",
    yellow: "#fff200",
    ltyellow: "#f1ec6c",
    ltorange: "#e79e0b",
  },
  buttons: {
    primary: {
      color: "white",
      bg: "primary",
    },
    outline: {
      color: "primary",
      bg: "transparent",
      boxShadow: "inset 0 0 0 2px",
    },
  },
};

const links = [
  {
    id: 1,
    url: "/",
    text: "Home",
  },
  {
    id: 2,
    url: "/add",
    text: "Add Employee",
  },
];

const employee = {
  id: 1,
  firstName: "John",
  lastName: "Doe",
  age: 30,
  gender: "Male",
  height: 180,
};

const onSubmit = (updatedEmployee) => {
  // handle updated employee data
};

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Flex className="App">
          <SideBar
            backgroundColor={theme.colors.ltgray}
            color="black"
            hoverColor="orange"
            links={links}
            logo="./"
          />
          <Box
            sx={{
              flexGrow: 1,
              backgroundColor: "white",
              border: "2px blue solid",
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
            }}
          >
            <NavBar backgroundColor={theme.colors.ltgray}></NavBar>
            <Routes>
              <Route path="/" index element={<HomePage />} />
              <Route path="/add" element={<AddEmployeePage />} />
              <Route
                path="/update"
                element={
                  <UpdateEmployeePage
                    employee={employee}
                    onSubmit={onSubmit}
                    backgroundColor="#f5f5f5"
                  />
                }
              />
            </Routes>
          </Box>
        </Flex>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
