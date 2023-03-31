import { combineReducers } from "redux";

import {
  usersReducer,
  userReducer,
  categoryReducer,
  productsByCategory,
  allProductsReducer,
  productByIdReducer,
} from "./UserReducer";

const reducers = combineReducers({
  allUsers: usersReducer,
  selectedUser: userReducer,
  allProducts: allProductsReducer,
  productById: productByIdReducer,
  categories: categoryReducer,
  productsByCategory: productsByCategory,
});

export default reducers;
