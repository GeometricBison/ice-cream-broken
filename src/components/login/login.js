import React, {useState, useRef} from 'react';
import userData from '../../users/userData.json';
import './login.css';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../../redux/user.js';

function getSortedIceCreamFlavors(data) {
  const flavorsWithNotes = [];
  
  if (Array.isArray(data)) {
    data.forEach(item => {
      const iceCreamPreferences = item.iceCreamPreferences;
      if (iceCreamPreferences) {
        Object.keys(iceCreamPreferences).forEach(flavor => {
          flavorsWithNotes.push({ [flavor]: iceCreamPreferences[flavor].notes });
        });
      }
    });
  }
  
  flavorsWithNotes.sort((a, b) => {
    const orderA = Object.values(a)[0].order;
    const orderB = Object.values(b)[0].order;
    return orderA - orderB;
  });
  
  return flavorsWithNotes;
}

export const RetrieveJsonIndex = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const jsonIndex = userData.findIndex(
    (user) => user.username === username && user.password === password
  );
  return(
    jsonIndex
  )
}

export const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  // const loginStatus = useSelector((state) => state.login.loginStatus)
  const dispatch = useDispatch();
  
  const handleLogin = () => {
    const user = userData.find(
      (user) => user.username === username && user.password === password
    );

    const jsonIndex = userData.findIndex(
      (user) => user.username === username && user.password === password
    );

    const sortedIceCreamFlavors = getSortedIceCreamFlavors([userData[jsonIndex]]);
    const iceCreamKey = Object.keys(sortedIceCreamFlavors[0])[0]
    const iceCreamNote = sortedIceCreamFlavors[0][iceCreamKey]

    if (user) {
      setErrorMessage('');
      dispatch(login(
        {
          username : user.username, 
          password: user.password, 
          firstflavor : Object.keys(sortedIceCreamFlavors[0])[0],
          firstflavornote : sortedIceCreamFlavors[0][Object.keys(sortedIceCreamFlavors[0])[0]],
          secondflavor : Object.keys(sortedIceCreamFlavors[1])[0],
          secondflavornote : sortedIceCreamFlavors[1][Object.keys(sortedIceCreamFlavors[1])[0]],
          thirdflavor : Object.keys(sortedIceCreamFlavors[2])[0],
          thirdflavornote : sortedIceCreamFlavors[2][Object.keys(sortedIceCreamFlavors[2])[0]]
        }));
      navigate("/dashboard");
    }
    else {
      setErrorMessage('Invalid username or password');
    }
  }

  return(
    <div className="login-container">
      <h1 className='login-header'>Ice Cream Voting Login</h1>
      <input
        className = "input"
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        className = "input"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button className="login-button" onClick={handleLogin}>Login</button>
      {errorMessage && 
        <p style={{ color: 'red', marginTop: 20}}>{errorMessage}</p>
      }
    </div>
  )
}
