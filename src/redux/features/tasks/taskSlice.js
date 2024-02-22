import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tasks: []
}

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      state.tasks.push({
        id: crypto.randomUUID(),
        status: 'pending',
        ...payload
      })
    },
    removeTask: (state, { payload }) => {
      state.tasks = state.tasks.filter((task) => task.id !== payload)
    },
    updateStatus: (state, { payload }) => {
      const target = state.tasks.find((task) => task.id === payload.id)
      target.status = payload.status
    }
  }
})

export const { addTask, removeTask, updateStatus } = taskSlice.actions

export default taskSlice.reducer
