import React, { useEffect, useState } from 'react'
import {db} from '../auth/firebase'
import {useSelector,useDispatch} from 'react-redux';
import {listItemIdAction} from '../../actions'
import { render } from 'react-dom';

export default function HatItems(props) {

    const itemsIDs = useSelector(state => state.allItemsIdsReducer);
    const itemID = useSelector(state => state.listItemIdReducer);
    const currentBoardId = useSelector(state => state.currentBoardIDReducer);
    const dispatch = useDispatch();


    return (
        <ul className = "list"  name ={props.name}>
        { props.data.map(doc =>{
                return( 
                    <div board-id ={props.id} className = "listItems" >
                    <li >{doc.data().todo}</li>
                    <button onClick = {(e) => {
                        dispatch(listItemIdAction(doc.id))
                        props.deleteItem(e)}}>del</button>
                    </div> 
                    )
             })}
        </ul>
    )
}
