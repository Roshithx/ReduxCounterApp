
import './App.css'
import Counter from './Components/Counter'
function App() {

  return (
    <>
     <h1 className='text-center my-5'>Counter App</h1>
     <div style={{minHeight:'40vh'}} className='d-flex justify-content-center align-items-center w-100'>
       <Counter/>
     </div>
    </>
  )
}

export default App
