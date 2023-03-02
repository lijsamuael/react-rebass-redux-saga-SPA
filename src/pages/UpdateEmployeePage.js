import React, { useState } from "react";
import { Box } from "rebass";
import { Label, Input } from "@rebass/forms";
import ButtonComponent from "../components/ButtonComponent";

const UpdateEmployeePage = ({ employee, onSubmit, backgroundColor }) => {
  const [firstName, setFirstName] = useState(employee.firstName);
  const [lastName, setLastName] = useState(employee.lastName);
  const [age, setAge] = useState(employee.age);
  const [gender, setGender] = useState(employee.gender);
  const [height, setHeight] = useState(employee.height);

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedEmployee = {
      id: employee.id,
      firstName,
      lastName,
      age,
      gender,
      height,
    };
    onSubmit(updatedEmployee);
  };

  return (
    <Box bg={backgroundColor} p={4} borderRadius={8}>
      <form onSubmit={handleSubmit}>
        <Box mb={3}>
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </Box>
        <Box mb={3}>
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </Box>
        <Box mb={3}>
          <Label htmlFor="age">Age</Label>
          <Input
            id="age"
            name="age"
            type="number"
            value={age}
            onChange={(event) => setAge(event.target.value)}
          />
        </Box>
        <Box mb={3}>
          <Label htmlFor="gender">Gender</Label>
          <Input
            id="gender"
            name="gender"
            value={gender}
            onChange={(event) => setGender(event.target.value)}
          />
        </Box>
        <Box mb={3}>
          <Label htmlFor="height">Height</Label>
          <Input
            id="height"
            name="height"
            type="number"
            value={height}
            onChange={(event) => setHeight(event.target.value)}
          />
        </Box>
        <ButtonComponent
          type="submit"
          text="Update Employee"
          color="orange"
        ></ButtonComponent>
      </form>
    </Box>
  );
};

export default UpdateEmployeePage;
