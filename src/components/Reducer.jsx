//This component will help us to manage the global state

const Reducer = (state, action) => {
    switch(action.type) {
        case 'add-note':
            console.log("adding note");
            const newNote = {
                id : Math.floor(Math.random() * 100),
                message : action.payload.message,
                title :action.payload.title,
                done : false
            }

            const newListOfNotesAddedOne = [...state.listOfNotes, newNote]

            const newStateAddNote = {
                ...state, listOfNotes: newListOfNotesAddedOne
            }
            return newStateAddNote
        case 'remove-note':
            return state
        case 'update-note':
            console.log(action.payload);
            const newListOfNotes = state.listOfNotes.filter(note => note.id !== action.payload.id)
            const newListOfNotesWithModification = [...newListOfNotes, action.payload]
            const newStateModifiedCheckbox = {...state, listOfNotes: newListOfNotesWithModification}
            return newStateModifiedCheckbox
        
    }
}

export default Reducer;