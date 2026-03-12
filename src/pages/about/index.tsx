'use client';

import Layout from '@/components/layouts';
import { appConfigs } from '@/constants/configs';
import { ReactElement } from 'react';

export default function AboutPage() {
  return (
    <main className="min-h-screen text-white flex flex-col">
      <section className="flex py-16 flex-col items-center justify-center text-center px-6 bg-gradient-to-br from-secondary via-secondary to-white">
        <img
          src={appConfigs.logo}
          alt={`${appConfigs.appName} Logo`}
          className="w-32 h-32 mb-6 rounded-lg shadow-lg bg-white object-contain"
        />
        <h1 className="text-5xl font-extrabold mb-3 text-main">{appConfigs.appName ?? 'LaLiga Fantasy'}</h1>
        <h2 className="text-3xl font-bold mb-6 leading-tight text-gray-300 uppercase">About Us</h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-200">
          Welcome to <span className="font-semibold text-main">{appConfigs.appName ?? 'Fantasy Football'}</span> – the ultimate fantasy football experience for fans! Build your dream team, compete with friends, and prove your football knowledge as you manage real players and climb the leaderboards.
        </p>
      </section>

      <section className="py-12 px-4 w-full md:w-8/12 mx-auto">
        {/* Features */}
        <div className='py-4'>
          <h3 className="text-2xl font-bold mb-2 text-main">Key Features</h3>
          <ul className="list-disc list-inside text-gray-800 dark:text-gray-200 space-y-2">
            <li>Draft and manage your own fantasy squad.</li>
            <li>Real-time points based on actual player performances.</li>
            <li>Challenge friends and join public or private leagues.</li>
            <li>Weekly transfers, captain choices, and tactical decisions.</li>
            <li>Live match updates and player stats.</li>
            <li>Mobile-friendly and easy to use interface.</li>
          </ul>
        </div>

        {/* Mission */}
        <div className='py-4'>
          <h3 className="text-2xl font-bold mb-2 text-main">Our Mission</h3>
          <p className="text-gray-800 dark:text-gray-200">
            Our mission is to bring fans closer to the action by offering an engaging, competitive, and social fantasy football platform. We strive to create a community where fans can connect, compete, and celebrate their passion for global football.
          </p>
        </div>

        {/* How It Works */}
        <div className='py-4'>
          <h3 className="text-2xl font-bold mb-2 text-main">How It Works</h3>
          <ol className="list-decimal list-inside text-gray-800 dark:text-gray-200 space-y-2">
            <li>Sign up and create your account.</li>
            <li>Build your fantasy team within the budget.</li>
            <li>Join or create leagues to compete with others.</li>
            <li>Set your lineup each gameweek and make transfers.</li>
            <li>Earn points based on your players’ real-life performances.</li>
            <li>Climb the leaderboards and win prizes!</li>
          </ol>
        </div>

        {/* Team / Contact */}
        <div className='py-4'>
          <h3 className="text-2xl font-bold mb-2 text-main">Meet the Team</h3>
          <p className="text-gray-800 dark:text-gray-200 mb-2">
            We are a group of passionate football fans, developers, and designers dedicated to delivering the best fantasy football experience for supporters worldwide.
          </p>
          <p className="text-gray-800 dark:text-gray-200">
            Have questions, feedback, or partnership inquiries? Reach out to us at{' '}
            <a
              href="mailto:support@laligafantasy.com"
              className="text-main underline hover:text-main/80"
            >
              support@laligafantasy.com
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}

AboutPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout hideSidebar>{page}</Layout>;
};