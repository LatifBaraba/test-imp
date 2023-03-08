import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    posts: [],
}

export const postSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        storePosts: (state, action) => {
            state.posts = [...action.payload]
        },
        createPost: (state, action) => {
            state.posts = [action.payload, ...state.posts]
        },
        deletePost: (state, action) => {
            state.posts = state.posts.filter(post => action.payload != post.id)
        },
        editPost: (state, action) => {
            state.posts = [action.payload, ...state.posts.filter(post => action.payload.id != post.id)]
        }
    },
})

export const { storePosts, createPost, deletePost, editPost } = postSlice.actions

export default postSlice.reducer
