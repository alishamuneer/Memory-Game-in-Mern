import { createSlice } from '@reduxjs/toolkit'

const initialState = { start: -1 }
const gameCompleteSlice = createSlice(
    {
        name: 'gameComplete',
        initialState,
        reducers: {
            yes(state) {
                state.start = 1;
            },
            no(state) {
                state.start = 0

            },
            reset(){
                return initialState
            }

        }
    }
)

export default gameCompleteSlice