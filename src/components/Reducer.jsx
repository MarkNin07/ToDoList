//This component will help us to manage the global state

const Reducer = (state, action) => {
    switch(action.type) {
        case 'add-note':
            console.log("adding note");
            return state
        case 'remove-note':
            return state
        case 'update-note':
            return state
        
    }
}

export default Reducer;