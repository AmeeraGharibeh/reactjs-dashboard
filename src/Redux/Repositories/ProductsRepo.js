import { getProductsStart, getProductsSuccess, getProductsFailure,
   deleteProductsStart, deleteProductsSuccess, deleteProductsFailure,
   addProductsStart, addProductsSuccess, addProductsFailure,
  updateProductsStart, updateProductsSuccess, updateProductsFailure } from "../productsRedux";
import { publicRequest } from "../../apiRequest";


export const getProducts = async (id, page, limit, dispatch) => {
  dispatch(getProductsStart());
  try {
    const res = await publicRequest.get(`categories/${id}?page=${page}&limit=${limit}`);
    console.log(res.data);
    dispatch(getProductsSuccess(res.data));
  } catch (err) {
    dispatch(getProductsFailure());
  }
};

export const getProductByID = async (id, dispatch) => {
  dispatch(getProductsStart());
  try {
    const res = await publicRequest.get(`products/${id}`);
    console.log(res.data);
    dispatch(getProductsSuccess(res.data));
  } catch (err) {
    dispatch(getProductsFailure());
  }
};
export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductsStart());
  try {
    const res = await publicRequest.delete(`products/${id}`);
    console.log(res.data);
    dispatch(deleteProductsSuccess({id}));
  } catch (err) {
    dispatch(deleteProductsFailure());
  }
};
export const addProduct = async (product, dispatch) => {
  dispatch(addProductsStart());
  try {
    const res = await publicRequest.post(`products/`, product);
    console.log(res.data);
    dispatch(addProductsSuccess(res.data));
  } catch (err) {
    dispatch(addProductsFailure());
  }
};
export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductsStart());
  try {
    const res = await publicRequest.put(`products/${id}`, product);
    console.log(res.data);
    dispatch(updateProductsSuccess(res.data));
  } catch (err) {
    dispatch(updateProductsFailure());
  }
};