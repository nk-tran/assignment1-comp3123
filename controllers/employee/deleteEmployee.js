const Employee = require('../../models/Employee');

// /api/v1/emp/employees?eid=x
const deleteEmployee = async (req, res) => {
    const { eid } = req.query;

    try {
        const employee = await Employee.findByIdAndDelete(eid);

        if (!employee) {
            return res.status(404).json({ message: "Employee not found" });
        }

        res.status(200).json({ message: "Employee deleted successfully." });
    } catch (err) {
        res.status(500).json({ message: "Error deleting employee", error: err });
    }
};

module.exports = deleteEmployee;