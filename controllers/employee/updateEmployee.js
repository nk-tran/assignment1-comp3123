const Employee = require('../../models/Employee');
const mongoose = require('mongoose');

// /api/v1/emp/employees/:eid
const updateEmployee = async (req, res) => {
    try {
        const { eid } = req.params; // ID from route params

        const employee = await Employee.findByIdAndUpdate(eid, req.body, { new: true });
        if (!employee) {
            return res.status(404).json({ message: "Employee not found" });
        }

        res.status(200).json({ message: "Employee details updated successfully.", employee });
    } catch (error) {
        res.status(500).json({ message: 'Error updating employee', error });
    }
};

module.exports = updateEmployee;