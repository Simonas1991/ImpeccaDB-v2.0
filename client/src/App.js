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
  const [updateClick, setUpdateClick] = useState(false);
  const [checkBox, setCheckBox] = useState(false)
  const [formValues, setFormValues] = useState(null)
  /* ------------------------------------------ */

  // formik values  
  const initialValues = {
    name: '',
    surname: '',
    personalCode: '',
    address: '',
    number: '',
    email: '',
    type: 'nostatus'
  }
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
      checkBox,
      setCheckBox,
      updateClick,
      setUpdateClick,
      initialValues,
      formValues,
      setFormValues
    }}>
      <WorkerTable />
      <WorkerForm />
    </WorkersContext.Provider>
  )
}

export default App