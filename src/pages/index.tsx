'use client';

import HomeBasicCard from '@/components/Cards/HomeBasicCard';
import { PitchPlayerCard } from '@/components/Cards/PlayerCards';
import Layout from '@/components/layouts';
import { appConfigs } from '@/constants/configs';
import Link from 'next/link';
import { ReactElement } from 'react';
import { FaTrophy, FaUsers, FaExchangeAlt, FaStar, FaQuestionCircle, FaFutbol, FaChartBar, FaGlobe } from 'react-icons/fa';

const faqs = [
  {
    question: "Is this Fantasy Football game free to play?",
    answer: "Yes! You can play for absolutely free and compete in both public and private leagues.",
  },
  {
    question: "How exactly are points calculated?",
    answer: "Points are calculated based on real-life player performances. This includes goals, assists, clean sheets, saves, and more.",
  },
  {
    question: "Can I create private leagues with my friends?",
    answer: "Absolutely! You can create custom private leagues, invite your friends, and enjoy head-to-head competition.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen text-gray-800 bg-white flex flex-col font-sans selection:bg-main selection:text-white">
      {/* Hero Section */}
      <section className="relative w-full py-32 px-6 flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white">
        <div className="absolute inset-0 z-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1518605368461-1ee7e163b276?q=80&w=2938&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
        
        <div className="relative z-20 max-w-5xl mx-auto flex flex-col items-center">
          <div className="mb-8 inline-flex items-center justify-center p-3 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
            <FaFutbol className="text-3xl text-green-400 mr-3 animate-spin-slow" />
            <span className="text-sm font-bold tracking-widest uppercase text-green-400">The Next Generation of Fantasy Sports</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight drop-shadow-2xl">
            Build Your Ultimate <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Dream Team</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-10 font-light">
            Draft real-world superstars, make strategic transfers, and watch your team earn points live. Compete against thousands of managers worldwide.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/register" passHref>
              <button className="bg-green-500 hover:bg-green-600 text-black px-10 py-4 rounded-full text-xl font-bold transition transform hover:-translate-y-1 shadow-lg hover:shadow-green-500/50">
                Play For Free
              </button>
            </Link>
            <Link href="/how-to-play" passHref>
              <button className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-10 py-4 rounded-full text-xl font-bold transition transform hover:-translate-y-1">
                How It Works
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Ribbon */}
      <section className="bg-green-500 text-black py-8">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-green-600">
          <div>
            <h3 className="text-4xl font-black">500+</h3>
            <p className="font-semibold uppercase text-sm mt-1">Real Players</p>
          </div>
          <div>
            <h3 className="text-4xl font-black">Real-Time</h3>
            <p className="font-semibold uppercase text-sm mt-1">Live Scoring</p>
          </div>
          <div>
            <h3 className="text-4xl font-black">15</h3>
            <p className="font-semibold uppercase text-sm mt-1">Squad Size</p>
          </div>
          <div>
            <h3 className="text-4xl font-black">Global</h3>
            <p className="font-semibold uppercase text-sm mt-1">Competitions</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto py-24 px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Why Choose Our Platform?</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">We've rebuilt the fantasy football experience from the ground up, prioritizing live data, deep analytics, and seamless usability.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow border border-gray-100 group">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
              <FaChartBar />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">Advanced Analytics</h3>
            <p className="text-gray-600 leading-relaxed">
              Gain the edge with xG, xA, and deep player statistics powered by real-time API integrations. Never draft blind again.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow border border-gray-100 group">
            <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
              <FaGlobe />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">Global Leagues</h3>
            <p className="text-gray-600 leading-relaxed">
              Create your own private mini-leagues or join massive public tournaments to prove you are the ultimate tactician.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow border border-gray-100 group">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
              <FaExchangeAlt />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">Dynamic Market</h3>
            <p className="text-gray-600 leading-relaxed">
              Player prices fluctuate based on real-world performance and manager transfers. Buy low, sell high, and build squad value.
            </p>
          </div>
        </div>
      </section>

      {/* How to Play Steps */}
      <section className="bg-gray-900 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4">Three Steps to Glory</h2>
          <p className="text-xl text-gray-400">It's simple to learn, but takes a mastermind to master.</p>
        </div>
        
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="relative">
            <div className="text-8xl font-black text-gray-800 absolute -top-10 -left-6 z-0 opacity-50">1</div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 text-green-400">Draft Your Squad</h3>
              <p className="text-gray-300">You have a £100m budget. Select 15 players from across the league to form your balanced roster.</p>
            </div>
          </div>
          <div className="relative">
            <div className="text-8xl font-black text-gray-800 absolute -top-10 -left-6 z-0 opacity-50">2</div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 text-green-400">Manage Weekly</h3>
              <p className="text-gray-300">Choose your starting 11, pick a Captain for double points, and use your free transfers wisely.</p>
            </div>
          </div>
          <div className="relative">
            <div className="text-8xl font-black text-gray-800 absolute -top-10 -left-6 z-0 opacity-50">3</div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 text-green-400">Win Prizes</h3>
              <p className="text-gray-300">Watch your players score points in real-time. Climb the ranks to win weekly and seasonal rewards!</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto py-24 px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 flex items-center justify-center gap-3">
            <FaQuestionCircle className="text-indigo-600" /> Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-6 text-left">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-24 px-6 bg-gradient-to-r from-green-500 to-emerald-600 text-black text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-black mb-6">The Season is Waiting.</h2>
          <p className="text-2xl mb-10 font-medium text-green-900">Sign up in less than 60 seconds and start drafting your team.</p>
          <Link href="/register" passHref>
            <button className="bg-black text-white hover:bg-gray-800 transition px-12 py-5 text-2xl font-bold rounded-full shadow-2xl hover:-translate-y-1 transform">
              Start Managing Now
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout hideSidebar>{page}</Layout>;
};