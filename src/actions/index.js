export const currentBoardID = (data) => {
    return {
        type:"CURRENT_BOARD_ID" ,
        payload:data  
    }
}

export const collectionName = (data) => {
    return {
        type:"COLLECTION_NAME" ,
        payload:data  
    }
}

export const boardsIDs = (data) => {
    return {
        type:"BOARDS_IDS" ,
        payload:data  
    }
}

export const itemsIDs = (data) => {
    return {
        type:"ITEMS_IDS" ,
        payload:data  
    }
}

export const itemID = (data) => {
    return {
        type:"ITEM_ID" ,
        payload:data  
    }
}

