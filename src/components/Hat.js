import React,{useState, useEffect} from 'react'
import db from '../container/FirebaseConfig'
import  '../App.css'

export default function Hat(props) {

  const [hatItems , setHatItems] = useState([])

  const liveUpdate = async () =>{
   if(props.boardID ){ 
    await  db.collection("container").doc(props.boardID).collection(props.collectionName).onSnapshot(snapshot =>{
        let changes = snapshot.docChanges();
        changes.forEach(change =>{
            if(change.type === "added"){ 
            setHatItems(hatItems => [...hatItems ,change.doc.data()]);
            }
        })
      }) 
    }
    }

   

   
    
  
  const postData = async (e) => {
    e.preventDefault()
    e.persist()
    await db.collection('container').doc(props.boardID).collection(e.target[0].name).add({
      todo:e.target[0].value,
    });
   e.target.reset()
  }


   const renderItems = () => {  
      return hatItems.map((doc, index) => {
          return(
            <div>
                <p>{doc.todo}</p>
            </div>
          )
          })
    }

    return (
        <div>
            <form onSubmit = {(e) =>{
              postData(e)
              liveUpdate(e)
            }}>
                <input type="text" id = {props.uniqueID} name = {props.collectionName}  placeholder = {props.collectionName}/>
                <button>Add something</button>
            </form>
          <div id = {props.uniqueID}>{renderItems()}</div>
        </div>
    )
     }
     
   

  /*
  const deleteData = (e) =>{
    e.preventDefault()
    let id = e.target.parentNode.getAttribute("data-id")
    db.collection("info").doc(id).delete();
    const arr = data.filter(el => {
      return  el.id !== id 
      })
    setData(arr)
    console.log()
  }
     */