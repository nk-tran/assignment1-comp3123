const User = require('../../models/User'); // Adjust the path according to your structure

// /api/v1/user/login
const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid email or password." });
        }

        // Compare the password
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid email or password." });
        }



        res.status(200).json({ message: "Login successful." });
    } catch (err) {
        console.error("Error logging in:", err);
        res.status(500).json({ message: "Error logging in", error: err.message || err });
    }
};

module.exports = login;