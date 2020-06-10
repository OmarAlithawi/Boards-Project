import React from 'react'
import {db} from './firebase'
import {useSelector} from 'react-redux';

export default function HatItems(props) {

    const itemsIDs = useSelector(state => state.itemsIDsReducer);
    const itemID = useSelector(state => state.itemIDReducer);

    const deleteData = async (e) =>{
        e.preventDefault()
        console.log(props.data)
        let id = e.target.parentNode.getAttribute("board-id");
        console.log(id)
        let collectionName = e.target.parentNode.parentNode.getAttribute("name");
        console.log(collectionName)
        await db.collection("container").doc(id).collection(collectionName).doc(itemID).delete();
        itemsIDs.filter(el => {
            console.log(el)
            return el!== itemID;
        })
      }

    return (
        <ul className = "list"  name ={props.name}>
            {props.data.map((doc, index) => {
            return( 
            <div board-id ={props.id} className = "listItems" >
            <li >{doc.todo}</li>
            <button onClick = {(e) => deleteData(e)}>del</button>
            </div> 
            )
        })}
        </ul>
    )
}
