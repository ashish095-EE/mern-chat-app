import jwt from 'jsonwebtoken';
import User from '../models/userModels.js';

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt; // Token from cookies, ensure it's there

        // Check if token exists
        if (!token) {
            return res.status(401).json({ error: "Not authorized, token required" });
        }

        let decoded;
        try {
            decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token
        } catch (error) {
            return res.status(401).json({ error: "Not authorized, token invalid" });
        }

        // If decoding fails
        if (!decoded) {
            return res.status(401).json({ error: "Not authorized, token invalid" });
        }

        // Find user from decoded token's userId
        const user = await User.findById(decoded.userId).select("-password");

        if (!user) {
            return res.status(404).json({ error: "Not authorized, user not found" });
        }

        req.user = user; // Attach the user object to the request for further use
        next(); // Move on to the next middleware or route handler
    } catch (error) {
        console.error("Error in protectRoute middleware:", error); // Log the error for debugging
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export default protectRoute;
