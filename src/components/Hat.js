import React,{useState, useEffect} from 'react'
import db from '../container/FirebaseConfig'
import  '../App.css'
import HatItems from './HatItems'

export default function Hat(props) {
  
  const [hatItemsData , setHatItemsData] = useState([])

  const liveUpdateData = async () =>{
   if(props.boardID){ 
    await  db.collection("container").doc(props.boardID).collection(props.collectionName).onSnapshot(snapshot =>{
        let changes = snapshot.docChanges();
        changes.forEach(change =>{
            if(change.type === "added" && Object.keys(change.doc.data()).length > 0){ 
              setHatItemsData(hatItemsData => [...hatItemsData ,change.doc.data()]);
            }
        })
      }) 
    }
  }

  
  useEffect(() => {
    liveUpdateData();
  }, [])

  const postData = async (e) => {
    console.log(hatItemsData)
    e.preventDefault();
    e.persist();
    await db.collection('container').doc(props.boardID).collection(e.target[0].name).add({
      todo:e.target[0].value,
    });
    
   e.target.reset();
  }


    return (
        <div>
            <form onSubmit = {(e) => postData(e)}>
                <input type="text" name = {props.collectionName}  placeholder = {props.collectionName}/>
                <button>Add something</button>
            </form>
          <div>{hatItemsData.length > 1 && <HatItems  data = {hatItemsData}  />}</div>
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