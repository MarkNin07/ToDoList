import './App.css'
import StoreProvider from './components/StoreProvider'
import ToDoList from './components/ToDoList'
import Form from './components/Form'


function App() {

  return (
    <StoreProvider>
      <h1>Welcome!</h1>
      <Form />
      <ToDoList />
    </StoreProvider>    
  )
}

export default App
