import { createSlice } from '@reduxjs/toolkit'

const modePopupSlice = createSlice(
    {
        name: 'modePopup',
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

export default modePopupSlice