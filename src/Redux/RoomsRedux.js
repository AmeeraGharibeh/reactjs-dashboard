import { createSlice } from '@reduxjs/toolkit'

export const RoomsSlice = createSlice({
    name: 'rooms',
    initialState : {
        rooms : [],
        page : 0,
        limit : 0,
        totalRows : 0,
        isFetching :  false,
        error : false,
        isSuccess: false,
    },
    reducers: { 
        getRoomsStart: (state )=> {
            state.isFetching = true
            state.error = false
        },
        getRoomsSuccess: (state, action) =>{
            state.isFetching = false
            state.rooms = [...state.rooms, ...action.payload['Rooms']];
            state.page = action.payload['current_page']
            state.limit = action.payload['per_page']
            state.totalRows = action.payload['total']
        },
    
          getRoomsFailure: (state)=> {
            state.isFetching = false
            state.error = true
        },

         addRoomsStart: (state)=> {
            state.isFetching = true
            state.error = false
        },
        addRoomsSuccess: (state, action) =>{
            state.isFetching = false
            state.isSuccess = action.payload
        },
          addRoomsFailure: (state)=> {
            state.isFetching = false
            state.error = true
        },
          updateRoomsStart: (state)=> {
            state.isFetching = true
            state.error = false
        },
        updateRoomsSuccess: (state, action) =>{
            state.isFetching = false
            state.rooms[state.rooms.findIndex((item)=> item.id === action.payload.id)] = action.payload.data
        },
          updateRoomsFailure: (state)=> {
            state.isFetching = false
            state.error = true
        },

    }
});
export const { getRoomsStart, getRoomsSuccess, getRoomsFailure, 
               addRoomsStart, addRoomsSuccess, addRoomsFailure,
               updateRoomsStart, updateRoomsSuccess, updateRoomsFailure} = RoomsSlice.actions;
export default RoomsSlice.reducer;