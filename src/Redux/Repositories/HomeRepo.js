import { getHomeStart, getHomeSuccess, getHomeFailure, } from "../homeRedux";
import { publicRequest } from "../../apiRequest";
import axios from "axios";

export const getHome = async (dispatch) => {
  dispatch(getHomeStart());
  try {
    const res = await axios.get('localhost:5000/',);
    console.log(res)
    dispatch(getHomeSuccess(res.data));
  } catch (err) {
    dispatch(getHomeFailure());
  }
};