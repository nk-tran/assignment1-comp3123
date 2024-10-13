const User = require('../../models/User'); // Adjust the path according to your structure

// /api/v1/user/signup
const signup = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ $or: [{ email }, { username }] });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists." });
        }

        // Create a new user
        const newUser = await User.create({
            username,
            email,
            password, // Password will be hashed by user model
            created_at: new Date(),
            updated_at: new Date()
        });

        res.status(201).json({ message: "User created successfully.", user_id: newUser._id });
    } catch (err) {
        res.status(500).json({ message: "Error creating user", error: err });
    }
};

module.exports = signup;