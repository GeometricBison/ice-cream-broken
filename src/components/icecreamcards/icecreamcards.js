import './icecreamcards.css';
import userData from '../../users/userData.json';
import React, {useState} from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { RetrieveJsonIndex } from '../login/login';
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



function IceCreamCard(props) {
  const dispatch = useDispatch();
  const flavor = props.flavor
  const flavornote = props.notes
  
  const[active1, setActive1] = useState(false);
  const[active2, setActive2] = useState(false);
  const[active3, setActive3] = useState(false);

  const sortedIceCreamFlavors = getSortedIceCreamFlavors(userData);
  
  const handleChange = (e) => {
    let numberSelected = parseInt(e.target.value)
    if (numberSelected == 1) {
    dispatch(login(
      {
        firstflavor : flavor,
        firstflavornote : flavornote
      }));
    } 
    return(
      numberSelected
    );
    
  }

  return (
    <div className="card-container">
      <h2 className="card-header">{props.flavor}</h2>
      <select className="ranks" onChange={handleChange}>
        <option>--Please choose an option--</option>

        <option value="1">1</option>

        <option value="2">2</option>

        <option value="3">3</option>
      </select>
      <p contentEditable="true">{props.notes}</p>
    </div>
  )

  // return (
  //   sortedIceCreamFlavors.map(({name, notes}, index) => {
  //     return (
  //       <Draggable key={name} draggableId={name} index={index}>
  //       {(provided) => (
  //         <div className="card-container" {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
  //           <h2 className="card-header">{name}</h2>
  //           <p contentEditable="true">{notes}</p>
  //         </div>
  //       )
  //     }
  //   </Draggable>
  //     )
  //   })
    
  // );
}

export default IceCreamCard;