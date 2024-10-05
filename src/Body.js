import React, { useState } from 'react';
import axios from 'axios';

const Body = () => {
  const [file, setFile] = useState(null);
  const [statusMessage, setStatusMessage] = useState('');
  const [selectedOption, setSelectedOption] = useState('');


  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };


  const handleFileUpload = async (event) => {

   
    if (!file) {
      setStatusMessage('Please select a file first!');
      return;
    }

    const validMimeTypes = [
        'application/vnd.ms-excel', 
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      ];

      if (!validMimeTypes.includes(file.type)) {
        setStatusMessage('Please upload only Excel files (.xls or .xlsx).');
        setFile(null);
        return;
      }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:8080/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(""+response);

      if (response.status === 200) {
        setStatusMessage('File uploaded successfully!');
        console.log(response.data);
      } else {
        setStatusMessage('File uploaded failed!');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      setStatusMessage('File uploaded failed!');
    }
  };

  return (
    <div className="body"> 

<label>
        Select an option:
        <select value={selectedOption} onChange={handleDropdownChange}>
          <option value="">--Select an option--</option>
          <option value="Option1">Account Reconcillation</option>
          <option value="Option2">Id Reconcillation</option>
          <option value="Option3">Access Rc</option>
        </select>
      </label> 
      <h2>Upload a File</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload</button>
            {statusMessage && <p>{statusMessage}</p>}
    </div>
  );
};

export default Body;
