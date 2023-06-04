import React, { useState } from 'react';
import { data } from '../mockData/tableData'; // Assuming you have a mock data file
import '../App.css';
const Table = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [engagementFilter, setEngagementFilter] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    setEngagementFilter(e.target.value);
  };

  const filteredData = data.filter((item) => {
    const matchesSearchTerm =
      item.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.analysisStartDate.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.analysisEndDate.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.status.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter =
      engagementFilter === '' || item.socialEngagements > parseInt(engagementFilter);

    return matchesSearchTerm && matchesFilter;
  });

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search..." className='searchbar'/>

      <label className='filter'>
        Filter by Engagements:
        <input
          type="number"
          value={engagementFilter}
          onChange={handleFilterChange}
          placeholder="Minimum Engagements"
          className='filterbar'
        />
      </label>

      <table className='tb'>
        <thead className='tbh'>
          <tr>
            <th>Company</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Engagements</th>
            <th>Revenue</th>
            <th>Status</th>
            <th>Other Options</th>
          </tr>
        </thead>
        <tbody className='tbb'>
          {filteredData.map((item) => (
            <tr key={item.id} className='tbr'>
              <td>{item.companyName}</td>
              <td>{item.analysisStartDate}</td>
              <td>{item.analysisEndDate}</td>
              <td>{item.socialEngagements}</td>
              <td>{item.revenue}</td>
              <td>{item.status}</td>
              <td>...</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
