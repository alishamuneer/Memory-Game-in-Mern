import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { imageActions, limitedClicksActions, } from '../store';
import { useEffect } from 'react';
import qs from '../images/qs.jpg'

const Card = (prop) => {

  const mode = useSelector(state => state.gameMode.mode)

  
  const dispatch = useDispatch();
  
  const active = () => {
    
    if(mode==='restricted'){

      dispatch(limitedClicksActions.decrease());
    }
    dispatch(imageActions.active(prop.data.id))

  }

  useEffect(() => {
    setTimeout(() => {
      if (prop.data.state === 'active') {
        dispatch(imageActions.isMatched(prop.data.id))
  
      }
    }, 500);
    
  }, [active, prop.data.state])

 

  return (
    <React.Fragment>
      <div  className={`bg-[#000000] flex items-center justify-center text-white cursor-pointer ${prop.data.state === 'false' ? 'flip' : ''} ${prop.data.state === 'active' ? 'flip2' : ''}${prop.data.state === 'wrong' ? 'flip' : ''} ${prop.data.state === 'true' ? 'pointer-events-none' : ''}`}
        onClick={active}>
        <img src={qs} alt="click" className="w-full h-[98%] scale-x-[-1]"/>
        <img
          className={`max-h-full w-[130px] h-[114px] absolute ${prop.data.state === 'false' ? 'scale' : ''}  ${prop.data.state === 'active' ? 'scale2' : ''}${prop.data.state === 'wrong' ? 'scale' : ''}`}
          src={prop.data.img}
          alt='img'
         />
      </div>
      
    </React.Fragment>
  )
}

export default Card
