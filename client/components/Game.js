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