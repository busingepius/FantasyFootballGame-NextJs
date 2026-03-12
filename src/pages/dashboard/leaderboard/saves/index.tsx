'use client';

import React from 'react';

const GenericLeaderboard = ({ title }: { title: string }) => {
  return (
    <div className="space-y-6 p-12">
      <h1 className="text-3xl font-bold text-main">{title} Leaderboard</h1>
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
        <p className="text-gray-600">This is the detailed leaderboard for {title}. Data will be displayed here soon.</p>
      </div>
    </div>
  );
};

export default function SavesLeaderboard() {
  return <GenericLeaderboard title="Saves" />;
}

// Require authentication for this page
(SavesLeaderboard as any).requiresAuth = true;
