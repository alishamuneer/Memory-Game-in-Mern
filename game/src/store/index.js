import { configureStore} from '@reduxjs/toolkit'
import imageSlice from './imagesSlice'
import gameStateSlice from './gameStateSlice'
import popupSlice from './popupSlice'
import gameCompleteSlice from './gameCompleteSlice'
import limitedClicksSlice from './limitedClicksSlice'
import gameModeSlice from './gameMode'
import modePopupSlice from './modePopupSlice'

const store = configureStore({
    reducer: {
        images: imageSlice.reducer,
        gameState: gameStateSlice.reducer,
        popup: popupSlice.reducer,
        gameComplete: gameCompleteSlice.reducer,
        limitedClicks : limitedClicksSlice.reducer,
        gameMode : gameModeSlice.reducer,
        modePopup : modePopupSlice.reducer

    }
})

export const imageActions = imageSlice.actions
export const gameStateActions = gameStateSlice.actions
export const popupActions = popupSlice.actions
export const gameCompleteActions = gameCompleteSlice.actions
export const limitedClicksActions = limitedClicksSlice.actions
export const gameModeActions = gameModeSlice.actions
export const modePopupActions = modePopupSlice.actions
export default store