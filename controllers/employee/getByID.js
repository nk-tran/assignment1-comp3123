const mongoose = require('mongoose');
const Employee = require('../../models/Employee');

// /api/v1/emp/employees/:eid
const getEmployeeById = async (req, res) => {
    try {
        const { eid } = req.params;

        // Find employee by ID
        const employee = await Employee.findById(eid);

        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }

        res.status(200).json(employee);
    } catch (error) {
        console.error('Error fetching employee by ID:', error);
        res.status(500).json({ message: 'Error fetching employee', error });
    }
};

module.exports = getEmployeeById;