// src/FlightSearchForm.js
import React, { useState } from 'react';
import '../App.css'
import apiData from '../data/flights.json'

const FlightSearchForm = () => {

    const [flights, setFlights] = useState([]);
    const [showFlights, setShowFlights] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();

      setFlights(apiData.flightOffer); // Assuming the JSON structure contains a list of flights
      setShowFlights(true);
    };
 

  return (
    <form onSubmit={handleSubmit}  className="my-8 p-8 bg-gray-200 form" >
      {/* Add your form fields here */}
        <div  className="flight">
            <div  className="flight-type-wrapper">
                <label  className="radio">
                    <input type="radio" name="flight-type " value="One Way"/>
                    <span  className="radio-btn"></span>
                    <span  className="flight-type-text">One Way</span>
                </label>
                <label  className="radio">
                    <input type="radio" name="flight-type" value="Round Way"/>
                    <span  className="radio-btn"></span>
                    <span  className="flight-type-text">Round Way</span>
                </label>
                <label  className="radio">
                    <input type="radio" name="flight-type" value="Multi City"/>
                    <span  className="radio-btn"></span>
                    <span  className="flight-type-text">Multi City</span>
                </label>
            </div>
            <div  className="flight-search bar">
                <div  className="box location from">
                    <span  className="label">From</span>
                    <div  className="value">Dhaka</div>
                    <span  className="sub-value"> Dhaka Airport</span> 
              
                </div>
                <div  className="box location to has-swapper">
                    <span  className="swapper"></span>
                    <span  className="label">To</span>
                    <div  className="value">Cox's Bazar</div>
                    <span  className="sub-value">CXB, Cox's Bazar Airport</span>
                </div>
                <div  className="box date depart">
                    <span  className="label">Journey Date</span>
                    <div  className="value">
                        19 <span>Feb'24</span>
                    </div>
                    <span  className="sub-value">Monday</span>
                </div>
                <div  className="box traveler">
                    <span  className="label">Traveler,  className</span>
                    <div  className="value">
                        1 Traveler
                    </div>
                    <span  className="sub-value"> Economy</span>
                </div> 
            </div>
      <button type="submit"  className="bg-blue-500 text-white p-2 rounded search">
        Search Flights
      </button>
        </div>


        {showFlights && (
        <div className="flight-list">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="bg-gray-400 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-400 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Flight
                </th>
                <th scope="col" className="px-6 py-3">
                    Aircraft
                </th>
                <th scope="col" className="px-6 py-3">
                    Class
                </th>
                <th scope="col" className="px-6 py-3">
                    Fare
                </th>
                <th scope="col" className="px-6 py-3">
                    Route
                </th>
                <th scope="col" className="px-6 py-3">
                    Departure
                </th>
                <th scope="col" className="px-6 py-3">
                    Arrival
                </th>
                <th scope="col" className="p-3">
                    
                </th>
                <th scope="col" className="px-6 py-3">
                    Duration
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
            </tr>
        </thead>

        <tbody>
        {flights.map((flight, index) => (
            <tr key={`row-${index}`} className="second-th">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {flight.itineraries[0].segments[0].marketingCarrier} {flight.itineraries[0].segments[0].aircraft}  {/* 333 73H */}
            </th>
            <td className="px-6 py-4">
                  {flight.itineraries[0].segments[0].flightNumber}
            </td>
            <td className="px-6 py-4">
                  {flight.class[0]}
            </td>
            <td className="px-6 py-4">
                  {flight.fareBasis[0]}
            </td>
            <td className="px-6 py-4">
                  {flight.itineraries[0].segments[0].departure.iataCode}-{flight.itineraries[0].segments[0].arrival.iataCode}
            </td>
            
          </tr>
                
            ))}
        </tbody>

    </table>

        </div>
      )}


    </form>
  );
};

export default FlightSearchForm;
