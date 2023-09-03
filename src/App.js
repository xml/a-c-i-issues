import { useEffect } from 'react';

import logo from './logo.svg';
import './App.css';
import api from './api';

function App() {

  
  useEffect(() => {
    const controller = new AbortController();
    api.get('random_joke', {
      signal: controller.signal
    }).then((res)=> {
      console.log(res.data)
    }).catch((err) => console.error(err));
    // NOTE: this will log an error, but it's expected behavior: all cancelled axios requests throw with message = 'canceled'
    return () => controller.abort();
  }, [])



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
