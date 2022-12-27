import React from 'react'
import CardsTemp from './CardsTemp'
import Start from './Start'
import { useSelector } from 'react-redux'
import UserInfo from './UserInfo'
import CompleteModal from './CompleteModal'
import LostModal from './LostModal'
import GameModeModal from './GameModeModal'


const Home = () => {

  const state = useSelector(state => state.gameState.startGame)
  const matched = useSelector(state => state.images.matched)
  const popup = useSelector(state => state.popup.isOpen)
  const modePopup = useSelector(state => state.modePopup.isOpen)
  const clicks = useSelector(state => state.limitedClicks.clicks)
  const mode = useSelector(state => state.gameMode.mode)
  const tiles = useSelector(state => state.gameMode.tiles)


  return (
    <React.Fragment >
      <h1 className='text-center my-4 text-white'>Anime Memory Game</h1>

      {(!popup && !state) && <Start />}                           {/* display play button */}
      {popup && <UserInfo />}                                     {/* display userinfo modal on click of play button*/}
      {modePopup && <GameModeModal/>}                             {/* display game mode modal after player submit info */}
      {(state && !modePopup) && <CardsTemp />}                    {/* display game after mode selection done */}
      {tiles===12 ? (matched === 6 && <CompleteModal />): ''}     {/* display modal after game completed for 12 tiles*/}
      {tiles===16 ? (matched === 8 && <CompleteModal />): ''}     {/* display modal after game completed for 16 tiles*/}
      {tiles===20 ? (matched === 10 && <CompleteModal />): ''}    {/* display modal after game completed for 20 tiles*/}
      {mode==='restricted' && (clicks===0 && <LostModal/>)}       {/* display modal if player lose game in restricted mode*/}
      

    </React.Fragment>
  )
}

export default Home
