import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    auth: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        LoggedIn: (state) => {
            state.auth = true
        },
        LoggedOut: (state) => {
            state.auth = false
        }
    }
})

export const { LoggedIn, LoggedOut } = authSlice.actions

export default authSlice.reducer