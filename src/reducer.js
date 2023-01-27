export const reducer=(state,action)=>{
    console.log(action)
   switch(action.instruction){
    case "incrementCounter":
      return ({...state, counter: state.counter+1})
    case "decrementCounter":
      return ({...state, counter: state.counter-1})
    case "addItem":
      return {...state, todoItems: [...state.todoItems, {id:Date.now(), text: action.payload, done:false}]}
    case "updateItem":
      return {...state, todoItems:state.todoItems.map(item=>{
        if(item.id === action.payload){
          item.done = !item.done
          return item
        }else{
          return item
        }
      })}
      case "deleteItem":
      return {...state, todoItems:state.todoItems.filter(item=>item.id !== action.payload)}
    default:
      return state
   }
  }
  
  