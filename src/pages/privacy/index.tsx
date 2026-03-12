import Layout from '@/components/layouts';
import { appConfigs } from '@/constants/configs';
import { ReactElement } from 'react';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen text-white flex flex-col">
      <section className="flex py-16 flex-col items-center justify-center text-center px-6 bg-gradient-to-br from-secondary via-secondary to-white">
        <h1 className="text-5xl font-extrabold mb-3 text-main">Privacy Policy</h1>
      </section>
      <section className="py-12 px-4 w-full md:w-8/12 mx-auto">
        <p className="text-gray-800 dark:text-gray-200">
          Your privacy is important to us at {appConfigs.appName}. This Privacy Policy explains how we collect, use, and protect your information.
        </p>
      </section>
    </div>
  );
}

PrivacyPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout hideSidebar>{page}</Layout>;
};