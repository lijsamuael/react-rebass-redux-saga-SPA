import React from "react";
import { Box, Flex } from "rebass";
import { Link as RebassLink } from "rebass";
import { Link as RouterLink } from "react-router-dom";

const EmployeeTable = ({ employees, buttonComponent: ButtonComponent }) => {
  return (
    <Box sx={{ overflowX: "auto" }}>
      <Box
        as="table"
        sx={{
          width: "100%",
          borderCollapse: "separate",
          borderSpacing: 0,
          "& td, & th": {
            textAlign: "left",
            py: 2,
            px: 3,
            borderBottomWidth: "1px",
            borderBottomColor: "gray.300",
            borderBottomStyle: "solid",
          },
          "& th": {
            bg: "gray.200",
            fontWeight: "bold",
            textTransform: "capitalize",
          },
          "& tr:nth-of-type(even)": {
            bg: "gray.100",
          },
          "& td:first-of-type": {
            borderTopLeftRadius: "md",
            borderBottomLeftRadius: "md",
          },
          "& td:last-of-type": {
            borderTopRightRadius: "md",
            borderBottomRightRadius: "md",
          },
          "& tr:last-of-type td": {
            borderBottomWidth: 0,
          },
          "& thead": {
            borderBottomWidth: "2px",
            borderBottomColor: "gray.400",
            borderBottomStyle: "solid",
          },
          "& tbody": {
            "& tr:hover": {
              bg: "gray.200",
            },
          },
        }}
      >
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Height</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.age}</td>
              <td>{employee.gender}</td>
              <td>{employee.height}</td>
              <td>
                <Flex>
                  {<RebassLink as={RouterLink} to="/update">
                    <ButtonComponent
                      text="Edit"
                      color="orange"
                    ></ButtonComponent>
                    </RebassLink>
                  }
                  {
                    <ButtonComponent
                      text="Delete"
                      color="red"
                    ></ButtonComponent>
                  }
                </Flex>
              </td>
            </tr>
          ))}
        </tbody>
      </Box>
    </Box>
  );
};

export default EmployeeTable;
