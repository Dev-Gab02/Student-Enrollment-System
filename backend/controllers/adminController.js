import { sql } from "../config/db.js";

const adminController = {
  async getAllEnrollments(req, res) {

    try {

      const result =
        await sql.query`

        SELECT
          e.enrollment_id,
          u.full_name,
          u.student_id,
          u.course,
          u.year_level,
          e.semester,
          e.status,
          e.created_at

        FROM enrollments e

        JOIN users u
        ON e.student_id =
        u.student_id
      `;

      res.json(result.recordset);

    } catch (error) {
      res.status(500).json(error);
    }
  },

  async updateEnrollmentStatus(req, res) {

    try {

      const { id } = req.params;

      const {
        status,
        admin_remark
      } = req.body;

      await sql.query`

        UPDATE enrollments

        SET
        status =
        ${status},

        admin_remark =
        ${admin_remark}

        WHERE enrollment_id =
        ${id}
      `;

      res.json({
        message:
        "Enrollment updated"
      });

    } catch (error) {
      res.status(500).json(error);
    }
  },

  async deleteEnrollment(req, res) {

    try {

      const { id } =
      req.params;

      const result =
      await sql.query`

        DELETE
        FROM enrollments

        WHERE enrollment_id =
        ${id}
      `;

      res.json({
        message:
        "Enrollment deleted successfully"
      });

    } catch (error) {

      res.status(500).json({
        message:
        "Failed to delete enrollment",
        error
      });

    }
  }
}

export default adminController