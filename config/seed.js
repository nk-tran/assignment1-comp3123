const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Employee = require('../models/Employee');
const User = require('../models/User');

dotenv.config();

const employees = [
    {
        employee_id: "64c9e5a3d9f3c1a5c9b4e8a2",
        first_name: "Jane",
        last_name: "Doe",
        email: "jane.doe@example.com",
        position: "Software Engineer",
        salary: 90000,
        date_of_joining: new Date("2023-08-01T00:00:00.000Z"),
        department: "Engineering"
    },
    {
        employee_id: "64c9e5a3d9f3c1a5c9b4e8a3",
        first_name: "John",
        last_name: "Smith",
        email: "john.smith@example.com",
        position: "Product Manager",
        salary: 110000,
        date_of_joining: new Date("2023-07-15T00:00:00.000Z"),
        department: "Product"
    }
];

const users = [
    {
        username: "johndoe",
        email: "johndoe@example.com",
        password: "password123",
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        username: "janedoe",
        email: "janedoe@example.com",
        password: "password123",
        created_at: new Date(),
        updated_at: new Date()
    }
];

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected successfully.');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

const seedDB = async () => {
    await connectDB();

    try {
        await Employee.insertMany(employees);
        console.log('Employees seeded successfully.');

    } catch (error) {
        console.error('Error seeding employees:', error);
    } finally {
        await mongoose.connection.close();
    }
};

// Run the seed function
module.exports = seedDB;
