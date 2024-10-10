import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementAdd, reset } from "../Redux/counterSlice"
import { useState } from "react"

const Counter = () => {

  const {count}=useSelector(state=>state.counterReducer) //inorder to get the counter store to component
  const dispatch=useDispatch()  // inorder to acesss the value to component
  const [amount,setAmount]=useState(0)
  // console.log(amount);
  
  const addIncrement=()=>{
    //action dispatch
    if(amount){
       dispatch(incrementAdd(amount))
    }
    else{
      alert("Enter a valid amount")
    }
  }
  
  return (
    <div className='border  shadow rounded p-5 text-center'>
      <h1>{count}</h1>
      <div className='d-flex justify-content-between my-5 gap-4'>
        <button  onClick={()=>dispatch(decrement())}className='btn btn-danger'>Decrement</button>
        <button onClick={()=>dispatch(reset())} className='btn btn-warning'>Reset</button>
        <button onClick={()=>dispatch(increment())} className='btn btn-success'>Increment</button>
      </div>
      <div className='d-flex justify-content-between my-5 gap-4'>
        <input onChange={e=>setAmount(e.target.value)}  type="text" className='form-control' placeholder='Enter Increment Value' />
        <button onClick={addIncrement} className=' btn btn-info'>Add</button>
       </div>
    </div>
  )
}

export default Counter