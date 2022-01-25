export default (state, action) => {
  switch (action.type) {
    case "REMOVE_CANAL":
      return {
        ...state,
        canals: state.canals.filter((canal) => {
          return canal.id !== action.payload;
        }),
      };
    case "SET_CANALS":
      return {
        ...state,
        canals: action.payload,
      };
    case "SET_PERCENTAGE":
      return {
        ...state,
        percentages: action.payload,
      };
    case "ADD_CANAL":
      return {
        ...state,
        canals: [action.payload, ...state.canals],
      };
    case "EDIT_CANAL":
      const updateCanal = action.payload;

      const updateCanals = state.canals.map((canal) => {
        if (canal.id === updateCanal.id) {
          return updateCanal;
        }
        return canal;
      });
      return {
        ...state,
        canals: updateCanals,
      };

    default:
      return state;
  }
};
