import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
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
];

export const employeeSlice = createSlice({
  name: "employee",
  initialState: initialState,
  reducers: {
    fetchEmployeesStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchEmployeesSuccess: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.employees = action.payload;
    },
    fetchEmployeesFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    addEmployee:{
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(firstName, lastName, age, gender, height){
        return{
            payload: {
                id: nanoid,
                firstName,
                lastName,
                age,
                gender,
                height
            }
        }
      }
    },
    deleteEmployee: (state, action) => {
      state.employees = state.employees.filter(
        (employee) => employee.id !== action.payload
      );
    },
    updateEmployee: (state, action) => {
      const { id, ...updatedFields } = action.payload;
      const index = state.employees.findIndex((employee) => employee.id === id);
      state.employees[index] = { ...state.employees[index], ...updatedFields };
    },
  },
});

export const {
  fetchEmployeesStart,
  fetchEmployeesSuccess,
  fetchEmployeesFailure,
  addEmployee,
  deleteEmployee,
  updateEmployee,
} = employeeSlice.actions;

export const selectAllEmployees = (state) => state.employees;

export default employeeSlice.reducer;
