import React from 'react';
import NavBar from '../Components/NavBar/NavBar';
import Poster from '../Components/NavBar/Poster';
import Stocks from '../Components/NavBar/Stocks';

function Home() {
  return (
    <>
      <NavBar />
      <Poster />
      <Stocks />
    </>
  );
}

export default Home;
