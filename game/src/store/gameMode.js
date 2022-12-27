import { createSlice } from '@reduxjs/toolkit'

const gameModeSlice = createSlice(
    {
        name: 'gameMode',
        initialState: { tiles: 0 , mode: ''},
        reducers: {
            setTiles(state, action) {
                state.tiles = action.payload

            },
            setMode(state , action) {
                state.mode = action.payload

            },

        }
    }
)

export default gameModeSlice