import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { gameCompleteActions, gameStateActions, modePopupActions, imageActions, limitedClicksActions } from '../store'
import { motion, AnimatePresence } from "framer-motion"
import win from '../images/win.gif'
import axios from 'axios'

const CompleteModal = () => {

  const score = useSelector(state => state.images.score)
  const clicks = useSelector(state => state.images.count)
  const mode = useSelector(state => state.gameMode.mode)
  const dispatch = useDispatch();
  const [id, setId] = useState('')
  const [prevClicks, setPrevClicks] = useState(0)

  const resetStates = () => {
    dispatch(imageActions.reset())
    dispatch(limitedClicksActions.reset())
  }


  const exitGame = () => {
    resetStates()
    dispatch(gameStateActions.exitGame())
  }

  const changeMode = () => {
    setPrevClicks(0);
    resetStates();
    dispatch(modePopupActions.open());
  }

  useEffect(() => {
    //get player name & id from db
    axios.get('http://localhost:3001/api/playerDetails')
      .then(res => {
        setId(res.data[0]._id)
      })

  }, [])

  useEffect(() => {
    //get previos clicks of player for free mode
      axios.get(`http://localhost:3001/api/gameDetails/${mode}`)
        .then(res => {
          if (res.data[0].playerId === id) {
            setPrevClicks(res.data[0].clicks)
          }
        })
    }
   )

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
            className='relative text-center w-[29%] min-h-[300px] bg-[#040404d9] rounded-lg  border-[#785c5c87] border shadow-[5px_10px_50px_#b1565661] m-[20px_auto] p-[20px] top-[230px]'
          >
            <div className='flex'>
              <img src={win} alt='animation gif' className='w-[100px] h-[50px]' />
              <img src={win} alt='animation gif' className='w-[100px] h-[50px]' />
              <img src={win} alt='animation gif' className='w-[100px] h-[50px]' />
              <img src={win} alt='animation gif' className='w-[100px] h-[50px]' />
            </div>
            <h2 className='text-white  mb-[30px]'>You Win</h2>
            {mode === 'restricted' && <p className='text-white mb-[5px] '>Your Score: {score} </p>}
            <p className='text-white mb-[5px]'>Number of clicks: {clicks} </p>
            {prevClicks !== 0 && <p className='text-white mb-[5px]'>Your previos clicks: {prevClicks} </p>}
            <p className='text-white  mt-[20px]'>Do you wanna play again ?</p>
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

export default CompleteModal
