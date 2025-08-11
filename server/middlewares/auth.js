import jwt from 'jsonwebtoken'
 
export const authentication   = (req, res, next) => {
  let token;


  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1];

       jwt.verify(token, process.env.JWT_SECRET);
      next(); 
    } catch (error) {
      return res.status(401).json({ success: false, message: "Invalid token" });
    }
  }

  if (!token) {
    return res.status(401).json({ success: false, message: "No token provided" });
  }
};