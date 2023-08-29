import React, {useState, useRef, useEffect} from 'react';
import userData from '../users/userData.json';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../redux/user.js';
import IceCreamCard from '../components/icecreamcards/icecreamcards';
import './home.css';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


const Home = () => {
  const [data, updateData] = useState(userData)

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
    dispatch(logout());
  }

  const firstflavor = useSelector((state) => state.login.firstflavor);
  const secondflavor = useSelector((state) => state.login.secondflavor);
  const thirdflavor = useSelector((state) => state.login.thirdflavor);

  const firstflavornotes = useSelector((state) => state.login.firstflavornote);
  const secondflavornotes = useSelector((state) => state.login.secondflavornote);
  const thirdflavornotes = useSelector((state) => state.login.thirdflavornote);

  return(
    <div>
      <h1 className="vote-header">Ice Cream Voting Selection</h1>
      {/* <h3 className="vote-desc">Please drag around the cards to indicate your preferences</h3> */}
      <DragDropContext>
        <Droppable droppableId="cards">
          {(provided) => (
            <ul className="cards" {...provided.droppableProps} ref={provided.innerRef}>
              <IceCreamCard flavor={firstflavor} notes={firstflavornotes}></IceCreamCard>
              <IceCreamCard flavor={secondflavor} notes={secondflavornotes}></IceCreamCard>
              <IceCreamCard flavor={thirdflavor} notes={thirdflavornotes}></IceCreamCard>
            </ul>
          )}     
        </Droppable>
      </DragDropContext>
      <div className="button-container">
        <button className="button logout-button" onClick={handleLogout}>Log Out</button>
        <button className="button save-button" onClick={handleLogout}>Save</button>
      </div>
    </div>
  );
}
 export default Home;