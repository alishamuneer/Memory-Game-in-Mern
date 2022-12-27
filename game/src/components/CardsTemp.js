import React, { useEffect, useState } from 'react'
import Card from './Card'
import { useSelector, useDispatch } from 'react-redux'
import { gameCompleteActions, gameStateActions, imageActions, limitedClicksActions } from '../store';
import getImages from './imagesArray/imagesArray';
import axios from 'axios';
import './btnHover.css';

const CardsTemp = () => {

  const images = useSelector(state => state.images.images)
  const score = useSelector(state => state.images.score)
  const count = useSelector(state => state.images.count)
  const gameComplete = useSelector(state => state.gameComplete.start)
  const clicks = useSelector(state => state.limitedClicks.clicks)
  const tiles = useSelector(state => state.gameMode.tiles)
  const mode = useSelector(state => state.gameMode.mode)
  const matched = useSelector(state => state.images.matched)
  const [refresh, setRefresh] = useState(true);
  const [name, setName] = useState([])
  const [id, setId] = useState('')
  const dispatch = useDispatch();



  // reset all states to initial values 
  const reset = () => {

    setRefresh(!refresh)
    dispatch(imageActions.setImages(getImages(tiles))) //send images array according to tiles
    dispatch(imageActions.reset()) // reset states of images
    dispatch(limitedClicksActions.reset()) //reset clicks to initail value
  }

  useEffect(() => {

    //if game completes then reset states 
    if (gameComplete === 1) {
      reset();
      dispatch(gameCompleteActions.reset())
    }

  }, [gameComplete])

  useEffect(() => {
    //get player name & id from db
    axios.get('http://localhost:3001/api/playerDetails')
      .then(res => {
        setName(res.data[0].name)
        setId(res.data[0]._id)
        console.log(res.data)
      })

  }, [])

  useEffect(() => {
    //post score & clicks to db according to tiles
    if ((tiles === 12 && matched === 6) || (tiles === 16 && matched === 8) || (tiles === 20 && matched === 10)) {
      //save clicks for free mode
      if (mode === 'free') {
        const details = {
          clicks: count,
          playerId: id
        }

        axios.post('http://localhost:3001/api/gameDetails/free', details) //post free mode details to db
          .then(res => {
            console.log(res)
          })
      }
      //save clicks and score for restricted mode
      else {
        const details = {
          score,
          clicks: count,
          playerId: id
        }

        axios.post('http://localhost:3001/api/gameDetails/restricted', details) //post restricted mode details to db
          .then(res => {
            console.log(res)
          })
      }

    }
  }, [matched])

  return (
    <React.Fragment >
      <div className=' text-center flex justify-around'>
        <div className='text-white self-center font-bold py-[7px] px-[10px] glow-on-hover'>Now Playing : <span className=' uppercase'>{name}</span>
        </div>
        <div className='flex w-[170px] justify-between'>
          <button className='text-white bg-[url("./images/btn.jpg")]  bg-right font-bold bg-zinc-700 p-2 mb-2 rounded-lg '
            onClick={reset}
          >
            Restart
          </button>
          <button className='text-white bg-[url("./images/btn.jpg")] bg-right font-bold bg-zinc-700 p-2 mb-2 rounded-lg '
            onClick={() => { dispatch(gameStateActions.exitGame()) }}
          >
            Home
          </button>
        </div>

      </div>
      {/* 12 tiles game */}
      {tiles === 12 &&
        <div key={refresh} className='h-[600px] w-[520px] bg-[#ffffff14] grid grid-cols-3 grid-rows-4 gap-4 p-10'>

          {images.map((image, i) => (
            <Card data={image} key={i} />
          ))
          }

        </div>
      }
      {/* 16 tiles game */}
      {tiles === 16 &&
        <div key={refresh} className='h-[600px] w-[655px] bg-[#ffffff14] grid grid-cols-4 grid-rows-4 gap-4 p-10 '>

          {images.map((image, i) => (
            <Card data={image} key={i} />
          ))
          }

        </div>
      }
      {/* 20 tiles game */}
      {tiles === 20 &&
        <div key={refresh} className='h-[600px] w-[810px] bg-[#ffffff14] grid grid-cols-5 grid-rows-4 gap-4 p-10'>

          {images.map((image, i) => (
            <Card data={image} key={i} />
          ))
          }

        </div>
      }

      <div className='text-white text-center mt-[10px] flex justify-around'>
        {mode === 'restricted' && <p>Score = {score}</p>} {/* display score for restricted mode*/}
        {mode === 'free' && <p>Clicks= {count}</p>} {/* display clicks for free mode*/}
        {mode === 'restricted' && <p>Remaining Clicks= {clicks}</p>} {/* display clicks for restricted mode*/}
        <p>Mode : {mode}</p> {/* display type of mode*/}
      </div>

    </React.Fragment>
  )
}

export default CardsTemp
