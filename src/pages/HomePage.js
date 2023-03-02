import { Heading } from "rebass";

import EmployeeTable from "../components/EmployeeTable";
import ButtonComponent from "../components/ButtonComponent";

const employees = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    age: 32,
    gender: "Male",
    height: "5'10\"",
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Doe",
    age: 28,
    gender: "Female",
    height: "5'5\"",
  },
  {
    id: 3,
    firstName: "Bob",
    lastName: "Smith",
    age: 45,
    gender: "Male",
    height: "6'0\"",
  },
  {
    id: 4,
    firstName: "John",
    lastName: "Doe",
    age: 32,
    gender: "Male",
    height: "5'10\"",
  },
  {
    id: 4,
    firstName: "Jane",
    lastName: "Doe",
    age: 28,
    gender: "Female",
    height: "5'5\"",
  },
  {
    id: 6,
    firstName: "Bob",
    lastName: "Smith",
    age: 45,
    gender: "Male",
    height: "6'0\"",
  },
  {
    id: 7,
    firstName: "John",
    lastName: "Doe",
    age: 32,
    gender: "Male",
    height: "5'10\"",
  },
  {
    id: 8,
    firstName: "Jane",
    lastName: "Doe",
    age: 28,
    gender: "Female",
    height: "5'5\"",
  },
  {
    id: 9,
    firstName: "Bob",
    lastName: "Smith",
    age: 45,
    gender: "Male",
    height: "6'0\"",
  },
  // add more employees here...
];



function HomePage() {
  return (
    <>
      <Heading
        fontSize={[5]}
        color="primary"
        sx={{
          marginTop: "10px",
        }}
      >
        Home
      </Heading>
      <EmployeeTable employees={employees} buttonComponent={ButtonComponent} />
    </>
  );
}

export default HomePage;
