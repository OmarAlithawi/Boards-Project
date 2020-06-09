import React, {useEffect, useState } from 'react'
import Hat from '../components/Hat'
import {db} from '../components/firebase'
import  '../App.css'

export default function SixHats() {


    const [currentBoardID , setCurrentBoardID] = useState("");
    const [collectionName , setCollectionName] = useState([]);
    const [boardsIDs , setBoardIDs] = useState([])
    
    
// create boards with dcouments and collections 

    const createBoards = async() =>{
        const collectionsNames = ['blue-hat' , 'yellow-hat' , 'white-hat' , 'red-hat' , 'black-hat' , 'green-hat'];
        const createBoard = await db.collection('container').add({});
        collectionsNames.forEach( async(collection) => {
        const createCollections = await db.collection('container').doc(createBoard.id).collection(collection).add({});
    })
        setCurrentBoardID(createBoard.id);
        setCollectionName(collectionsNames)
        setBoardIDs(boardsIDs => [...boardsIDs , createBoard.id])
     }

    
    // functions that render the last board 
    

// rendering hats

   const renderHats = () => {
    return collectionName.map((collection) => {
            return(
              <div>
                 {currentBoardID &&  <Hat  collectionName = {collection}  boardID = {currentBoardID} />}
              </div>
            )
        })
   }


    return (
        <div>
            <button onClick = {createBoards}>Add board</button>
            <div className="board" >
                {renderHats()}
             </div>
        </div>
    )
}

