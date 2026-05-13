import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../services/authService";
import { Shield, LogIn } from 'lucide-react'

export default function AdminLogin() {

  const navigate =
  useNavigate();

  const [formData,
  setFormData] =
  useState({
    student_id: "",
    password: ""
  });

  const handleChange =
  (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
      e.target.value
    });
  };

  const handleSubmit =
  async (e) => {

    e.preventDefault();

    try {

      const res =
      await login(formData);

      if (
        res.role !== "admin"
      ) {
        alert(
          "Not authorized"
        );
        return;
      }

      localStorage.setItem(
        "token",
        res.token
      );

      localStorage.setItem(
        "role",
        res.role
      );

      navigate("/admin");

    } catch {
      alert("Login failed");
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-900">
      <div>
        <div className="flex flex-col items-center gap-1 mb-8">
          <div className="p-3 rounded-full text-white bg-blue-500 mb-4">
            <Shield size={45}/>
          </div>
          <h1 className="text-3xl font-semibold text-white">Administrator Portal</h1>
          <p className="text-md text-[#c5c3c7]">Secure access for authorized personnel only</p>
        </div>

        <div className="bg-white shadow-2xl border border-gray-200 p-7 rounded-xl w-110">
          <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1.5">
              <label className="text-gray-700 text-sm">Admin ID</label>
              <input
                className="border border-gray-500 px-3 py-2 rounded-lg"
                type="text"
                name="student_id"
                placeholder="Enter your admin ID"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-1.5 mt-6">
              <label className="text-gray-700 text-sm">Password</label>
              <input
                className="border border-gray-500 px-3 py-2 rounded-lg"
                type="password"
                name="password"
                placeholder="Enter your password"
                onChange={handleChange}
              />
            </div>
            <button className="flex items-center justify-center gap-3 bg-blue-600 w-full text-white py-3 rounded-lg font-semibold mt-6" type="submit">
              <LogIn />
              <span>Login to Admin Dashboard</span>
            </button>
          </form>
          <div className="border-b border-gray-300 my-7"></div>
          <div className="text-center"> 
            <Link to={'/'} className="text-sm text-blue-700 hover:underline">Back to Student Portal</Link>
          </div>
          </div>
        </div>
    </main>
  );
}