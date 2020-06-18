export const currentBoardIDAction = (data) => {
  return {
    type: "CURRENT_BOARD_ID",
    payload: data,
  };
};

export const collectionNameAction = (data) => {
  return {
    type: "COLLECTION_NAME",
    payload: data,
  };
};

export const boardsIDsAction = (data) => {
  return {
    type: "BOARDS_IDS",
    payload: data,
  };
};

export const allItemsIdsAction = (data) => {
  return {
    type: "ITEMS_IDS",
    payload: data,
  };
};

export const listItemIdAction = (data) => {
  return {
    type: "ITEM_ID",
    payload: data,
  };
};

export const boardNameAction = (data) => {
  return {
    type: "BOARD_NAME",
    payload: data,
  };
};
