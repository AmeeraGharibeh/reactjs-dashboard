import { getHomeStart, getHomeSuccess, getHomeFailure, } from "../homeRedux";
import { publicRequest } from "../../apiRequest";
import axios from "axios";

export const getHome = async (dispatch) => {
  dispatch(getHomeStart());
  try {
    const res = await axios.get('https://6i308wcxza.execute-api.eu-west-1.amazonaws.com/api/home',);
    console.log(res)
    dispatch(getHomeSuccess(res.data));
  } catch (err) {
    dispatch(getHomeFailure());
  }
};