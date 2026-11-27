import { useState } from 'react'
import Navbar from './components/Navbar'


function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

    const handleEdit = () =>{
      
    }
    const handleDelete = (e, id) =>{
        let id 
    }
    const handleAdd = () => {
  setTodos([...todos, { id: crypto.randomUUID(), todo, isCompleted: false }])
  setTodo("")
}
    const handleChange = (e) =>{
      setTodo(e.target.value)
    }

      const handleCheckbox = (e) => {
      let id =   e.target.name
      let index = todos.findIndex(item=>(
        item.id === id
      ))
      let newTodos = [...todos];
      newTodos[index].isCompleted = !newTodos[index].isCompleted;
      setTodos(newTodos)
      }
      

  return (
    <>
      <Navbar/>
      <div className='container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh]'>
        <div className="addTodo my-5">
          <h2  className='text-lg font-bold'>Add a Todo</h2>
          <input onChange={handleChange} value={todo} type="text" className='w-1/2 bg-white outline-none rounded-md' />
          <button onClick={handleAdd} className='bg-violet-800 hover:bg-violet-900 p-2 py-1 text-white rounded-md mx-6 font-bold cursor-pointer' >Add</button>
        </div>
          <h1 className='text-lg font-bold'>iTask - manage your todos</h1>
       <div className="todos">
        {
          todos.map(item => (
           
            <div key={item.id} className="todo flex w-1/4 my-3 justify-between ">
              <input name={item.id} onChange={handleCheckbox} type="checkbox" value={item.isCompleted}/>
            <div className={item.isCompleted? "line-through":""}>{item.todo}</div>
            <div className="buttons">
              <button onClick={handleEdit} className='bg-violet-800 hover:bg-violet-900 p-2 py-1 text-white rounded-md mx-1 font-bold cursor-pointer'>Edit</button>
              <button  onClick={(e)=>{handleDelete(e, item.id)}} className='bg-violet-800 hover:bg-violet-900 p-2 py-1 text-white rounded-md mx-1 font-bold cursor-pointer'>Delete</button>
            </div>
            </div>
         
          ))
        }
           </div>
      </div>
    </>
  )
}

export default App
