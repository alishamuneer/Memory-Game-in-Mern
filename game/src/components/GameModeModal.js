import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { gameModeActions, gameStateActions, imageActions, limitedClicksActions, modePopupActions } from '../store'
import getImages from './imagesArray/imagesArray'
import './gameModeModal.css'
import { motion, AnimatePresence } from "framer-motion"

const GameModeModal = () => {

    const [name, setName] = useState([])
    const [tiles, setTiles] = useState(0)
    const [mode, setMode] = useState('')
    const [numOfClicks, setNumOfClicks] = useState(0)
    const dispatch = useDispatch();

    //save selectd tiles
    const tilesRadioHandler = (e) => {
        setTiles(parseInt(e.target.value))

    }
    //save selected mode
    const modeRadioHandler = (e) => {
        setMode(e.target.value)
    }
    const clicksRadioHandler = (e) => {
        setNumOfClicks(e.target.value)
    }

    const submitHandler = (e) => {

        e.preventDefault();
        dispatch(gameModeActions.setTiles(tiles)) //save tiles to redux store
        dispatch(gameModeActions.setMode(mode)) //save mode to redux store
        dispatch(limitedClicksActions.setClicks(numOfClicks))  //save clicks to redux store
        dispatch(imageActions.setImages(getImages(tiles))) //send images array to imagesSlice
        dispatch(gameStateActions.startGame()) // chnages state to true to display game
        dispatch(modePopupActions.close()) //closes game mode modal


    }

    useEffect(() => {
        //get name of player from db
        axios.get('http://localhost:3001/api/playerDetails')
            .then(res => {
                setName(res.data[0].name)
            })
    })

    return (
        <React.Fragment>
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.5 } }}
                    exit={{ opacity: 0 }}
                    className='fixed left-0 top-0 bg-[rgb(26_8_8_/_75%)] w-full h-[100vh]'
                >
                    <motion.div
                        initial={{ x: 100 }}
                        animate={{ x: 0, transition: { duration: 0.5 } }}
                        exit={{ x: 100 }}
                        className='relative w-[43%] min-h-[432px] bg-[#040404d9] rounded-lg border-[#785c5c87] border shadow-[5px_10px_50px_#b1565661] m-[20px_auto] p-[20px] top-[118px]'
                    >
                        <div className='text-[20px] rounded-full bg-[#202020] w-[30px] font-bold text-center float-right cursor-pointer text-red-600' onClick={() => { dispatch(modePopupActions.close()) }}>x</div>
                        <h2 className=' text-white text-center'>Welcome {name}</h2>
                        <form className=' mt-[50px] text-white text-center' onSubmit={submitHandler}>
                            <div>
                                <label className='mt-[10px] font-bold text-[20px]'>Select No. of tiles:</label><br />
                                <div className='mt-[16px]'>
                                    <input className='option-input radio' type="radio" name="tiles" value='12' onChange={tilesRadioHandler} />
                                    <label htmlFor="12">12</label>
                                    <input className='ml-[50px] option-input radio' type="radio" name="tiles" value="16" onChange={tilesRadioHandler} />
                                    <label htmlFor="16">16</label>
                                    <input className='ml-[50px] option-input radio' type="radio" name="tiles" value="20" required='required' onChange={tilesRadioHandler} />
                                    <label htmlFor="20">20</label><br />
                                </div>
                            </div>
                            <div className='mt-[23px] '>
                                <label className='mt-[10px] font-bold text-[20px]'>Select Mode:</label><br />
                                <div className='mt-[16px]'>
                                    <input className='option-input radio ml-[50px]' type="radio" name="mode" value="free" onChange={modeRadioHandler} />
                                    <label htmlFor="free">Free</label>
                                    <input className='ml-[50px] option-input radio' type="radio" name="mode" value="restricted" required='required' onChange={modeRadioHandler} />
                                    <label htmlFor="restricted">Clicks restricted</label><br />
                                </div>
                            </div>
                            {mode === "restricted" &&
                                <div className='mt-[23px]'>
                                    <label className='mt-[10px] font-bold text-[20px]'>Type No. of clicks: <br />
                                        <span className='text-[#707070] text-[15px] mr-[15px] '>(within 12 to 60)-</span>
                                    </label>
                                    <input className='text-black  mt-[15px] text-center' type='number' name='clicks' min="12" max="60" onChange={clicksRadioHandler} />
                                </div>
                            }
                            <div className='text-center'>
                                <button className=' bg-[#3f0d0d] mt-[30px] p-[10px] rounded-md text-white'>Done</button>
                            </div>
                        </form>
                    </motion.div>
                </motion.div>
            </AnimatePresence>
        </React.Fragment>
    )
}

export default GameModeModal
