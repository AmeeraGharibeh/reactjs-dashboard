import { createSlice } from '@reduxjs/toolkit'

export const CountriesSlice = createSlice({
    name: 'countries',
    initialState : {
        countries: [],
        isFetching: false,
        error: false
    },
    reducers: {
        getCountryStart: (state)=> {
            state.isFetching = true
            state.error = false
        },
        getCountrySuccess: (state, action) =>{
            state.isFetching = false
            state.countries = action.payload.countries
        },
          getCountryFailure: (state)=> {
            state.isFetching = false
            state.error = true
        },

         deleteCountryStart: (state)=> {
            state.isFetching = true
            state.error = false
        },
        deleteCountrySuccess: (state, action) =>{
            state.isFetching = false
            state.countries.splice(
                state.countries.findIndex((item)=> item._id === action.payload), 1
            )
        },
          deleteCountryFailure: (state)=> {
            state.isFetching = false
            state.error = true
        },

         addCountryStart: (state)=> {
            state.isFetching = true
            state.error = false
        },
        addCountrySuccess: (state, action) =>{
            state.isFetching = false
            state.countries.push(action.payload)
        },
          addCountryFailure: (state)=> {
            state.isFetching = false
            state.error = true
        },

         updateCountryStart: (state)=> {
            state.isFetching = true
            state.error = false
        },
        updateCountrySuccess: (state, action) =>{
            state.isFetching = false
            state.countries[state.countries.findIndex((item)=> item._id === action.payload.id)] = action.payload.product
        },
          updateCountryFailure: (state)=> {
            state.isFetching = false
            state.error = true
        },
    }
});
export const { getCountryStart, getCountrySuccess, getCountryFailure, 
               deleteCountryStart, deleteCountrySuccess, deleteCountryFailure,
               addCountryStart, addCountrySuccess, addCountryFailure,
               updateCountryStart, updateCountrySuccess, updateCountryFailure} = CountriesSlice.actions;
export default CountriesSlice.reducer;