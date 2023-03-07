import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { Box } from "rebass";
import { Label, Input } from "@rebass/forms";
import ButtonComponent from "../components/ButtonComponent";

import { addEmployee } from "../redux/reducers/employeeReducer";

const AddEmployeePage = ({ backgroundColor }) => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");

  // const onFirstNameChanged = (e) => setFirstName(e.target.value);
  // const onLastNameChanged = (e) => setLastName(e.target.value);
  // const onAgeChanged = (e) => setAge(e.target.value);
  // const onGenderChanged = (e) => setGender(e.target.value);
  // const onHeightChanged = (e) => setHeight(e.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the employee data, e.g. submit to server
  };

  const addEmployeeClicked = () => {
    if (firstName && lastName && age && gender && height) {
      dispatch(addEmployee(firstName, lastName, age, gender, height));
      setFirstName("");
      setLastName("");
      setAge("");
      setGender("");
      setHeight("");
    }
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
          text="Add employee"
          color="green"
          onClick={addEmployeeClicked()}
        >
          Add Employee
        </ButtonComponent>
      </form>
    </Box>
  );
};

export default AddEmployeePage;
