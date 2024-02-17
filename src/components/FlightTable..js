import React, {useState} from 'react';
import '../App.css'
import '../new.css'
import apiData from '../data/flights.json'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const FlightTable = ({ apiResponse }) => {

    const [flights, setFlights] = useState([]);
    const [showFlights, setShowFlights] = useState(false);
    const [Day, setDay] = useState(null)
    const [startDate, setStartDate] = useState(new Date());
  
//     const handleSubmit = (e) => {
//       e.preventDefault();
  
//       // Assuming apiResponse contains a list of flights
//       const filteredFlights = apiResponse.flightOffer.filter((offer) => {
//         const departureDateTimeString = offer.itineraries[0].segments[0].departure.at;
// console.log("Departure DateTime String:", departureDateTimeString);

// // Add 'Z' to the date string
// const formattedDepartureDateTimeString = departureDateTimeString + 'Z';

// // Try to create a Date object with the formatted string
// const departureDateTime = new Date(formattedDepartureDateTimeString);
// console.log("Parsed Departure DateTime:", departureDateTime);

// return departureDateTime.toISOString().split('T')[0] === startDate.toISOString().split('T')[0];
//         // const formattedDepartureDate = departureDateTime.toISOString().split('T')[0];
  
//         // return formattedDepartureDate === departureDate;
//       });
  
//       setFlights(filteredFlights);
//       setShowFlights(true);
//     };


const handleSubmit = (e) => {
  e.preventDefault();

  // Assuming apiResponse contains a list of flights
  const filteredFlights = apiResponse.flightOffer.filter((offer) => {
    const departureDateTimeString = offer.itineraries[0].segments[0].departure.at;

    // Extract the date part from the departure date string
    const departureDate = departureDateTimeString.split('T')[0];

    // Compare date strings directly
    return departureDate === startDate.toISOString().split('T')[0];
  });

  setFlights(filteredFlights);
  setShowFlights(true);
};



  const formatDateTime = (dateTimeString) => {
    const dateTime = new Date(dateTimeString);
    return dateTime.toLocaleString();
  };

  return (
 
    <form onSubmit={handleSubmit} className='px-4'>
<div className='header'>

    
<div className='trip'>
  
      <div className='radio-trip' >
      <div>
        Round Trip
      </div>
      <div className='selected border-one'>
        One Way
      </div>
      <div>
        Multi city
      </div>
    </div>
</div>
<div className='underline'></div>

<div className='chart py-3'>


    <form  className="max-w-sm ">
      <select id="countries"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option selected>LHR</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>
    </form>

    <form  className="max-w-sm ">
     
      <select id="countries"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option selected>CDH</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>
    </form>

<DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />

<select name="Day" id="Day" onChange={(e) => setDay(e.target.value)} className='w-28 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
  <option selected value="1">Day -</option>
  <option value="2">2</option>
  <option value="3">3</option>
</select>

<select name="Day" id="Day" onChange={(e) => setDay(e.target.value)} className='w-28 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
  <option selected value="1">Day +</option>
  <option value="2">2</option>
  <option value="3">3</option>
</select>
<select name="Anytime" id="Anytime" onChange={(e) => setDay(e.target.value)} className='w-28 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
  <option selected value="1">Anytime</option>
  <option value="2">2</option>
  <option value="3">3</option>
</select>

<div>+</div>

<select name="ADT" id="ADT" onChange={(e) => setDay(e.target.value)} className='w-28 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
  <option selected value="1">ADT</option>
  <option value="2">2</option>
  <option value="3">3</option>
</select>
<select name="1" id="1" onChange={(e) => setDay(e.target.value)} className='w-28 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
  <option selected value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
</select>

<div>+</div>
</div>


<div class="flex justify-between items-center p-3" style={{borderTop: "1px solid rgb(17, 17, 147)"}}>
  
<div className='checkbox flex items-center'>
  <div class="flex items-center">
    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Extra options</label>
</div>
</div>

<div className='radio flex'>


    <div class="flex items-center me-4">
       <label for="inline-radio" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Envionment</label>
    </div>
    <div class="flex items-center me-4">
        <input checked id="inline-2-radio" type="radio" value="" name="inline-radio-group" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label for="inline-2-radio" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Dumy</label>
    </div>
    <div class="flex items-center me-4">
        <input  id="inline-checked-radio" type="radio" value="" name="inline-radio-group" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label for="inline-checked-radio" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">PDT</label>
    </div>
</div>

<button type='submit' className='bg-blue-900 text-white px-5 py-1 rounded search'>
    Search
</button>
  </div>


</div>


{showFlights && (
  
  <div className="relative overflow-x-auto " style={{borderTop: "1px solid rgb(17, 17, 147)"}}>
    <div className='w-48 pb-5'><p>Data parse successfully</p></div>
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
      <thead className="bg-gray-300 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-400 dark:text-gray-400">
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
          <th scope="col" className="p-3"></th>
          <th scope="col" className="px-6 py-3">
            Duration
          </th>
          <th scope="col" className="px-6 py-3">
            Price
          </th>
        </tr>
      </thead>
      <tbody>
        {apiResponse.flightOffer.map((offer, index) => {
          const itinerary = offer.itineraries[0];
          const segments = itinerary.segments;

          return segments.map((segment, segmentIndex) => (
            <tr key={`row-${index}-${segmentIndex}`} className={segmentIndex < 1 ? 'first-border' : 'second-border'}>
              <th scope="row" className="px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {segment.marketingCarrier} {segment.aircraft}
              </th>
              <td className="px-6">
                {segment.flightNumber}
              </td>
              <td className="px-6">
                {offer.class[0][segmentIndex]}  
              </td>
              <td className="px-6">
                {offer.fareBasis[0][segmentIndex]}  
              </td>
              <td className="px-6">
                {segment.departure.iataCode}-{segment.arrival.iataCode}   
              </td>
              <td className="px-6">
                {segment.departure.at}  
              </td>
              <td className="px-6">
                {segment.arrival.at}  
              </td>
              <td className="px-6">
                ---
              </td>
              <td className="px-6">
                {segmentIndex === 0 && offer.itineraries[0].duration}
              </td>
              <td className="px-6">
              {segmentIndex === 1 && (
                        <button type="button" className="bg-blue-900 text-white px-5 py-1 rounded select-btn">
                          Slect
                        </button>
                      )}
                      {segmentIndex === 0  && offer.price}
              </td>
            </tr>
          ));
        })}
      </tbody>
    </table>
  </div>
)}


    </form>
  );
};

export default FlightTable;