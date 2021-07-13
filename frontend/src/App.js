import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  const [state, setState] = useState('');
  const [health, setHealth] = useState('fail');
  const API_URL = process.env.REACT_APP_API_URL || 'localhost';
  const API_PORT = process.env.REACT_APP_API_PORT || '3001';
  const API_BASE_ADDRESS = `http://${API_URL}:${API_PORT}`;

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`${API_BASE_ADDRESS}/test`);
      setState(result.data);
    };
    fetchData();
    return () => {};
  }, [state,API_BASE_ADDRESS]);

  useEffect(() => {
    const checkHealth = async () => {
      const result = await axios(`${API_BASE_ADDRESS}/checkhealth`);
      setHealth(result.data.status);
    };
    const timer = setInterval(() => {
      checkHealth();
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [health,API_BASE_ADDRESS ]);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>The Response is {state}</p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React xx {state}
        </a>
      </header>
      <h3>{health}</h3>
    </div>
  );
}

export default App;
