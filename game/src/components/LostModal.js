import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { gameCompleteActions, gameStateActions, imageActions, limitedClicksActions, modePopupActions } from '../store'
import { motion, AnimatePresence } from "framer-motion"

const LostModal = () => {

    const score = useSelector(state => state.images.score)
    const dispatch = useDispatch();

    const resetStates = () => {
        dispatch(imageActions.reset())
        dispatch(limitedClicksActions.reset())
    }
    const exitGame = () => {
        resetStates()
        dispatch(gameStateActions.exitGame())
    }

    const changeMode = () => {
        resetStates()
        dispatch(modePopupActions.open())
    }

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
                        initial={{ scale: 0 }}
                        animate={{ scale: 1, transition: { duration: 0.5 } }}
                        exit={{ scale: 0 }}
                        className='relative text-center w-[36%] min-h-[300px] bg-[#040404d9] rounded-lg m-[20px_auto] p-[20px] top-[230px]'
                    >
                        <h2 className='text-red-500 '>You Lost</h2>
                        <p className='text-white  mb-[5px] mt-[15px]'>Out of clicks</p>
                        <p className='text-white mb-[5px]  mt-[15px]'>Your Score: {score} </p>
                        <p className='text-white  mt-[15px]'>Do you wanna play again ?</p>
                        <div className='flex justify-center mt-[20px] mb-[30px]'>
                            <button className='text-white bg-[#220c0c] p-[10px] rounded-full mr-[45px]' onClick={() => { dispatch(gameCompleteActions.yes()) }}>Yes</button>
                            <button className='text-white bg-[#220c0c] p-[10px] rounded-full' onClick={exitGame}>No</button>
                        </div>
                        <button className='text-white bg-[#220c0c] p-[10px] rounded-lg' onClick={changeMode}>Change Mode</button>
                    </motion.div>
                </motion.div>
            </AnimatePresence>
        </React.Fragment>
    )
}

export default LostModal
