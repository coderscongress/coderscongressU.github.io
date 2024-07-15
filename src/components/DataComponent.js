import React, { useState, useEffect } from 'react';

const DataComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json'); // Assuming data.json is in the public folder
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run effect only once after initial render

  return (
    <div>
      <h1>Data from JSON:</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}><img src={item.imageUrl} alt={item.name} /> {item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataComponent;
