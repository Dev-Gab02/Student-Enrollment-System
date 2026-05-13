import { LogOut } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard } from 'lucide-react'

export default function AdminSidebar() {
  const location = useLocation();

  const menu = [
    {"title": "Dashboard", "icon": <LayoutDashboard size={22}/>, "to": "/admin"}
  ]

  return(
    <main className="bg-gray-900 min-h-screen w-75 flex flex-col justify-between">
      <div>
        <div>
          <h1 className="text-xl text-white font-semibold px-4 py-6">Admin Portal</h1>
        </div>
        <div className="border-b border-gray-700"></div>
        <div className='mt-5 px-4 flex flex-col gap-3'>
          { menu.map((m) => 
          {
            const isActive = location.pathname === m.to;
            return(
              <Link to={m.to} key={m.title} className={`text-white rounded-xl flex items-center gap-2 px-4 py-3  ${
                isActive 
                ? 'bg-blue-600' 
                : "hover:bg-gray-800"
                }`}
              >
                <div>{m.icon}</div>
                <span>{m.title}</span>
              </Link>
            ) 
          })}
        </div>
      </div>
      <div>
        <div className="border-t border-gray-700"></div>
        <Link to={'/'} className='text-white flex items-center gap-2 px-8 py-6 hover:bg-gray-800'>
          <LogOut />
          <span>Logout</span>
        </Link>
      </div>
    </main>
  )
}