import {Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import EnrollmentPage from "./pages/EnrollmentPage";
import StudentDashboardPage from "./pages/StudentDashboardPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/admin-login" element={<AdminLogin />}/>
      <Route path="/student" element={
        <ProtectedRoute role="student">
          <StudentDashboardPage />
        </ProtectedRoute>
      }/>

      <Route path="/enroll" element={
        <ProtectedRoute role="student">
          <EnrollmentPage/>
        </ProtectedRoute>
      }/>
      <Route path="/admin" element={
        <ProtectedRoute role="admin">
          <AdminDashboard />
        </ProtectedRoute>
      }/>
    </Routes>
  );
}