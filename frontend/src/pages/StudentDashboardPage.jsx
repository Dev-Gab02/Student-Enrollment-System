import Sidebar from "../components/Sidebar";
import Dashboard from "../components/Dashboard";

export default function StudentDashboardPage() {
  

  return (
    <main className="flex">
      <Sidebar/>
      <Dashboard/>
    </main>
  );
}