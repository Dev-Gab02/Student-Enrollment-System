import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService";

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
    <div>

      <h1>Admin Login</h1>

      <form
      onSubmit={handleSubmit}>

        <input
          type="text"
          name="student_id"
          placeholder="Admin ID"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <button type="submit">
          Login
        </button>

      </form>

    </div>
  );
}