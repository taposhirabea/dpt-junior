// src/App.js
import React, { useState, useEffect } from 'react';
import flightsData from './data/flights.json';
import FlightTable from './components/FlightTable.';
import apiData from './data/flights.json'

function App() {
 

  const apiResponse = {
    flightOffer: apiData.flightOffer, // Fix the structure
  };

  return (
    <div className="App">


      <FlightTable apiResponse={apiResponse}/>

    </div>
  );
}

export default App;
