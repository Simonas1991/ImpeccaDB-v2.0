// libs
import React, { useState, useEffect } from 'react'
/* ------------------------------------------ */

// components
import WorkerForm from './components/WorkerForm'
import WorkerTable from './components/WorkerTable';
/* ------------------------------------------ */

// css
import './App.css';
/* ------------------------------------------ */

// context
export const WorkersContext = React.createContext();
/* ------------------------------------------ */

const App = () => {
  // hooks
  // - useState
  const [workers, setWorkers] = useState([]);

  // - useEffect
  useEffect(() => {
    getWorkers()
  }, [])

  // functions
  const getWorkers = async () => {
    const response = await fetch(`http://localhost:8080/workers`)
    const data = await response.json();
    console.log(data)
    setWorkers(data)
  };

  return (
    <WorkersContext.Provider value={{ workers }}>
      <WorkerTable />
      <WorkerForm />
    </WorkersContext.Provider>
  )
}

export default App