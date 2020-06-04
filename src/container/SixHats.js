import React, {useEffect, useState } from 'react'
import Hat from '../components/Hat'
import db from './FirebaseConfig'
import  '../App.css'

export default function SixHats() {


    const [ids , setIDs] =  useState([]);
    const [currentBoardID , setCurrentBoardID] = useState("");
    const [hatsData , setHatsData] = useState([]);
    const [collectionName , setCollectionName] = useState([]);

            
// create boards with dcouments and collections 

    const createBoards = async() =>{
        const collectionsNames = ['blue-hat' , 'yellow-hat' , 'white-hat' , 'red-hat' , 'black-hat' , 'green-hat'];
        const createDocument = await db.collection('container').add({});
        collectionsNames.forEach( async(collection) => {
        const createCollections = await db.collection('container').doc(createDocument.id).collection(collection).add({});
    })
    setCurrentBoardID(createDocument.id);
    gettingData(createDocument.id)
     }

// getting the collections and passing it to the hat component 

     const gettingData = (id) => {
        const collectionsNames = ['blue-hat' , 'yellow-hat' , 'white-hat' , 'red-hat' , 'black-hat' , 'green-hat'];
        collectionsNames.forEach( async (collection) => {
        const collectionsData = await db.collection("container").doc(id).collection(collection).get();
        setHatsData(hatsData => [...hatsData , collectionsData.docs]); 
            
    })
    setCollectionName(collectionsNames) 
   }

   

   const renderHat = () => {
    let uniqueID = -1;
    return collectionName.map((collection) => {
            uniqueID++;
            return(
                <div>
                     {currentBoardID && <Hat  uniqueID = {uniqueID}  collectionName = {collection} hat ={hatsData} boardID = {currentBoardID} />}
                </div>
            )
        })
   }


    return (
 
        <div>
            <button onClick = {createBoards}>add board</button>
            <div className="board" >
            {renderHat()}
        </div>
        </div>
        
    )
}


