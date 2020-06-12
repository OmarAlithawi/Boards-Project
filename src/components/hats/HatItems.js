import React from 'react'
import {db} from '../auth/firebase'
import {useSelector} from 'react-redux';

export default function HatItems(props) {

    const itemsIDs = useSelector(state => state.itemsIDsReducer);
    const itemID = useSelector(state => state.itemIDReducer);
    
    

    const deleteItem = async (e) =>{
        e.preventDefault()
        let id = e.target.parentNode.getAttribute("board-id");
        let collectionName = e.target.parentNode.parentNode.getAttribute("name");
        await db.collection("container").doc(id).collection(collectionName).doc(itemID).delete();
       
      }

    return (
        <ul className = "list"  name ={props.name}>
            {props.data.map((doc, index) => {
            return( 
            <div board-id ={props.id} className = "listItems" >
            <li >{doc.data().todo}</li>
            <button onClick = {(e) => deleteItem(e)}>del</button>
            </div> 
            )
        })}
        </ul>
    )
}
