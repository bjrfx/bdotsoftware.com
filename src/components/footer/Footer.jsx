import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

const Footer = () => {
    function generateDeviceId() {
        // Check if device ID is already stored in localStorage
        let deviceId = localStorage.getItem('deviceId');
        
        // If not stored, generate a new ID and store it
        if (!deviceId) {
          deviceId = Math.random().toString(36).substr(2, 9); // Generate a random alphanumeric string
          localStorage.setItem('deviceId', deviceId); // Store the generated ID in localStorage
        }
        
        return deviceId;
      }
      const deviceId = generateDeviceId();
console.log('Device ID:', deviceId);
  const [ip, setIp] = useState('');
  const [city, setCity] = useState('');
  const [region, setRegion] = useState('');
  // const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('https://ipinfo.io/json')
      .then(response => response.json())
      .then(data => {
        console.log('Your IP address is:', data.ip);
        setIp(data.ip);
        setCity(data.city);
        setRegion(data.region);
      })
      .catch(error => {
        console.error('Error fetching IP address:', error);
        console.log(error.message)
        // const message = (error.message === 'Failed to fetch') ? 'Data ID fetch failed' : `Device ID: ${ip} ${city}, ${region}`;
        // setMessage(message);
      });
  }, []); // Empty dependency array means this effect will only run once after the component mounts

  return (
    <section className="footer_section">
      <div className="container">
        <p>
          &copy; <span id="displayYear">{new Date().getFullYear()}</span> All Rights Reserved By{' '}
          <Link to='/'>BDOT SOFTWARE</Link>
        </p>
        <Typography fontWeight={100} variant='p' component='p'>{deviceId}: {ip} {city}, {region}</Typography>
      </div>
    </section>
  );
}

export default Footer;
