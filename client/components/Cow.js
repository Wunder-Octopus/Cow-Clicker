import React, {useEffect, useState} from 'react';
import {clickCowActionCreator} from '../actions/actions.js';
import { connect, useDispatch, useStore } from 'react-redux';
import { bindActionCreators } from 'redux';


function CowContainer(props) {
   const dispatch = useDispatch();
   const store = useStore()

    return (
      <div className="cowContainerDiv" >
          <div onClick={() => {
            dispatch(clickCowActionCreator())
            console.log(store.getState())
          }} className="hitbox">
              <img src={'https://i.imgur.com/sQusjAS.png'} alt="" />
          </div>
      </div>
  )
}

function mapDispatchToProps(dispatch) {
    return({
        clickCow : () => dispatch({type: 'CLICK'})
    })
}

export default connect(mapDispatchToProps)(CowContainer);
