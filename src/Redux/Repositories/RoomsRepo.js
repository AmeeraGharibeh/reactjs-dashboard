import { getRoomsStart, getRoomsSuccess, getRoomsFailure,
   //deleteRoomsStart, deleteRoomsSuccess, deleteRoomsFailure,
   addRoomsStart, addRoomsSuccess, addRoomsFailure,
  updateRoomsStart, updateRoomsSuccess, updateRoomsFailure } from "../RoomsRedux";
import { publicRequest } from "../../apiRequest";


export const getRooms = async (page, limit, dispatch) => {
  dispatch(getRoomsStart());
  try {
    const res = await publicRequest.get(`rooms/?page=${page}&limit=${limit}`);
    console.log(res.data);
    dispatch(getRoomsSuccess(res.data));
  } catch (err) {
    dispatch(getRoomsFailure());
  }
};

export const getRoomsByID = async (id, dispatch) => {
  dispatch(getRoomsStart());
  try {
    const res = await publicRequest.get(`rooms/${id}`);
    console.log(res.data);
    dispatch(getRoomsSuccess(res.data));
  } catch (err) {
    dispatch(getRoomsFailure());
  }
};
/*export const deleteRooms = async (id, dispatch) => {
  dispatch(deleteRoomsStart());
  try {
    const res = await publicRequest.delete(`rooms/${id}`);
    console.log(res.data);
    dispatch(deleteRoomsSuccess({id}));
  } catch (err) {
    dispatch(deleteRoomsFailure());
  }
};*/
export const addRooms = async (Rooms, dispatch) => {
  dispatch(addRoomsStart());
  try {
    const res = await publicRequest.post(`rooms/`, Rooms);
    console.log(res.data);
    dispatch(addRoomsSuccess(res.data));
  } catch (err) {
    dispatch(addRoomsFailure());
  }
};
export const updateRooms = async (id, Rooms, dispatch) => {
  dispatch(updateRoomsStart());
  try {
    const res = await publicRequest.put(`rooms/${id}`, Rooms);
    console.log(res.data);
    dispatch(updateRoomsSuccess(res.data));
  } catch (err) {
    dispatch(updateRoomsFailure());
  }
};