import React, {useEffect, useState} from 'react';
import { clickCowActionCreator } from '../actions/actions';
import { connect } from 'react-redux';


const mapDispatchToProps = dispatch => {
    return {
      onCowClick: () => { // handles onTodoClick prop's call here
        dispatch(clickCowActionCreator())
      }
    }
}


export function CowContainer(props) {
    const {onCowClick} = props;  //{ClickMilk()}


    function handleClick(){
        props.onCowClick();
    }  
    return (
      <div className="cowContainerDiv" >
          <div onClick={handleClick} className="hitbox">
              <img src={'https://i.imgur.com/sQusjAS.png'} alt="" />
          </div>
      </div>
  )
}

// function mapDispatchToProps(dispatch) {
//     return({
//         clickMilk : () => dispatch(clickCowActionCreator())
//     })
//     // dispatch({ type: 'CLICK' })
// }




export default connect(null, mapDispatchToProps) (CowContainer);