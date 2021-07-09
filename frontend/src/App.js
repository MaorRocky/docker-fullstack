import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  const [state, setState] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('http://localhost:3001/test');
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
          Learn React {state}
        </a>
      </header>
    </div>
  );
}

export default App;
