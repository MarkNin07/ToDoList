import React, {useContext} from 'react';
import {Store} from './StoreProvider'

const ToDoList = () => {

    const {state, dispatch} = useContext(Store)

    return (
        <div>
            <h1>Here's the form</h1>
            <ul>
                {state.listOfNotes.map(note => {
                    return <li style ={note.done ? {textDecoration: 'line-through'} :{}} key={note.id}>
                        {note.title} <br />
                        {note.message} <br />
                    </li>
                })}
            </ul>
        </div>
    )
}

export default ToDoList