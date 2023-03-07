import { loginFailure, loginStart, loginSuccess , logout} from "../userRedux";
import { publicRequest } from "../../apiRequest";


export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    console.log(res.data);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
export const logoutUser = (dispatch) => {
  dispatch(logout());
};