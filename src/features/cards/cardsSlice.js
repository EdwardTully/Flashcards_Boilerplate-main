import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cards:{}
}

export const cardSlice = createSlice({
    name: 'cards',
    initialState: initialState,
    reducers: {
        addCard: (state,action)=>{
            state.cards[action.payload.id]={
                id: action.payload.id,
                front: action.payload.front,
                back: action.payload.back,
            }
        }
    }
})
export const getCards = (state)=> state.cards.cards
export const {addCard} = cardSlice.actions
export default cardSlice.reducer