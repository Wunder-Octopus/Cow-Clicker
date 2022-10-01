import {CowUpgrade} from './CowUpgrade';
import {FieldUpgrade} from './FieldUpgrade';
import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';


export function ShopContainer(props) {
  const [milk, setMilk] = useState(props.milk)

  useEffect(()=>{
    if (props.milk !== milk) {
        setMilk(props.milk)
    }
  }, [milk])

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
        milk: state.cows.milk
    }
}

export default connect(mapStateToProps, null) (ShopContainer);