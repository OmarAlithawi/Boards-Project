import React, { useEffect, useState } from 'react'
import {db} from '../auth/firebase'
import {useSelector,useDispatch} from 'react-redux';
import {itemsIDsAction ,itemIDAction} from '../../actions'
import { render } from 'react-dom';

export default function HatItems(props) {

    const itemsIDs = useSelector(state => state.itemsIDsReducer);
    const itemID = useSelector(state => state.itemIDReducer);
    const dispatch = useDispatch();
    const [test , setTest] = useState([]);

    const deleteItem =  (e) =>{
        e.preventDefault()
        let id = e.target.parentNode.getAttribute("board-id");
        let collectionName = e.target.parentNode.parentNode.getAttribute("name");
        console.log(itemID)
         db.collection("container").doc(id).collection(collectionName).doc(itemID).delete();
       /*
         const filteredData = props.data.filter(doc => {
            return doc.id !== itemID;
        })

        setTest(filteredData)
        */
      }
  

    return (
        <ul className = "list"  name ={props.name}>
        { props.data.map(doc =>{
                return( 
                    <div board-id ={props.id} className = "listItems" >
                    <li >{doc.data().todo}</li>
                    <button onClick = {(e) => {
                        dispatch(itemIDAction(doc.id))
                        deleteItem(e)}}>del</button>
                    </div> 
                    )
             })}
        </ul>
    )
}
