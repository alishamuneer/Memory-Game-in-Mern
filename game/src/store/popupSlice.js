import { createSlice } from '@reduxjs/toolkit'

const popupSlice = createSlice(
    {
        name: 'popup',
        initialState: { isOpen: false },
        reducers: {
            open(state) {
                state.isOpen = true

            },
            close(state) {
                state.isOpen = false

            },

        }
    }
)

export default popupSlice