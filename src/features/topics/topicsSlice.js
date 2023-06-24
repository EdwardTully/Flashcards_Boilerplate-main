import { createSlice } from '@reduxjs/toolkit'

const initialState = { topics: {} }

export const topicSlice = createSlice({
    name: 'topics',
    initialState: initialState,
    reducers: {
        addTopic: (state, action)=>{
            state.topics[action.payload.id] = {
                id: action.payload.id,
                name: action.payload.name,
                icon: action.payload.icon,
                quizIds: []
            }
        },
        addQuizIds: (state, action)=>{
            const {quizId, topicId}=action.payload
            state.topics[topicId].quizIds.push(quizId)
        }

    }
})

export const topicSelector = (state)=>
    state.topics.topics

export const {addTopic, addQuizIds}=topicSlice.actions
export default topicSlice.reducer