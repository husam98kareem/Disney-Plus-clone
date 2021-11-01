import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/user/userSlice'
import movieSlice from '../features/movie/movieSlice'
import userSlice from '../features/user/userSlice'

export const store = configureStore({
    reducer: {
        movie: movieSlice,
        user: userSlice
    },
})