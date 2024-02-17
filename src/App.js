// src/App.js
import React, { useState, useEffect } from 'react';
import FlightSearchForm from './components/FlightSearchForm';
import FlightResults from './components/FlightResults';
import flightsData from './data/flights.json';
import FlightTable from './components/FlightTable.';
import apiData from './data/flights.json'

function App() {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Load initial data when the component mounts
    setSearchResults(flightsData.flightOffer);
  }, []);

  const handleSearch = (formData) => {
    // Filter flights based on the search criteria
    const filteredFlights = flightsData.flightOffer.filter((flight) => {
      // Implement your search logic here, comparing formData with flight details
      // For simplicity, let's assume we want to show all flights for now
      return true;
    });

    setSearchResults(filteredFlights);
  };

  const apiResponse = {
    flightOffer: apiData.flightOffer, // Fix the structure
  };

  return (
    <div className="App">
      {/* <FlightSearchForm onSearch={handleSearch} /> */}
      {/* <FlightResults results={searchResults} /> */}

      <FlightTable apiResponse={apiResponse}/>

    </div>
  );
}

export default App;
