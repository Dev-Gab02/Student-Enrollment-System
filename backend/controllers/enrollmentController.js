import { sql } from "../config/db.js";

const enrollmentController = {
  async createEnrollment (req, res) {
    try {

      const {
        semester,
        contact_number,
        address,
        selected_subjects
      } = req.body;

      const student_id =
        req.user.student_id;

      await sql.query`

        INSERT INTO enrollments
        (
          student_id,
          semester,
          contact_number,
          address,
          selected_subjects
        )

        VALUES
        (
          ${student_id},
          ${semester},
          ${contact_number},
          ${address},
          ${selected_subjects}
        )
      `;

      res.status(201).json({
        message:
          "Enrollment submitted successfully"
      });

    } catch (error) {
      res.status(500).json(error);
    }
  },

  async getMyEnrollment(req, res) {

    try {

      const student_id =
        req.user.student_id;

      const result =
        await sql.query`

        SELECT *
        FROM enrollments

        WHERE student_id =
        ${student_id}

        ORDER BY created_at DESC
      `;

      res.json(result.recordset);

    } catch (error) {
      res.status(500).json(error);
    }
  },

  async getEnrollmentById(req, res) {
    try {

      const student_id =
      req.user.student_id;

      const result =
      await sql.query`

        SELECT
          student_id,
          full_name,
          email,
          course,
          year_level,
          created_at

        FROM users

        WHERE student_id =
        ${student_id}
      `;

      if (
        result.recordset.length === 0
      ) {
        return res.status(404).json({
          message:
          "Student not found"
        });
      }

      res.json(
        result.recordset[0]
      );

    } catch (error) {

      res.status(500).json({
        message:
        "Failed to get student profile",
        error
      });
    }
  }
}

export default enrollmentController