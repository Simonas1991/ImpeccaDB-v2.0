// libs
import React, { useState, useEffect } from 'react'
/* ------------------------------------------ */

// components
import WorkerForm from './components/WorkerForm'
import WorkerTable from './components/WorkerTable'
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
  const [isUpdating, setIsUpdating] = useState(false);
  const [updatingId, setUpdatingId] = useState('');
  const [formValues, setFormValues] = useState(null)
  const [initialValues, setInitialValues] = useState({
    name: '',
    surname: '',
    personalCode: '',
    address: '',
    number: '',
    email: '',
    type: 'nostatus'
  })
  /* ------------------------------------------ */

  // - useEffect
  useEffect(() => {
    getWorkers()
  }, [isUpdating])
  /* ------------------------------------------ */

  // functions
  const getWorkers = async () => {
    try {
      const response = await fetch(`http://localhost:8080/workers`)
      const data = await response.json();
      console.log(data)
      setWorkers(data)
    }
    catch (err) {
      console.log(err)
    }
  };
  /* ------------------------------------------ */

  return (
    <WorkersContext.Provider value={{
      workers,
      isUpdating,
      setIsUpdating,
      updatingId,
      setUpdatingId,
      initialValues,
      formValues,
      setFormValues,
      setInitialValues
    }}>
      <WorkerTable />
      <WorkerForm />
    </WorkersContext.Provider>
  )
}

export default App