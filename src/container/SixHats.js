import React, {useEffect, useState } from 'react'
import Hat from '../components/Hat'
import db from './FirebaseConfig'
import  '../App.css'

export default function SixHats() {


    const [ids , setIDs] =  useState([]);
    const [currentBoardID , setCurrentBoardID] = useState("");
    const [hatsData , setHatsData] = useState([]);
    const [collectionName , setCollectionName] = useState([]);
    
// get stuff immediately and store stuff inside of an array 

    const liveUpdate = async () =>{
        await  db.collection("container").onSnapshot(snapshot =>{
            let changes = snapshot.docChanges();
            changes.forEach(change =>{
              if(change.type === "added"){
                setIDs(ids => [...ids , change.doc.id])
              }
            })
          })
        }

    useEffect(() => {
        liveUpdate()
    }, [])
            
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


   let counter = -1;
    return (
        <div >
         <button onClick = {createBoards}>add board</button>
         {hatsData.map(doc => {
             counter++;
             return(
                <div className= "board">
                {currentBoardID && <Hat collectionName = {collectionName[counter]} hat ={doc} boardID = {currentBoardID} />}
                </div>
             )
        })}
       
        </div>
        
    )
}

// problems//
// 1- not rendering but posting the data
// 2- the counter is not resetting
// 3- styling is not working