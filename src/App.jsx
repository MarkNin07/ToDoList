import './App.css'
import StoreProvider from './components/StoreProvider'
import ToDoList from './components/ToDoList'


function App() {

  return (
    <StoreProvider>
      <h1>Hello from outside</h1>
      <ToDoList />
    </StoreProvider>    
  )
}

export default App
