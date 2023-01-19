// Store Code Here

import {
    applyMiddleware,
    combineReducers,
    compose,
    legacy_createStore,
  } from "redux";
  
import thunk from "redux-thunk";
import { adminReducer } from "./admin/admin.reducer";
import { authAdminReducer } from "./adminAuth/adminAuth.reducer";
import { cartReducer } from "./cart/cart.reducer";

  
  const composeInhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const rootReducer = combineReducers({
        adminProductsManager : adminReducer,
        cartManager : cartReducer,
        adminAuthManager : authAdminReducer,
  });
  export const store = legacy_createStore(
    rootReducer,
    composeInhancer(applyMiddleware(thunk))
  );