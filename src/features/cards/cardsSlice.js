import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cards:{}
}

export const cardSlice = createSlice({
    name: 'cards',
    initialState: initialState,
    reducers: {
        addCard: (state,action)=>{
            state.cards[action.payload.cardId]={
                cardId: action.payload.cardId,
                front: action.payload.front,
                back: action.payload.back,
            }
        }
    }
})
export const getCards = (state)=> state.cards.cards
export const {addCard} = cardSlice.actions
export default cardSlice.reducer