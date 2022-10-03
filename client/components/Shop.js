import {CowUpgrade} from './CowUpgrade';
import {FieldUpgrade} from './FieldUpgrade';
import React, {useEffect, useState} from 'react';
import { connect, useStore } from 'react-redux';


export function ShopContainer(props) {
    const {milkCount} = props;
    const [milk, setMilk] = useState(milkCount)

  useEffect(()=>{
    //
    if (milkCount !== milk) {
        setMilk(milkCount)
    }
  })

  return (
      <div className="shopContainerDiv">
          <div className="infoDiv">
            <h2>Stats</h2>
            <div className="statsDiv">
                <p>Milk: <strong>{milk}</strong></p>
            </div>
          </div>
          <div className="shopDiv">
              <div><h2>Shop</h2></div>
              <div className="shopOptions">
                  <CowUpgrade />
                  <FieldUpgrade />
              </div>
          </div>
      </div>
  )
}

const mapStateToProps = function(state) {
    return {
        milkCount: state.cows.milk
    }
}

export default connect(mapStateToProps, null) (ShopContainer);