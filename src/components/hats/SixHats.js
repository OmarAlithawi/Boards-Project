import React, {useEffect, useState } from 'react';
import Hat from './Hat';
import {db} from '../auth/firebase';

import {useSelector} from 'react-redux';

export default function SixHats() {

    const currentBoardID = useSelector(state => state.currentBoardIDReducer);
    const collectionsName =useSelector(state => state.collectionNameReducer);

// rendering hats

   const renderHats = () => {
    return collectionsName.map((collection) => {
            return(
              <div>
                 {<Hat  collectionName = {collection}  boardID = {currentBoardID} />}
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

