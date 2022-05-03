import './App.css'
import StoreProvider from './components/StoreProvider'

function App() {

  return (
    <StoreProvider>
      <h1>Hello from outside</h1>
    </StoreProvider>    
  )
}

export default App
