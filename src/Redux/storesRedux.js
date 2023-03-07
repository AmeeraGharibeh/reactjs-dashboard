import { createSlice } from '@reduxjs/toolkit'

export const storeSlice = createSlice({
    name: 'store',
    initialState : {
        stores : [],
        page : 0,
        limit : 0,
        totalRows : 0,
        isFetching :  false,
        error : false,
    },
    reducers: {
        getStoresStart: (state )=> {
            state.isFetching = true
            state.error = false
        },
        getStoresSuccess: (state, action) =>{
            state.isFetching = false
            state.stores = [...state.stores, ...action.payload.data];
            state.page = action.payload['current_page']
            state.limit = action.payload['per_page']
            state.totalRows = action.payload['total']
        },
    
          getStoresFailure: (state)=> {
            state.isFetching = false
            state.error = true
        },

         addStoresStart: (state)=> {
            state.isFetching = true
            state.error = false
        },
        addStoresSuccess: (state, action) =>{
            state.isFetching = false
            state.stores.push(action.payload)
        },
          addStoresFailure: (state)=> {
            state.isFetching = false
            state.error = true
        },

    }
});
export const { getStoresStart, getStoresSuccess, getStoresFailure, 
               addStoresStart, addStoresSuccess, addStoresFailure,} = storeSlice.actions;
export default storeSlice.reducer;