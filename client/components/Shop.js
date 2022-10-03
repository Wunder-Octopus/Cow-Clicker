import {CowUpgrade} from './CowUpgrade';
import {FieldUpgrade} from './FieldUpgrade';
import React, {useEffect, useState} from 'react';
import { connect, useStore, useDispatch } from 'react-redux';
import {calculateActionCreator, toggleDevMode} from '../actions/actions.js';


export function ShopContainer(props) {
    const {milkCount, totalCows, cowCost, fieldCost} = props;
    const [milk, setMilk] = useState(milkCount)
    const [cows, setCows] = useState(totalCows)
    const [cow_Cost, setCowCost] = useState(cowCost)
    const dispatch = useDispatch();
    
  useEffect(()=>{
    //
    if (milkCount !== milk || totalCows !== cows || cowCost !== cow_Cost) {
        setMilk(milkCount)
        setCows(totalCows)
        setCowCost(cowCost)
    }
  })

  return (
      <div onClick={() => {dispatch(toggleDevMode())}} className="shopContainerDiv">
          <div className="infoDiv">
            <h2>Stats</h2>
            <div className="statsDiv">
                <p>Milk: <strong>{milk}</strong></p>
                <p>Cattle: <strong>{cows}</strong></p>
                <p>Cow Cost:<strong>{cow_Cost}</strong></p>
            </div>
          </div>
          <div className="shopDiv">
              <div><h2>Shop</h2></div>
              <div className="shopOptions">
                  <CowUpgrade totalCowCost={cow_Cost} />
                  <FieldUpgrade totalfieldCost={fieldCost} />
              </div>
          </div>
      </div>
  )
}

const mapStateToProps = function(state) {
    return {
        milkCount: state.cows.milk,
        totalCows: state.cows.totalCows,
        cowCost: state.cows.cowCost,
        fieldCost: state.cows.fieldCost
    }
}

export default connect(mapStateToProps, null) (ShopContainer);