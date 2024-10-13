const express = require('express');
const getAllEmployees = require('../controllers/employee/employees');
const getEmployeeById = require('../controllers/employee/getByID');
const createEmployee = require('../controllers/employee/createEmployee');
const updateEmployee = require('../controllers/employee/updateEmployee');
const deleteEmployee = require('../controllers/employee/deleteEmployee');

const router = express.Router();

// get all employees
router.get('/employees', getAllEmployees);

// get an employee by ID
router.get('/employees/:eid', getEmployeeById);

// create a new employee
router.post('/employees', createEmployee);

// update employee details
router.put('/employees/:eid', updateEmployee);

// delete an employee using query param
router.delete('/employees', deleteEmployee);

module.exports = router;