import { ActionTypes } from "../Constants/ActionType";

export const getUsers = (users) => {
  return {
    type: ActionTypes.GET_USERS,
    payload: users,
  };
};
export const getUser = (user) => {
  return {
    type: ActionTypes.GET_USER,
    payload: user,
  };
};

export const addUser = (user) => {
  return {
    type: ActionTypes.ADD_USERS,
    payload: user,
  };
};

export const updateUser = (user) => {
  return {
    type: ActionTypes.UPDATE_USER,
    payload: user,
  };
};

export const deleteUser = () => {
  return {
    type: ActionTypes.DELETE_USER,
  };
};

export const getAllProducts = (products) => {
  return {
    type: ActionTypes.GET_PRODUCTS,
    payload: products,
  };
};

export const getProductById = (product) => {
  return {
    type: ActionTypes.GET_PRODUCT,
    payload: product,
  };
};

export const getCategories = (categories) => {
  return {
    type: ActionTypes.GET_CATEGORIES,
    payload: categories,
  };
};

export const getProductsByCategory = (category) => {
  return {
    type: ActionTypes.GET_PRODUCTS_BY_CATEGORY,
    payload: category,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};

export const productQuantity = (quantity) => {
  return {
    type: ActionTypes.SET_QUANTITY,
    payload: quantity,
  };
};
