import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './HelpCenter.css';

function HelpCenter() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch data from the server
  useEffect(() => {
    axios.get(' http://localhost:5000/api')
      .then(response => {
        setData(response.data);
        setFilteredData(response.data); // Initialize with full data
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // Handle search input changes
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    if (query) {
      const filtered = data.filter(item =>
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query)
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(data); // Reset to full data if search is empty
    }
  };

  return (
    <div className="help-center">
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <span>Abstract | Help Center</span>
          </div>
          <button className="submit-request">Submit a request</button>
        </div>
      </header>
      
      <main className="main-content">
        <div className="hero">
          <h1>How can we help?</h1>
          <div className="search-bar">
            <input 
              type="text" 
              placeholder="Search" 
              value={searchQuery} 
              onChange={handleSearch} 
            />
            <button>→</button>
          </div>
        </div>

        <div className="cards">
          {filteredData.map((item, index) => (
            <div className="card" key={index}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Abstract</h3>
            <ul>
              <li>Branches</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Resources</h3>
            <ul>
              <li>Blog</li>
              <li>Help Center</li>
              <li>Release Notes</li>
              <li>Status</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Community</h3>
            <ul>
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>Facebook</li>
              <li>Dribbble</li>
              <li>Podcast</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Company</h3>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Legal</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="footer-copyright">
          <p>© Copyright 2022 Abstract Studio Design, Inc. All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default HelpCenter;
