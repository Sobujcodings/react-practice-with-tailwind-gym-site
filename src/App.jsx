import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Pricingcart from './Components/Pricingcart/Pricinglist';
import Chart from './Components/Chart/Chart';
import Axios from './Components/Axios-Practice/Axios';

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Pricingcart></Pricingcart>
      <Chart></Chart>
      <Axios></Axios>
    </div>
  );
};

export default App;