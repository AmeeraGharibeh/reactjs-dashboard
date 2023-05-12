import { getCountryStart, getCountrySuccess, getCountryFailure,
   addCountryStart, addCountrySuccess, addCountryFailure,
  updateCountryStart, updateCountrySuccess, updateCountryFailure } from "../CountriesRedux";
import { publicRequest } from "../../apiRequest";


export const getCountries = async (dispatch, page, limit) => {
  dispatch(getCountryStart());
  try {
    const res = await publicRequest.get(`country/?page=${page}&limit=${10}`);
    dispatch(getCountrySuccess(res.data));
  } catch (err) {
    dispatch(getCountryFailure());
  }
};


export const addCountry = async (country, dispatch) => {
  dispatch(addCountryStart());
  try {
    console.log('added Country is ' + JSON.stringify(country))
    const res = await publicRequest.post(`country/`, country);
    dispatch(addCountrySuccess(res));
  } catch (err) {
    dispatch(addCountryFailure());
  }
};
export const updateCountry = async (id, Country, dispatch) => {
  dispatch(updateCountryStart());
  try {
    const res = await publicRequest.put(`country/${id}`, Country);
    console.log(res.data);
    dispatch(updateCountrySuccess(res.data));
  } catch (err) {
    dispatch(updateCountryFailure());
  }
};