import React, { useState } from 'react';
import Poster from '../Components/NavBar/Poster';
import Stocks from '../Components/NavBar/Stocks';

function Home() {
  const [input, setInput] = useState('');

  return (
    <>
      <Poster />
      <input placeholder="Find your Fav Company..." className="search-input" type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <Stocks search={input} />
    </>
  );
}

export default Home;
