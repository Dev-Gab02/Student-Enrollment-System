import { useState } from "react";
import { enroll } from "../services/enrollmentService";
import { Link, useNavigate } from "react-router-dom";

export default function EForm() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    semester: "",
    contact_number: "",
    address: "",
    selected_subjects: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
      e.target.value
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    enroll(formData)
      .then((res) => {
        alert(
          "Enrollment submitted!"
        );
        navigate('/student')
      }).catch(err => console.log(err))
  }

  return(
    <main className="bg-white p-10 w-full flex justify-center ">
      <div>
        <div className="items-start text-start">
          <h1 className="text-3xl font-semibold text-gray-900">Student Enrollment Form</h1>
          <p className="text-gray-600 mt-1">Complete the form below to submit your enrollment request</p>
        </div>
        <form className="border border-gray-300 p-8 mt-6 rounded-xl w-270">
          <div className="grid grid-cols-2 items-center gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-md text-gray-600">Semester</label>
              <input
                placeholder="Enter semester"
                className="border border-gray-400 px-4 py-2.5 rounded-md"
                type="text" 
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-md text-gray-600">Subjects</label>
              <input
                placeholder="Enter subject"
                className="border border-gray-400 px-4 py-2.5 rounded-md"
                type="text" 
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 items-center gap-4 mt-7">
            <div className="flex flex-col gap-1">
              <label className="text-md text-gray-600">Address</label>
              <input
                placeholder="Enter your Address "
                className="border border-gray-400 px-4 py-2.5 rounded-md"
                type="text" 
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-md text-gray-600">Contact Number</label>
              <input
                placeholder="Enter your phone number"
                className="border border-gray-400 px-4 py-2.5 rounded-md"
                type="text" 
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="border-b border-gray-300 my-10"></div>
          <div className="flex items-center gap-4">
            <Link to={'/student'} className="py-3 px-8 rounded-lg border border-gray-500">Cancel</Link>
            <button onClick={handleSubmit} className="bg-blue-600 border border-blue-600 text-white w-full py-3 rounded-lg">Submit Enrollment</button>
          </div>
        </form>
      </div>

      

      
    </main>
  )
}