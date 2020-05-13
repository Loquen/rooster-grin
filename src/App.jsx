import React from 'react';
import './App.scss';

import Hero from './components/Hero';
import SplitContainer from './components/SplitContainer';
import Banner from './components/Banner';
import Footer from './components/Footer';

const splitData = [
  {
    title: 'Lorem Ipsum',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    link: 'Lorem Ipsum',
    stars: false
  },
  {
    title: 'Lorem Ipsum Dolor Sit Amet',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    link: 'Lorem Ipsum',
    stars: false
  },
  {
    title: 'Lorem Ipsum Dolor Sit Amet',
    body: '',
    link: '',
    stars: true
  }
];

const bannerData = [
  {
    title: 'Lorem Ipsum',
    body: '',
    align: 'left'
  },
  {
    title: 'Lorem Ipsum',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    align: 'right'
  }
]

function App() {
  return (
    <div className="App">
      <Hero />
      <SplitContainer 
        data={splitData[0]}
        features={false}
        carousel={false}
      />
      <Banner 
        data={bannerData[0]}
      />
      <SplitContainer
        data={splitData[1]}
        features={true}
        carousel={false}
      />
      <Banner
        data={bannerData[1]}
      />
      <SplitContainer
        data={splitData[2]}
        features={false}
        carousel={true}
      />
      <Footer />
    </div>
  );
}

export default App;
