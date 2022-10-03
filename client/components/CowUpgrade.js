import React, {useEffect, useState} from 'react';
import { connect, useDispatch, useStore } from 'react-redux';
import {addCowActionCreator} from '../actions/actions.js';

export function CowUpgrade(props) {
  const {totalCowCost} = props;
  const [cowCost, setCowCost] = useState(0);
  const [isHovering, toggleHovering] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("TOTAL COW COST PROPS: ", totalCowCost)
    if (totalCowCost !== cowCost) setCowCost(totalCowCost)
  }, [props])

  return (
      <div 
      onMouseEnter={() => toggleHovering(true)}
      onMouseLeave={() => toggleHovering(false)}
      onClick={() => {dispatch(addCowActionCreator())}} id="cowUpgrade" className="shopButton">
       {isHovering && 
          <div className="hoverDiv">
            <img alt="" height="35px" src="https://media.discordapp.net/attachments/1025460102670594119/1026563814637961287/unknown.png" className="" />
            <span>{cowCost}</span>
          </div>}
       {!isHovering &&
       <div className="shopupgradeHeaders"><h2>COW</h2></div>}
      </div>
  )
}