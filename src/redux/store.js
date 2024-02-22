import { configureStore } from '@reduxjs/toolkit'
import taskReducer from './features/tasks/taskSlice'
import userReducer from './features/user/userSlice'

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    user: userReducer
  }
})

export default store
