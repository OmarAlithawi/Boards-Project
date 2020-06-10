import React, {useEffect, useState } from 'react';
import Hat from '../components/Hat';
import {db} from '../components/firebase';
import  '../App.css';
import {useSelector} from 'react-redux';

export default function SixHats() {

    const currentBoardID = useSelector(state => state.currentBoardIDReducer);
    const collectionsName =useSelector(state => state.collectionNameReducer);

// rendering hats

   const renderHats = () => {
    return collectionsName.map((collection) => {
            return(
              <div>
                 {currentBoardID &&  <Hat  collectionName = {collection}  boardID = {currentBoardID} />}
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

