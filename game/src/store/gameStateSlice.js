import { createSlice } from '@reduxjs/toolkit'

const gameStateSlice = createSlice(
    {
        name: 'gameState',
        initialState: { startGame: false },
        reducers: {
            startGame(state) {
                state.startGame = true

            },
            exitGame(state) {
                state.startGame = false

            },

        }
    }
)

export default gameStateSlice