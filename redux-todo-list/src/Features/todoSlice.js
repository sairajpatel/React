import {createSlice, nanoid } from '@reduxjs/toolkit';
const initialState={
    todos:[{
        id:nanoid(),
        text:'Learn React',
    }]
}
export const todoslice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload,
            }
            state.todos.push(todo);
            
        },
        deleteTodo:(state,action)=>{
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )

        }
    }

})
export const {addTodo,deleteTodo}=todoslice.actions;
export default todoslice.reducer;