const Employee = require('../../models/Employee');

// /api/v1/emp/employees
const createEmployee = async (req, res) => {
    try {
        const newEmployee = new Employee(req.body); // Create a new employee instance
        const savedEmployee = await newEmployee.save();

        res.status(201).json({
            message: "Employee created successfully.",
            employee_id: savedEmployee._id
        });
    } catch (error) {
        res.status(500).json({ message: "Error creating employee", error });
    }
};

module.exports = createEmployee;