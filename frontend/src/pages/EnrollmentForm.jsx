import { useState } from "react";
import API from "../api/axios";

export default function EnrollmentForm() {

  const [formData,
  setFormData] =
  useState({
    semester: "",
    contact_number: "",
    address: "",
    selected_subjects: ""
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

    await API.post(
      "/enrollment/submit",
      formData
    );

    alert(
      "Enrollment submitted!"
    );
  };

  return (
    <form
    onSubmit={handleSubmit}>

      <input
        name="semester"
        placeholder="Semester"
        onChange={handleChange}
      />

      <input
        name="contact_number"
        placeholder="Contact Number"
        onChange={handleChange}
      />

      <input
        name="address"
        placeholder="Address"
        onChange={handleChange}
      />

      <input
        name="selected_subjects"
        placeholder="Subjects"
        onChange={handleChange}
      />

      <button type="submit">
        Submit
      </button>

    </form>
  );
}