import { useDispatch } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import AllRoutes from './AllRoutes';
import Navbar from './components/Navbar/Navbar';
import { useEffect } from 'react';
import { setCurrentUser } from './Actions/currentUser';
import { fetchAllUsers } from './Actions/fetchUsers';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
    dispatch(fetchAllUsers())
    console.log("ss");
  },[dispatch])

  return (
    <div className="App">
      <Router>
       <Navbar />
       <AllRoutes />
      </Router>
    </div>
  );
}

export default App;
