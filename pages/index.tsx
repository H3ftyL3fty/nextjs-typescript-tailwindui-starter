// Lib
import Head from 'next/head';
import * as React from 'react';

const HomePage: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Meal Planner</title>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
      </Head>
      <button type="button" className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs leading-4 font-medium rounded text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
        Button text
      </button>
    </div>
  );
};

export default HomePage;
