
import {FaHome, FaTshirt, FaExchangeAlt, FaChartLine, FaCog ,FaTrophy, FaUsers,  FaInfoCircle, FaPhone, FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaRegQuestionCircle, FaClipboardList, FaUserFriends, FaShieldAlt } from "react-icons/fa";
import { VscActivateBreakpoints,VscGitPullRequestCreate } from "react-icons/vsc";
import { GoLaw } from "react-icons/go";
import { IoLogoGameControllerB } from "react-icons/io";

export const navLinks = [
  { title: 'Home', path: '/', icon: FaHome },
  { title: 'How To Play', path: '/how-to-play', icon: IoLogoGameControllerB },
  { title: 'Rules', path: '/rules', icon: GoLaw},
  { title: 'About', path: '/about', icon: FaInfoCircle },
  { title: 'Contact', path: '/contact', icon: FaPhone },
];

export const sideLinks = [
  { title: 'Home', path: '/dashboard/', icon: FaHome },
  { title: 'My Points', path: '/dashboard/my-points', icon: VscActivateBreakpoints },
  { title: 'My Team', path: '/dashboard/my-team', icon: FaTshirt },
  { title: 'Transfers', path: '/dashboard/transfers', icon: FaExchangeAlt },
  { title: 'Pick Team', path: '/dashboard/pick-team', icon: VscGitPullRequestCreate},
  { title: 'Leagues', path: '/dashboard/leagues', icon: FaUsers },
];

export const sideAdminLinks = [
  { title: 'Admin Dashboard', path: '/admin', icon: FaShieldAlt },
  { title: 'Home', path: '/dashboard', icon: FaHome },
  { title: 'My Squad', path: '/dashboard/admin/my-team', icon: FaTshirt },
  { title: 'Transfers', path: '/dashboard/admin/transfers', icon: FaExchangeAlt },
  { title: 'Leaderboard', path: '/dashboard/admin/leaderboard', icon: FaChartLine },
  { title: 'Settings', path: '/dashboard/admin/settings', icon: FaCog },
];


export const footerData = {
  description:
    "Fantasy Football is the ultimate fantasy experience for fans of global football. Build your dream team, compete with friends, track real-time player stats, and climb the leaderboard every gameweek.",

  links: [
    {
      title: "Game Info",
      icon: FaClipboardList,
      links: [
        { title: 'How to Play', path: '/how-to-play' },
        { title: 'Game Rules', path: '/rules' },
        { title: 'About Us', path: '/about' },
      ]
    },
    {
      title: "My Account",
      icon: FaUserFriends,
      links: [
        { title: 'Dashboard', path: '/dashboard' },
        { title: 'Register', path: '/register' },
      ]
    },
    {
      title: "Support",
      icon: FaRegQuestionCircle,
      links: [
        { title: 'FAQ', path: '/faq' },
        { title: 'Contact Us', path: '/contact' },
        { title: 'Help Center', path: '/help' },
      ]
    },
    {
      title: "Legal",
      icon: FaShieldAlt,
      links: [
        { title: 'Privacy Policy', path: '/privacy' },
        { title: 'Terms of Service', path: '/terms' },
        { title: 'Cookies', path: '/cookies' },
      ]
    }
  ],

  social: [
    { title: 'Facebook', path: 'https://facebook.com/fantasyfootball', icon: FaFacebookF },
    { title: 'Instagram', path: 'https://instagram.com/fantasyfootball', icon: FaInstagram },
    { title: 'Twitter', path: 'https://twitter.com/fantasyfootball', icon: FaTwitter },
    { title: 'YouTube', path: 'https://youtube.com/fantasyfootball', icon: FaYoutube },
  ]
};
