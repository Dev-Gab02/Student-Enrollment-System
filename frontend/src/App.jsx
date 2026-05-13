import {Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import AdminLogin from "./pages/AdminLogin";
import StudentDashboard from "./pages/StudentDashboard";
import EnrollmentForm from "./pages/EnrollmentForm";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Login />}
      />
      <Route
        path="/admin-login"
        element={
          <AdminLogin />
        }
      />
      <Route
        path="/student"
        element={
          <ProtectedRoute
          role="student">

            <StudentDashboard />

          </ProtectedRoute>
        }
      />
      <Route
        path="/enroll"
        element={
          <ProtectedRoute
          role="student">

            <EnrollmentForm />

          </ProtectedRoute>
        }
      />
      <Route
        path="/admin"
        element={
          <ProtectedRoute
          role="admin">

            <AdminDashboard />

          </ProtectedRoute>
        }
      />
    </Routes>
  );
}