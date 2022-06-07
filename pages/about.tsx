import type { NextPage } from 'next';
import Router from 'next/router';

import { showToast } from '../components/Toast/index';

const About: NextPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-4xl">About</h1>
      <button
        className="text-blue-700"
        onClick={() => {
          showToast('success', 'Going to /home');
          Router.push('/');
        }}
      >
        Go to /home
      </button>
    </div>
  );
};

export default About;
