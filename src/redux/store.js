import { configureStore } from '@reduxjs/toolkit'
import postReducer from '../redux/post/postSlice'
import usersReducer from '../redux/users/userSlice'

export const store = configureStore({
  reducer: {
    posts:postReducer,
    users:usersReducer
  },
})
