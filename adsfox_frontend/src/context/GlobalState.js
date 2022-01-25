import React, { createContext, useReducer } from "react";
import { useState, useEffect } from "react";

import CanalService from "../services/CanalService";
import AppReducer from "./AppReducer";

// Initial State
const initialState = {
  canals: [
    { id: 1, name: "eryk", number: 2 },
    { id: 2, name: "af", number: 3 },
  ],
  percentages: [
      {name:"eryk",value: 40},
      {name:"af",value:60}
  ]
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  const removeCanal = (id) => {
    dispatch({
      type: "REMOVE_CANAL",
      payload: id,
    });
  };

  const addCanal = (canal) => {
    dispatch({
      type: "ADD_CANAL",
      payload: canal,
    });
  };

  const editCanal = (canal) => {
    dispatch({
      type: "EDIT_CANAL",
      payload: canal,
    });
  };

  const setCanals = (result) => {
    dispatch({
      type: "SET_CANALS",
      payload: result.data,
    });
  };

  const setPercentages = (result) => {
    dispatch({
      type: "SET_PERCENTAGE",
      payload: result.data,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch,
        canals: state.canals,
        removeCanal,
        addCanal,
        editCanal,
        setCanals,
        setPercentages,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
