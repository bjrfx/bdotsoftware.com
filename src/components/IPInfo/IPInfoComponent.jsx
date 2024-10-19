// import React, { useState, useEffect } from 'react';

// const IPInfoComponent = () => {
//   const [ipData, setIpData] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch('https://ipinfo.io/json')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Failed to fetch IP address and location');
//         }
//         return response.json();
//       })
//       .then(data => {
//         setIpData(data);
//       })
//       .catch(error => {
//         setError(error.message);
//       });
//   }, []);

//   return (
//     <div>
//       {ipData ? (
//         <div>
//           <p>IP Address: {ipData.ip}</p>
//           <p>City: {ipData.city}</p>
//           <p>Region: {ipData.region}</p>
//         </div>
//       ) : error ? (
//         <p>Error: {error}</p>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default IPInfoComponent;
