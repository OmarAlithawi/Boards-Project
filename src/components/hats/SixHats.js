import React, {useEffect, useState } from 'react';
import Hat from './Hat';
import {db} from '../auth/firebase';

import {useSelector} from 'react-redux';

export default function SixHats() {

    const currentBoardId = useSelector(state => state.currentBoardIDReducer);
    const collectionsName =useSelector(state => state.collectionNameReducer);

// rendering hats

   const renderHats = () => {
    return collectionsName.map((collection , index) => {
            return(
              <div>
                 {<Hat  key = {index} collectionName = {collection}  boardID = {currentBoardId} />}
              </div>
            )
        })
   }


    return (
        <div>
            <div className="board" >
                {renderHats()}
             </div>
        </div>
    )
}

