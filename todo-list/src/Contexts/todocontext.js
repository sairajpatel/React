import { useContext,createContext } from "react";

export const todoContext=createContext({
    todos:[
        {
            id:1,
            todo:"todo msg",
            completed:false,
        }
    ],
    addTodo:(todo)=>{},
    updatedTodo:(todo,id)=>{},
    deleteTodo:(id)=>{},
    toggleTodo:(id)=>{},
})
export const useTodo=()=>{
    return useContext(todoContext);
}
const TodoProvider=todoContext.Provider;
export default TodoProvider;