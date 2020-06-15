import React, {useState} from 'react'
import {useDispatch} from 'react-redux';
import {listItemIdAction} from '../../actions'
import Item from './Item'

export default function HatItems(props) {

    
   
    return (
        <ul className = "list"  name ={props.name}>
            {console.log(props.data)}
        { props.data.map(doc =>{
            return <Item id = {props.id} doc = {doc} sendUpdateValue = {props.sendUpdateValue} />
             })}
        </ul>
    )
}





/**
 * 
import { Grid , InputLabel , Select , MenuItem , makeStyles , FormControl , Box , List ,ListItem , Collapse} from '@material-ui/core'

  <Collapse in={props.open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding key ={doc.id} board-id ={props.id} doc-id = {doc.id} className = "listItems">
                        <ListItem button className={classes.nested}>
                            <input type="checkbox" className ="checkBox"/>
                            <li >{doc.data().todo}</li>
                            <button onClick = {(e) => {
                                dispatch(listItemIdAction(doc.id))
                                props.deleteItem(e)}}>del</button>
                        
                        </ListItem> 
                        </List>
                    </Collapse>

const [isChecked , setIsChecked] = useState(false);
 <input type="checkbox" onChange = { (e) => setIsChecked(e.target.checked)}  checked ={isChecked} className ="checkBox"/>
 * 
 */