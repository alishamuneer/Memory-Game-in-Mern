import React from 'react'
import './start.css'
import { useDispatch } from 'react-redux'
import { popupActions, } from '../store';

const Start = () => {

    const dispatch = useDispatch();

   

    return (
        <React.Fragment>
            <a href="#" className="animated-button1" onClick={()=>{dispatch(popupActions.open())}}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                PLAY
            </a>
        </React.Fragment>
    )
}

export default Start
