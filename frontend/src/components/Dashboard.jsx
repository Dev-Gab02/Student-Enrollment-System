import { FileText, CircleAlert, User } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { selfInfo } from '../services/enrollmentService';

export default function Dashboard() {
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);

  function fetchStudent() {
    setLoading(true);
    selfInfo()
      .then((res) => {
        setStudent(res.data);
      })
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  }
  
  useEffect(() => {
    fetchStudent()
  }, [])

  // In render:
  if (loading) return <div>Loading...</div>;
  if (!student) return <div>No student data</div>;

  

  const info = [
    {"icon": <FileText size={33}/>, "name": "View Enrollment", "desc": "Check your enrollment details"},
    {"icon": <User size={33}/>, "name": "Update Profile", "desc": "Manage your information"},
    {"icon": <FileText size={33}/>, "name": "Documents", "desc": "View uploaded documents"},
  ]



  return(
    <main className="bg-white p-8 w-full">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-semibold text-gray-900">Welcome back, {student.full_name}!</h1>
        <p className="text-gray-600">Here's your enrollment status and information</p>     
      </div>
      
      <div className="mt-8 flex gap-4 items-start">
        <div className="w-full border border-blue-300 p-6 rounded-xl flex gap-4 shadow-lg">
          <div>
            <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
              <CircleAlert size={30}/>
            </div>
          </div>
          <div>
            <h1 className="text-xl font-semibold text-gray-900 ">Not Enrolled?</h1>
            <p className="text-md text-gray-600">You haven't submitted an enrollment request yet?</p>
            <Link to={'/enroll'}>
              <button className="px-6 py-2 rounded-lg bg-blue-600 text-white mt-4">Start Enrollment</button>
            </Link>
          </div>
        </div>

        <div className="border border-gray-300 p-6 rounded-xl shadow-lg w-150">
          <h1 className="text-lg font-semibold">Profile Summary</h1>
          <div className="mt-5">
            <label className="text-gray-600 text-sm">Student ID</label>
            <p>{student.student_id}</p>
          </div>
          <div className="mt-3">
            <label className="text-gray-600 text-sm">Course</label>
            <p>{student.course}</p>
          </div>
          <div className="mt-3">
            <label className="text-gray-600 text-sm">Year Level</label>
            <p>{student.year_level}</p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h1 className="text-xl font-semibold">Quick Actions</h1>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {info.map((i) => {
            return(
              <div key={i.name} className="p-6 border hover:border-blue-500 border-gray-300 rounded-xl">
                <div className="text-blue-600 mb-4">
                  {i.icon}
                </div>
                <h3 className="font-semibold text-gray-900">{i.name}</h3>
                <p className="text-gray-600">{i.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}