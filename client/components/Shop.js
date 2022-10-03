import {CowUpgrade} from './CowUpgrade';
import {FieldUpgrade} from './FieldUpgrade';
import React, {useEffect, useState} from 'react';
import { connect, useStore, useDispatch } from 'react-redux';
import {calculateActionCreator, toggleDevMode} from '../actions/actions.js';


export function ShopContainer(props) {
    const {milkCount, totalCows, cowCost, fieldCost, totalFields} = props;
    const [milk, setMilk] = useState(milkCount);
    const [cows, setCows] = useState(totalCows);
    const [fields, setFields] = useState(totalFields);
    const [cow_Cost, setCowCost] = useState(cowCost);
    const dispatch = useDispatch();
    
  useEffect(()=>{
    //
    if (milkCount !== milk || totalCows !== cows || cowCost !== cow_Cost|| fields !== totalFields) {
        setMilk(milkCount)
        setCows(totalCows)
        setFields(totalFields)
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
                <p>Fields: <strong>{fields}</strong></p>
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
        fieldCost: state.cows.fieldCost,
        totalFields: state.cows.totalFields
    }
}

export default connect(mapStateToProps, null) (ShopContainer);