import { getStoresStart, getStoresSuccess, getStoresFailure,
   addStoresStart, addStoresSuccess, addStoresFailure } from "../storesRedux";
import { publicRequest } from "../../apiRequest";


export const getStores = async (dispatch, page, limit) => {
  dispatch(getStoresStart());
  try {
    const res = await publicRequest.get(`stores?page=${page}&limit=${15}`);
    dispatch(getStoresSuccess(res.data));
  } catch (err) {
    dispatch(getStoresFailure());
  }
};

export const getStoreByID = async (id, dispatch) => {
  dispatch(getStoresStart());
  try {
    const res = await publicRequest.get(`stores/${id}`);
    console.log(res.data);
    dispatch(getStoresSuccess(res.data));
  } catch (err) {
    dispatch(getStoresFailure());
  }
};

export const addStore = async (store, dispatch) => {
  dispatch(addStoresStart());
  try {
    const res = await publicRequest.post(`stores/`, store);
    console.log(res.data);
    dispatch(addStoresSuccess(res.data));
  } catch (err) {
    dispatch(addStoresFailure());
  }
};
