
import React, {useState} from 'react'
import {useDispatch} from 'react-redux';
import {listItemIdAction} from '../../actions'
export default function Item(props) {

    const dispatch = useDispatch();
    const [isEditItem, setIsEditItem] = useState(false)
    const [updateItemValue, setUpdateItemValue] = useState("");
   
    const editForm =(id) => {
        return (
            <>
                <input type="text" onChange={e => setUpdateItemValue(e.target.value)}   /> 
                <button onClick={ (e) => {
                    props.sendUpdateValue(e ,id , updateItemValue);
                    setIsEditItem(false)} } style={{ fontSize: 15 }} >done
                </button>
            </>
        )
    }

    return (
        <div key ={props.doc.id} board-id ={props.id} doc-id = {props.doc.id} className = "listItems" >
            <input type="checkbox" className ="checkBox"/>
            <div>
        {!isEditItem && <li >{props.doc.data().todo}</li>}
            {isEditItem && editForm(props.doc.id) }
            </div>
            <button onClick = {(e) => {
                dispatch(listItemIdAction(props.doc.id))
                props.deleteItem(e)}}>del</button>
                <button onClick ={() => setIsEditItem(!isEditItem)}>edit</button>
      
    </div> 
    )
}
