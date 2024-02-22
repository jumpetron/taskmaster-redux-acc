import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: 'Ahmed',
  email: 'ahmed@gmail.com',
  userTasks: []
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {}
})

export default userSlice.reducer
