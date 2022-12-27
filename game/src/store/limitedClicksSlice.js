import { createSlice } from '@reduxjs/toolkit'

const initialState = { clicks: -1, totalClicks : 0 }
const limitedClicksSlice = createSlice(
    {
        name: 'clicks',
        initialState,
        reducers: {

            setClicks(state, action) {
                state.clicks = action.payload
                state.totalClicks = action.payload
            },

            decrease(state) {
                state.clicks = state.clicks - 1;

            },
            reset(state) {
                return {
                    clicks: state.totalClicks,
                    totalClicks: state.totalClicks
                }
            }

        }
    }
)

export default limitedClicksSlice