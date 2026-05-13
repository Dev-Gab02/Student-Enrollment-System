import { useEffect, useState } from "react";
import API from "../api/axios";
  
export default function AdminDashboard() {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    const res = await API.get("/admin/enrollments");
    setStudents(res.data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const approve = async (id) => {
    await API.patch(
      `/admin/enrollment/${id}`,
      {
        status:
        "Approved",
        admin_remark:
        "Approved"
      }
    );

    fetchStudents();
  };

  

  return (
    <div>

      <h1>
        Admin Dashboard
      </h1>

      <table border="1">

        <thead>
          <tr>
            <th>Name</th>
            <th>Course</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {students.map(
          (student) => (

            <tr
            key={
            student.enrollment_id
            }>

              <td>
                {
                student.full_name
                }
              </td>

              <td>
                {
                student.course
                }
              </td>

              <td>
                {
                student.status
                }
              </td>

              <td>

                <button
                onClick={() =>
                  approve(
                    student
                    .enrollment_id
                  )
                }>

                  Approve

                </button>

              </td>

            </tr>
          ))}

        </tbody>
      </table>

    </div>
  );
}