import React, { useState } from 'react';
import '../new.css'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'


export default function FlightResults() {

  const [selectedOption, setSelectedOption] = useState("1");
  const [Day, setDay] = useState(null)
  const [startDate, setStartDate] = useState(new Date());

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };


  return (
    <>
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

    <div className='chart'>

    
        <form  className="max-w-sm mx-auto">
          <select id="countries"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>LHR</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </form>

        <form  className="max-w-sm mx-auto">
         
          <select id="countries"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>CDH</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </form>

<DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />

    <select name="Day" id="Day" onChange={(e) => setDay(e.target.value)} className='w-20 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholderText="Day">
      <option selected value="1">Day</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>

    </div>
    </div>
    </>
  );
}
