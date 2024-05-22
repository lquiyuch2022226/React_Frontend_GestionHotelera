import { useState } from 'react';
import './SearchDates.css';

export const SearchDates = ({ onSearch }) => {
  
  const [location, setLocation] = useState('');
  const [since, setSince] = useState('');
  const [until, setUntil] = useState('');

  const handleSearch = () => {
    if (typeof onSearch === 'function') {
      onSearch({ location, since, until });
    } else {
      console.error('onSearch is not a function');
    }
  };

  return (
    <section className="c-wrapper">
      <div className="search-container">
        <div className="input-group">
          <label>LOCATION</label>
          <input type="text" placeholder="Guatemala" className="input" value={location} onChange={(e) => setLocation(e.target.value)} />
        </div>
        <div className="input-group">
          <label>Since</label>
          <input type="date" className="input" value={since} onChange={(e) => setSince(e.target.value)} />
        </div>
        <div className="input-group">
          <label>Until</label>
          <input type="date" className="input" value={until} onChange={(e) => setUntil(e.target.value)} />
        </div>
        <button className="buttonSearch" onClick={handleSearch}> SEARCH </button>
      </div>
    </section>
  );
};
