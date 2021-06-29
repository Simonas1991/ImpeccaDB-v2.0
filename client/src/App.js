// libs
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
/* ------------------------------------------ */

// components
import Workers from './pages/Workers';
import HolidayWorkSchedule from './pages/HolidayWorkSchedule';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
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
  const [postClick, setPostClick] = useState(false);
  const [updatingId, setUpdatingId] = useState('');
  const [formValues, setFormValues] = useState(null)
  const [initialValues, setInitialValues] = useState({
    name: '',
    surname: '',
    personalCode: '',
    address: '',
    number: '',
    email: '',
    type: 'nostatus',
    from: '',
    to: ''
  })
  /* ------------------------------------------ */

  // - useEffect
  useEffect(() => {
    getWorkers()
  }, [isUpdating, postClick])
  /* ------------------------------------------ */

  // functions
  const getWorkers = async () => {
    try {
      const response = await fetch(`http://localhost:8080/workers`)
      const data = await response.json();
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
      setInitialValues,
      postClick,
      setPostClick
    }}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/workers'>
            <Workers />
          </Route>
          <Route exact path='/holiday-work-schedule'>
            <HolidayWorkSchedule />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </WorkersContext.Provider>
  )
}

export default App