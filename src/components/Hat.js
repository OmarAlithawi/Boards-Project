import React,{useState} from 'react'
import db from '../container/FirebaseConfig'

export default function Hat(props) {
    //form to add items to the targeted collection , deleteBtn , and editBtn 

    
    
  const postData = async (e) => {
    e.preventDefault()
    e.persist()
    await db.collection('container').doc(props.boardID).collection(e.target[0].name).add({
      todo:e.target[0].value,
    });
   e.target.reset()
  }


  console.log(props.collectionName)
   const render = (data) => {
         
    return  data.map((doc ,ind) => {
       return(
         <div key ={ind} data-id = {doc.id}>
            <p>{doc.data().text}</p>
            <p>{doc.data().color}</p>
            <p>{doc.data().todo}</p>
          </div>
             )
           })

           
    }
   
    return (
        <div>
            <form onSubmit = {(e) =>postData(e)}>
                <input type="text" name = {props.collectionName}  placeholder = {props.collectionName}/>
                <button>Add something</button>
            </form>
            {props.hat &&  render(props.hat)}
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