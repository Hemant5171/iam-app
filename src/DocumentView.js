import React, { useState } from 'react';
import axios from 'axios';

const DocumentView = () => {
  const [inputValue, setInputValue] = useState('');
  const [employees, setEmployees] = useState([]); // State to store employee list
  const [responseMessage, setResponseMessage] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(`http://localhost:8080/detail/${inputValue}`);

      if (response.status === 200) {
        setEmployees(response.data);
        setResponseMessage('Data retrieved successfully');
      } else {
        setResponseMessage('Failed to retrieve data');
        setEmployees([]);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setResponseMessage('Error fetching data');
      setEmployees([]);
    }
  };

  return (
    <div className="document-view">
      <h2>Account Search</h2>

      <form onSubmit={handleSubmit}>
        <label>
          Enter Account ID :
          <input type="text" value={inputValue} onChange={handleInputChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {responseMessage && <p>{responseMessage}</p>}
      {employees.length > 0 && (
        <table border="1" style={{ marginTop: '20px', width: '100%', textAlign: 'left' }}>
          <thead>
            <tr>
              <th>ACCESS_END_DATE</th>
              <th>MACHINE</th>
              <th>EMPLOYEE_NAME</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={index}>
                <td>{employee.accessEndDate}</td>
                <td>{employee.machine}</td>
                <td>{employee.empName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DocumentView;
