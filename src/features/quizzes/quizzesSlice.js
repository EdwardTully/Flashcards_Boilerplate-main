import { createSlice } from "@reduxjs/toolkit";
import { addQuizIds } from "../topics/topicsSlice";

const initialState = {
    quizzes: {},
}

export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: initialState,
    reducers: {
        addQuiz: (state, action)=>{
            state.quizzes[action.payload.quizId]={
                quizId:action.payload.quizId,
                name: action.payload.name,
                topicId: action.payload.topicId,
                cardIds: action.payload.cardIds

            }
           

        }
    }

})

export const newQuizAndAssociationThunk=(payload)=>{
    return (dispatch)=>{
       
        dispatch(addQuiz( payload))
        //PAYLOADS are OBJECTS, below has to be sent in that form!
       dispatch(addQuizIds({quizId:payload.quizId, topicId:payload.topicId }))
      
    }
    
}

export const quizSelector = (state)=> state.quizzes.quizzes

export const {addQuiz} = quizzesSlice.actions
export default quizzesSlice.reducer