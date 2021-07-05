// libs
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import fire from './fire';
/* ------------------------------------------ */

// components
import Home from './pages/Home';
import Workers from './pages/Workers';
import HolidayWorkSchedule from './pages/HolidayWorkSchedule';
import Login from './components/Login'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
/* ------------------------------------------ */

// css
import './App.css';
import '@fontsource/roboto';
import NavbarLogin from './components/NavbarLogin';
/* ------------------------------------------ */

// context
export const WorkersContext = React.createContext();
/* ------------------------------------------ */

const App = () => {
  // hooks
  // - useState (Forms, Tables)
  const [workers, setWorkers] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);
  const [postClick, setPostClick] = useState(false);
  const [updatingId, setUpdatingId] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [formValues, setFormValues] = useState(null);
  const [initialValues, setInitialValues] = useState({
    employeeNr: '',
    name: '',
    surname: '',
    personalCode: '',
    address: '',
    number: '',
    email: '',
    type: 'nostatus',
    from: '',
    to: ''
  });

  // - useState ( LOGIN )
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
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
      console.log(data.length)
      console.log(data)
      let lastWorker = data[1]
      console.log(lastWorker)
      setWorkers(data)
    }
    catch (err) {
      console.log(err)
    }
  };

  //- LOGIN functions
  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => {
        switch (err.code) {
          case 'auth/invalid-email':
          case 'auth/user-disabled':
          case 'auth/user-not-found':
            setEmailError(err.message);
            break;
          case 'auth/wrong-password':
            setPasswordError(err.message);
            break;
          default: break;
        }
      })
  }

  const authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser('')
      }
    })
  }

  const handleLogout = () => {
    fire.auth().signOut();
  }

  useEffect(() => {
    authListener();
  })
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
      setPostClick,
      isActive,
      setIsActive,
      handleLogout
    }}>
      {user ?
        <Router>
          <Navbar handleLogout={handleLogout} />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/workers'>
              <Workers />
            </Route>
            <Route exact path='/holiday-work-schedule'>
              <HolidayWorkSchedule />
            </Route>
          </Switch>
        </Router>
        :
        <>
          <NavbarLogin />
          <Login
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleLogin={handleLogin}
            emailError={emailError}
            passwordError={passwordError}
          />
        </>
      }
      <Footer />
    </WorkersContext.Provider>
  )
}

export default App