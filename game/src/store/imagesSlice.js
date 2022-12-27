import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    images: [],
    first: { type: 0, index: -1 },
    second: { type: 0, index: -1 },
    score: 0,
    count: 0,
    matched: 0

}

const imageSlice = createSlice({
    name: 'images',
    initialState,
    reducers: {
        setImages(state, action) {
            state.images = [...action.payload].sort(() => Math.random() - 0.5)
        },

        active(state, action) {

            let index = state.images.findIndex(i => i.id === action.payload); //find index of clicked card

            //if its first card 
            if (state.first.type === 0) {

                state.first.type = state.images[index].type; //get the type of first card
                state.first.index = index;                   //get the index 
            }
            //ift its second card
            else {
                state.second.type = state.images[index].type; //get the type of second card
                state.second.index = index;                   //get the index 
            }

            state.images[index].state = 'active';        //update the state of card to active
            state.count = state.count + 1                //increase 1 count

        },

        isMatched(state) {

            //check if second card also clicked
            if (state.second.type !== 0) {

                //match the type of first and second card
                if (state.first.type === state.second.type) {

                    state.images[state.second.index].state = 'true';  // chnage the state of first card to true if matched
                    state.images[state.first.index].state = 'true';   // chnage the state of second card to true if matched
                    state.score = state.score + 1;                    // Add 1 score 
                    state.matched = state.matched + 1;                // Add 1 to matched cards

                }
                else {
                    state.images[state.second.index].state = 'wrong' //chnage the state of first card to wrong if not matched
                    state.images[state.first.index].state = 'wrong'  //chnage the state of first card to wrong if not matched
                }

                //reset type and index of first and second 
                state.first.type = 0;  
                state.first.index = -1
                state.second.type = 0;
                state.second.index = -1

            }
        },

        //reset images object values to initial state
        reset(state) {
            return {
                images: [...state.images].sort(() => Math.random() - 0.5),
                first: { type: 0, index: -1 },
                second: { type: 0, index: -1 },
                score: 0,
                count: 0,
                matched: 0
            }
        }

    }
})

export default imageSlice