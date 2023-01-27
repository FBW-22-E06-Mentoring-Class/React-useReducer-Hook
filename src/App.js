
import React from 'react';
import {useReducer } from 'react';
import {reducer} from "./reducer"


const intialState={
  counter:0,
  todoItems: []
}

function App() {

const [state,dispatch] = useReducer(reducer,intialState )

  return (
    <div className="App">
      <h1>Todo App</h1>
      <form onSubmit={(e)=>{
        e.preventDefault()
        dispatch({instruction: "addItem", payload:e.target.todotext.value })
      }}>
        <input type="text" name="todotext"  /> 
        <input type="submit" value="add todo" />
     {/*    <button>add todo</button> */}
      </form>
      <h2>Todo List</h2>
      <ul>
        {state.todoItems.map(item=>{
          return (<li key={item.id} onClick={()=>dispatch({instruction:"updateItem",payload: item.id})}   style={{display:"flex",justifyContent:"space-between",border:"2px solid", backgroundColor: item.done?"lightgreen": "yellow"}}>{item.text} <span  onClick={(e)=>dispatch({instruction:"deleteItem", payload:item.id})}  style={{border:"1px solid", backgroundColor:"red",display:"inline-block", padding:"5px"}}>X</span></li>)
        })}
      </ul>


        <h2>
          Counter :{state.counter}
         </h2>
         <button onClick={()=>dispatch({instruction: "incrementCounter"})}>increment</button>
          <button onClick={()=>dispatch({instruction: "decrementCounter"})}>decrement</button>
      </div>
  );
}

export default App;



/*   const [todoItems, setTodoItems] = useState([ {id:1, text:"Breakfast", done:false}  ])
  const [counter,setCounter] = useState(0)


  const addTask=(e)=>{
    e.preventDefault()
    console.log(e.target.todotext.value)
    let task = {id:Date.now(), text:e.target.todotext.value, done:false}
    setTodoItems([...todoItems, task])
    e.target.reset()
  }


  const updateTodo=(id)=>{
    console.log(id)
    setTodoItems(todoItems.map(item=>{
      if(item.id === id){
        item.done = !item.done
        return item
      }else{
        return item
      }
    }))
  }

  const deleteTodo=(e,id)=>{
    e.stopPropagation()
    setTodoItems(todoItems.filter(item=>item.id!==id))
   
  }

  const incrementCounter=()=>{
    setCounter(pre=>pre+1)
  }
  const decrementCounter=()=>{
    setCounter(pre=>pre-1)
  }
 */
