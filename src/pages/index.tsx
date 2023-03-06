import React from 'react';

import SumCalculator from '../components/SumCalculator';
import Timer from '../components/Timer';

function Home() {
  return (
    <div>
      <h1>Olá mundo ! Eu sou o Remote</h1>
      <Timer />
      <br /><br />
      <SumCalculator />
    </div>
  )
}

export default Home;