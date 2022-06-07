import type { NextPage } from 'next';
import Router from 'next/router';

import { showToast } from '../components/Toast/index';

const Home: NextPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-4xl">Home</h1>
      <button
        className="text-blue-700"
        onClick={() => {
          showToast('success', 'Going to /about');
          Router.push('/about');
        }}
      >
        Go to /about
      </button>
    </div>
  );
};

export default Home;
