import { getStoresStart, getStoresSuccess, getStoresFailure,
   addStoresStart, addStoresSuccess, addStoresFailure,
  updateStoreStart, updateStoreSuccess, updateStoreFailure } from "../storesRedux";
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
    console.log('added store is ' + JSON.stringify(store))
    const res = await publicRequest.post(`stores/`, store);
    console.log(res.data);
    dispatch(addStoresSuccess(res.data));
  } catch (err) {
    dispatch(addStoresFailure());
  }
};
export const updateStore = async (id, store, dispatch) => {
  dispatch(updateStoreStart());
  try {
    const res = await publicRequest.put(`store/${id}`, store);
    console.log(res.data);
    dispatch(updateStoreSuccess(res.data));
  } catch (err) {
    dispatch(updateStoreFailure());
  }
};