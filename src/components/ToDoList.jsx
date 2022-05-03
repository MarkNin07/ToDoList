import React, {useContext} from 'react';
import {Store} from './StoreProvider'

const ToDoList = () => {

    const {state, dispatch} = useContext(Store)

    console.log(state);

    return (
        <div>
            <h1>Adele</h1>
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