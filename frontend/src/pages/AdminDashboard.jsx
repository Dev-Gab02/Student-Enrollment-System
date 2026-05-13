import { useEffect, useState } from "react";
import API from "../api/axios";
import AdminSidebar from "../components/AdminSidebar";
import { approve, Delete } from "../services/adminService";
import { Check, X } from 'lucide-react'

export default function AdminDashboard() {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    const res = await API.get("/admin/enrollments");
    setStudents(res.data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);


  function handleApprove(id) {
    approve(id)
      .then((res) => {
        alert("Approve successfully");
        fetchStudents();
      }).catch(err => console.log(err))
  }

  function handleDeleteEnrollment(id) {
    Delete(id)
      .then((res) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this enrollment?");
        if (!confirmDelete) return;
        fetchStudents();
      }).catch(err => console.log(err))
  }

  return (
    <main className="flex">
      <AdminSidebar/>
      <div className="p-8 bg-white w-full shadow-xl">
        <div className="flex flex-col gap-2 mb-8">
          <h1 className="text-3xl font-semibold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600">Manage student enrollment requests</p>     
        </div>

        <div className="grid grid-cols-5 bg-white p-5 rounded-tl-xl rounded-tr-xl border border-gray-300 font-semibold">
          <p>Name</p>
          <p>Student ID</p>
          <p>Course</p>
          <p>Status</p>
          <p>Action</p>
        </div>

        <div className="rounded-bl-xl rounded-br-xl p-5 border border-t-0 border-gray-300">
          {students.length === 0 ? (
            <div>No student enrollment</div>
          ) : (
            students.map((student) => (
              <div key={student.enrollment_id} className="grid grid-cols-5 py-3 text-gray-600">
                <p>{student.full_name}</p>
                <p>{student.student_id}</p>
                <p>{student.course}</p>
                <div className="flex">
                  <p className={`px-4 py-0.5 rounded-xl text-sm ${
                    student.status === "Approved"
                    ? "bg-green-100 text-green-500"
                    : "bg-amber-100 text-amber-500"
                  }`}>{student.status}</p>
                </div>
                <div className="flex gap-6">
                  <button onClick={() => handleApprove(student.enrollment_id)} className="text-green-600"><Check size={25}/></button>
                  <button onClick={() => handleDeleteEnrollment(student.enrollment_id)} className="text-red-600"><X size={25}/></button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
}