import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../services/authService";
import { LogIn, GraduationCap } from 'lucide-react'

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ student_id: "", password: "" });

  const handleChange = (e) => {
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

      localStorage.setItem(
        "token",
        res.token
      );

      localStorage.setItem(
        "role",
        res.role
      );

      if (res.role === "student") {
        navigate("/student");
      }

    } catch (error) {
      alert("Login failed");
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-[#dff2e4]">
      <div>
        <div className="flex flex-col items-center gap-1 mb-8">
          <div className="p-3 rounded-full text-white bg-blue-500 mb-4">
            <GraduationCap size={45}/>
          </div>
          <h1 className="text-3xl font-semibold text-gray-900">Student Enrollment System</h1>
          <p className="text-lg text-gray-600">Login using your Student ID</p>
        </div>

        <div className="bg-white shadow-2xl border border-gray-200 p-7 rounded-xl w-120">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1.5">
              <label className="text-gray-700 text-sm">Student ID</label>
              <input
                className="border border-gray-500 px-3 py-2 rounded-lg"
                type="text"
                name="student_id"
                placeholder="Enter your student ID"
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
              <span>Login</span>
            </button>
          </form>
          <div className="text-center my-7">
            <button className="text-sm text-blue-700 hover:underline">Forgot Password?</button>
          </div>

          <div className="border-b border-gray-300"></div>

          <div className="text-center mt-7">
            <h4 className="text-sm text-gray-600 mb-2">Administrator?</h4>
            <Link to={'/admin-login'} className="text-sm text-blue-700 hover:underline">Login to Admin Portal</Link>
          </div>
        </div>
      </div>
    </main>
  );
}