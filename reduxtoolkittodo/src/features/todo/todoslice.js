import {createSlice,nanoid}  from '@reduxjs/toolkit';//nanoid is a method used to generate nano ids

const initialState={
    todos:[{id:1,text:"Hello World"}]
}//means how initial state of a store looks like

export const todoSlice=createSlice({
    name:'todo',//it is syntax
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(), //generate unique ids
                text:action.payload //gei it from action
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        }
    }
})
//todoslice is not exported this way,its two parts are dispatched,in functionality k through hi states update hongi i.e addTodo and removeTodo and so on

export const{addTodo,removeTodo}=todoSlice.actions

//store also needs awareness about all the reducers that values inside it cannot be changed by any of the function except the fucntion you hav registered in the store
export default todoSlice.reducer