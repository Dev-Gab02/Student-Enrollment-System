import { Link } from "react-router-dom";

export default function StudentDashboard() {
  return (
    <div>

      <h1>
        Student Dashboard
      </h1>

      <Link to="/enroll">
        Enroll Now
      </Link>

    </div>
  );
}