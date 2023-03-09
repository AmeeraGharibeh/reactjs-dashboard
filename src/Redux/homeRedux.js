import { createSlice } from '@reduxjs/toolkit'

export const homeSlice = createSlice({
    name: 'home',
    initialState : {
        categories : [],
        countries : [],
        isFetching :  false,
        error : false,
    },
    reducers: {
        getHomeStart: (state )=> {
            state.isFetching = true
            state.error = false
        },
        getHomeSuccess: (state, action) =>{
            state.isFetching = false
            state.categories = action.payload['categories'];
            state.countries = action.payload['countries']
        },
    
          getHomeFailure: (state)=> {
            state.isFetching = false
            state.error = true
        },

    }
});
export const { getHomeStart, getHomeSuccess, getHomeFailure} = homeSlice.actions;
export default homeSlice.reducer;