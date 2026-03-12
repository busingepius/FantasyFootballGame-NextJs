import React, { useState } from 'react';
import Link from 'next/link';
import { FaUsers, FaCalendarAlt, FaChartLine, FaShieldAlt } from 'react-icons/fa';
import { CustomCardContainer } from '@/components/Cards/CustomCardContainer';

const AdminDashboard = () => {
  const [stats] = useState({
    totalUsers: 1450,
    activeTeams: 1300,
    currentGameweek: 5,
    systemStatus: 'Online',
  });

  return (
    <div className="space-y-6 p-12 bg-gray-50 min-h-screen">
      <div className="flex items-center gap-4 mb-8">
        <FaShieldAlt className="text-4xl text-blue-600" />
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Admin Control Panel</h1>
          <p className="text-gray-500">Manage gameweeks, users, and platform settings.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 font-semibold uppercase">Total Users</p>
              <h2 className="text-3xl font-bold text-gray-800">{stats.totalUsers}</h2>
            </div>
            <FaUsers className="text-4xl text-blue-200" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 font-semibold uppercase">Active Teams</p>
              <h2 className="text-3xl font-bold text-gray-800">{stats.activeTeams}</h2>
            </div>
            <FaChartLine className="text-4xl text-green-200" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 font-semibold uppercase">Current GW</p>
              <h2 className="text-3xl font-bold text-gray-800">GW {stats.currentGameweek}</h2>
            </div>
            <FaCalendarAlt className="text-4xl text-purple-200" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-indigo-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 font-semibold uppercase">System</p>
              <h2 className="text-2xl font-bold text-indigo-600">{stats.systemStatus}</h2>
            </div>
            <FaShieldAlt className="text-4xl text-indigo-200" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <CustomCardContainer title="Quick Actions">
          <div className="grid grid-cols-2 gap-4 p-4">
            <button className="bg-blue-600 text-white p-4 rounded-lg shadow hover:bg-blue-700 transition font-semibold">
              Advance Gameweek
            </button>
            <button className="bg-green-600 text-white p-4 rounded-lg shadow hover:bg-green-700 transition font-semibold">
              Trigger Points Calculation
            </button>
            <button className="bg-purple-600 text-white p-4 rounded-lg shadow hover:bg-purple-700 transition font-semibold">
              Update Player Prices
            </button>
            <button className="bg-red-600 text-white p-4 rounded-lg shadow hover:bg-red-700 transition font-semibold">
              Sync Real-World Stats
            </button>
          </div>
        </CustomCardContainer>

        <CustomCardContainer title="Recent Activity Logs">
          <ul className="divide-y divide-gray-200 p-4">
            <li className="py-3 flex justify-between">
              <span className="text-gray-700">Gameweek 4 calculations completed</span>
              <span className="text-sm text-gray-400">2 hours ago</span>
            </li>
            <li className="py-3 flex justify-between">
              <span className="text-gray-700">User 'JohnDoe' created team 'FC Barcelona'</span>
              <span className="text-sm text-gray-400">5 hours ago</span>
            </li>
            <li className="py-3 flex justify-between">
              <span className="text-gray-700">Admin triggered Live Scoreboard sync</span>
              <span className="text-sm text-gray-400">1 day ago</span>
            </li>
          </ul>
        </CustomCardContainer>
      </div>
    </div>
  );
};

export default AdminDashboard;
