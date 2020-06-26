import React from 'react'
import Item from './Item'

export default function SidebarItems(props) {
   
    return (
        <div> 
        <Item key = {props.boardId} boardId = {props.boardId} allBoardsIds = {props.allBoardsIds} index = {props.index} boardName= {props.boardName} / > 
        </div>
    )
}
