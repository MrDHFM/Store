import { ActionTypes } from "../Constants/ActionType";

const initialState = {
  users: [],
};

export const usersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_USERS:
      return { ...state, users: payload };
    case ActionTypes.ADD_USERS:
      return { ...state, users: payload };
    default:
      return state;
  }
};

export const userReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_USER:
      return { ...state, ...payload };
    case ActionTypes.DELETE_USER:
      return {};
    case ActionTypes.UPDATE_USER:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export const allProductsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_PRODUCTS:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export const productByIdReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};

export const categoryReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_CATEGORIES:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export const productsByCategory = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_PRODUCTS_BY_CATEGORY:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export const productQuantity = (state = 0, { type,payload }) => {
  switch (type) {
    case ActionTypes.SET_QUANTITY:
      
      break;
  
    default:
      break;
  }
}
