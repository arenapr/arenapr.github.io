// InsertData.js (React Component)
import React, { useState } from 'react';
import axios from 'axios';

function InsertData() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      email: email,
    };

    try {
      const response = await axios.post('http://localhost:5000/about', userData);
      setMessage(response.data.message); // Handle success response
    } catch (error) {
      setMessage('Error: ' + error.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div>
      <h1>Insert Data</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Insert</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default InsertData;
