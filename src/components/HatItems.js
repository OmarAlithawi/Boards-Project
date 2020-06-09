import React from 'react'

export default function HatItems(props) {
    console.log(props.todo)
    return (
        <ul className = "list">
            {props.data.map((doc, index) => <li className = "listItems">{doc.todo}</li>)}
        </ul>
    )
}
