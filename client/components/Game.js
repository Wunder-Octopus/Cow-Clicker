import React, {useEffect, useState} from 'react';
import {CowContainer} from './Cow';
import {ShopContainer} from './Shop';
import './styles/Game.css'

//game body component
export function Game(props) {
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