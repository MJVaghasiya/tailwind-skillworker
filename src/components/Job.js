// import { Button } from 'bootstrap'
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar'
import Footer from './Footer'
import { IoMdPerson } from "react-icons/io";
import { FaLocationArrow } from "react-icons/fa6";
import { PiMagnifyingGlass } from "react-icons/pi";
import { MdOutlineClear } from "react-icons/md";

const Job = () => {
  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [titleQuery, setTitleQuery] = useState('');
  const [locationQuery, setLocationQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/users.json');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setOriginalData(data);
        setFilteredData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleFilter = () => {
    const titleQueryLowerCase = titleQuery.toLowerCase();
    const locationQueryLowerCase = locationQuery.toLowerCase();

    const filtered = originalData.filter(item => {
      const itemTitle = (item.title || '').toLowerCase();
      const itemLocation = (item.location || '').toLowerCase();
      return (
        itemTitle.includes(titleQueryLowerCase) &&
        itemLocation.includes(locationQueryLowerCase)
      );
    });

    setFilteredData(filtered);
  };

  const clearFilters = () => {
    setTitleQuery('');
    setLocationQuery('');
    setFilteredData(originalData);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />

      <div className='container mt-5'>
        <div className='row align-items-center'>
          <div className='col-lg-4 input-role'>
          <div className='job-find-input '>
            <IoMdPerson className='job-find-icon' />

            <input
              type="text"
              placeholder="Keyword, Role, Skill..."
              value={titleQuery}
              onChange={(e) => setTitleQuery(e.target.value)}
            />
          </div>
          </div>
          <div className='col-lg-4 input-location'>
          <div className='job-find-input '>
            <FaLocationArrow className='job-find-icon' />

            <input
              type="text"
              placeholder="Location"
              value={locationQuery}
              onChange={(e) => setLocationQuery(e.target.value)}
            />
          </div>
          </div>
          <div className='col-lg-4 input-find-clear'>
          <button class="pressable-button " onClick={handleFilter}> <PiMagnifyingGlass /> Find</button>
            <button class="pressable-button ms-3" onClick={clearFilters} style={{ backgroundColor: "#D62C35" }}> <MdOutlineClear /> Clear</button>
          </div>
        </div>

        {filteredData.map((item) => (
          <div className='row job-row align-items-center neu-morphism' key={item.id}>

            {/* IMAGE */}
            <div className='col-lg-3 p-0'>
              <img className='job-image' src={item.image} alt={item.title} />
            </div>

            {/* TITLE */}
            <div className='col-lg-6 p-3'>
              <div className='grid-col '>
                <p className='fw-bold m-0 location'>Location: {item.location}</p>
                <p className='m-0 role' >Role: {item.title}</p>
                <p className='m-0 payment' >Payment: {item.salary}</p>
              </div>
              <p className='mt-2 mb-2' >{item.description}</p>
                <button className='pressable-button rounded-0 apply-btn' style={{ backgroundColor: "#F0A41E" }}>Do you want to apply?</button></div>

            {/* LOCATION */}
            <div className='col-lg-3 p-0'>
              <iframe
              className='map'
                style={{ border: 0 }}
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBEBT9O1STei5aTy7nodtI_6FkrjjgBQNc&q=${encodeURIComponent(item.location)}`}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
        <Footer />
      </div>
    </div>
  );
};


export default Job
