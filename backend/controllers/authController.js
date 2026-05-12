import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import { sql } from "../config/db.js";

const authController = {
  async login (req, res) {
    try {
      const { student_id, password } = req.body;
  
      const result = await sql.query`
        SELECT * FROM users
        WHERE student_id = ${student_id}
      `;
  
      if (result.recordset.length === 0) {
        return res.status(404).json({
          message: "User not found"
        });
      }
  
      const user = result.recordset[0];
  
      const isMatch = await bcrypt.compare(
        password,
        user.password_hash
      );
  
      if (!isMatch) {
        return res.status(401).json({
          message: "Invalid password"
        });
      }
  
      const token = jwt.sign(
        {
          id: user.id,
          role: user.role,
          student_id: user.student_id
        },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
      );
  
      res.json({
        token,
        role: user.role,
        user: {
          full_name: user.full_name,
          student_id: user.student_id
        }
      });
  
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default authController