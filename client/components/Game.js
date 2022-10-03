import React, {useEffect, useState} from 'react';
import CowContainer from './Cow';
import ShopContainer from './Shop';
import './styles/Game.css'
import { connect, useStore, useDispatch } from 'react-redux';
import {calculateActionCreator} from '../actions/actions.js';

//game body component
export function Game(props) {
    const [timer, setTimer] = useState(0)
    const dispatch = useDispatch()
    //setInterval ( call to dispatch (CALCULATE), 5000 ms)
    useEffect(() => {
        //runs every 5 seconds
        console.log("DISPATCHER!: ", timer)
        dispatch(calculateActionCreator())
        //triggers the new timer
        setTimeout(() => {
            setTimer(timer + 1)
        }, 5000);
    }, [timer])

    return (
        <div className="gameBody">
            <CowContainer />
            <ShopContainer />
        </div>
    )
}

// function CowContainer(props) {
//     return (
//         <div className="cowContainerDiv" >
//             <div className="hitbox">
//                 <img src={null} alt="" />
//             </div>
//         </div>
//     )
// }

// function ShopContainer(props) {
//     return (
//         <div className="shopContainerDiv">
//             <div className="infoDiv">
//             </div>
//             <div className="shopList">
//                 <div><h2>Shop</h2></div>
//                 <div className="shopOptions">
//                     <CowUpgrade />
//                     <FieldUpgrade />
//                 </div>
//             </div>
//         </div>
//     )
// }

// function CowUpgrade(props) {
//     return (
//         <div style={{border: '2px dotted black'}} className="shopButton"></div>
//     )
// }

// function FieldUpgrade(props) {
//    return (
//     <div style={{border: '2px dotted black'}} className="shopButto"></div>
//    )
// }

function ShopOptions(props) {
    return (
       <>
       </> 
    )
}