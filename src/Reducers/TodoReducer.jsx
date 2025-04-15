import { add_Todolist } from "../Action/TodolistActionType";
import { delete_Todolist} from "../Action/TodolistActionType"
import { update_Todolist } from "../Action/TodolistActionType";
import { fetch_Data } from "../Action/TodolistActionType"

const initialState = {
    list : []
}

export const TodoReducer=(state = initialState,action)=>{
    switch(action.type){
        case add_Todolist :
            // const {id, data} = action.payload; destructuring
            return {
                ...state,
                list :[
                        ...state.list,
                           {
                             id:action.payload.id,
                             data:action.payload.data
                            }
                ]
            }
        case delete_Todolist :
            return{
                ...state,
                list : state.list.filter((task)=>task.id !== action.payload)
            }
        case update_Todolist:
            return{
                ...state,
                list : state.list.map((task)=>
                    task.id===action.payload.id 
                        ? {...task,data:action.payload.data} : task
                )
            }

        // case fetch_Data :
        //     return {
        //         ...state,
        //         list : [
        //             ...state.list,
        //             ...action.payload
        //         ]
        //     }

        case fetch_Data :
            return {
                ...state,
                list : [
                    ...state.list,
                    ...action.payload
                ]
            }
        
            default : return state;
        
    }

}