import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization");
  
  console.log("🔹 Token Received:", token);

  if (!token) return res.status(401).json({ message: "Access Denied! No token provided." });

  try {
    const verified = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    console.error("JWT Error:", err.message);
    res.status(400).json({ message: "Invalid token!" });
  }
};

export default authMiddleware;
