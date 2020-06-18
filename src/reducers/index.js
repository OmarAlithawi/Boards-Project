import { combineReducers } from "redux";

const currentBoardIDReducer = (state = [], action) => {
  switch (action.type) {
    case "CURRENT_BOARD_ID":
      return action.payload;
    default:
      return state;
  }
};
const collectionNameReducer = (state = [], action) => {
  switch (action.type) {
    case "COLLECTION_NAME":
      return action.payload;
    default:
      return state;
  }
};
const boardsIDsReducer = (state = [], action) => {
  switch (action.type) {
    case "BOARDS_IDS":
      return [...state, action.payload];
    default:
      return state;
  }
};

const allItemsIdsReducer = (state = [], action) => {
  switch (action.type) {
    case "ITEMS_IDS":
      return [...state, action.payload];
    default:
      return state;
  }
};

const listItemIdReducer = (state = "", action) => {
  switch (action.type) {
    case "ITEM_ID":
      return action.payload;
    default:
      return state;
  }
};

const boardNameReducer = (state = [], action) => {
  switch (action.type) {
    case "BOARD_NAME":
      return action.payload;
    default:
      return state;
  }
};

const allReducers = combineReducers({
  currentBoardIDReducer,
  collectionNameReducer,
  boardsIDsReducer,
  allItemsIdsReducer,
  listItemIdReducer,
  boardNameReducer,
});

export default allReducers;
