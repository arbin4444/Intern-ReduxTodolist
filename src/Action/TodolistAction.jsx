import {add_Todolist} from './TodolistActionType'
import {delete_Todolist} from './TodolistActionType'
import { update_Todolist } from './TodolistActionType'
import { fetch_Data } from './TodolistActionType'
import axios from 'axios'


export const TodolistAction=(data)=>{
    return{
        type : add_Todolist,
        payload : {
            id : new Date().getTime().toString(),
            data : data
        }

    }
}

export const TodolistDeletion=(id)=>{
    return{
        type : delete_Todolist,
        payload : id
    }
}

export const TodolistUpdate=(id,data)=>{
    return{
        type : update_Todolist,
        payload : {
            id,
            data,
        }
    }
}

// export const fetchTodo=()=>{
//     return async (dispatch)=>{
//         try{
//             const response = await fetch('https://jsonplaceholder.typicode.com/todos')
//             const task = await response.json();
            
//             dispatch({
//             type: fetch_Data,
//             payload : task.map((tasks)=>({
//                 id:tasks.id,
//                 data:tasks.title
//             }))
//           })
//         } 
//         catch(error){
//             console.log("error")
//         }
//     }
// }

// export const fetchTodo=()=>{
//     return async(dispatch)=>{
//         try{
//             const response = await axios.get("https://jsonplaceholder.typicode.com/todos")
//             dispatch({
//                 type : fetch_Data,
//                 payload : response.data.map((taskss)=>({
//                     id : taskss.id,
//                     data : taskss.title
//                 }))
//             })
//         }
//         catch(error){
//             console.log("error")
//         }
//     }
// }

export const fetchTodo=()=>{
    return async(dispatch)=>{
        const query =`
            query Countries{
                countries{
                    name
                    code
                    continent{
                        name
                    }
                    currency
                }
            }
        `;
        const response = await axios.post("https://countries.trevorblades.com/graphql",{query})
        console.log("This is response", response.data.data.countries)
        dispatch({
            type: fetch_Data,
            payload: response.data.data.countries.map((taskss)=>({
               
                id: taskss.code,
                data: taskss.name
            }))
        })

    }
}


