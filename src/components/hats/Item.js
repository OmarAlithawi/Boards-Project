import React, {useState} from 'react'
import {useDispatch} from 'react-redux';
import {listItemIdAction} from '../../actions'


export default function Item(props) {

    const dispatch = useDispatch();
    const [isEditItem, setIsEditItem] = useState(false)
    const [updateItemValue, setUpdateItemValue] = useState("");

// to show the form when we want to edit 

    const editForm =(id) => {
        return (
            <>
              <input type="text" onChange={e => setUpdateItemValue(e.target.value)}   /> 
              <button onClick={ (e) => { props.updateItem(e ,id , updateItemValue); setIsEditItem(false)} } style={{ fontSize: 15 }} >done</button>
            </>
        )
    }

    return (
        <div key ={props.doc.id} board-id ={props.id} doc-id = {props.doc.id} className = "listItems" >
            <input type="checkbox" className ="checkBox" onClick = {(e) => {
                e.persist();
                setTimeout(() => {
                    e.target.parentNode.classList.add("fadeOut");
                } , 3000);
                setTimeout(()=> {
                    props.deleteItem(e)
                },3900)
                
            }}/>
            {!isEditItem && <li >{props.doc.data().todo}</li>}
            {isEditItem && editForm(props.doc.id) }
            <button onClick = {(e) => { dispatch(listItemIdAction(props.doc.id)) ; props.deleteItem(e)}}>del</button>
            <button onClick ={() => setIsEditItem(!isEditItem)}>edit</button>
         </div> 
    )
}
