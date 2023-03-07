import {
    fetchEmployeesStart,
    fetchEmployeesSuccess,
    fetchEmployeesFailure,
    addEmployee,
    deleteEmployee,
    updateEmployee
  } from "../reducers/employeeReducer";
  
  export const fetchEmployees = () => async (dispatch) => {
    dispatch(fetchEmployeesStart());
    try {
      const response = await fetch("https://example.com/api/employees");
      const data = await response.json();
      dispatch(fetchEmployeesSuccess(data));
    } catch (error) {
      dispatch(fetchEmployeesFailure(error.message));
    }
  };
  
  export const addNewEmployee = (employee) => (dispatch) => {
    dispatch(addEmployee(employee));
  };
  
  export const removeEmployee = (employeeId) => (dispatch) => {
    dispatch(deleteEmployee(employeeId));
  };
  
  export const updateExistingEmployee = (employee) => (dispatch) => {
    dispatch(updateEmployee(employee));
  };
  