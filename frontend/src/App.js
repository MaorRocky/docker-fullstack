import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  const [state, setState] = useState('');

  useEffect(() => {
    const API_URL = process.env.REACT_APP_API_URL || 'localhost';
    const API_PORT = process.env.REACT_APP_API_PORT || '3001';
    const API_BASE_ADDRESS = `http://${API_URL}:${API_PORT}`;
    console.log(`${API_URL}`);
    console.log(`${API_PORT}`);
    console.log(`${API_BASE_ADDRESS}`);

    const fetchData = async () => {
      const result = await axios(`${API_BASE_ADDRESS}/test`);
      setState(result.data);
    };
    fetchData();
    return () => {};
  }, [state]);
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
    </div>
  );
}

export default App;
