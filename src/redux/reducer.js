import axios from "axios";

const initialState = {
    fruits: []
}

const GET_FRUIT = "GET_FRUIT"
const ADD_FRUIT = "ADD_FRUIT"
const EDIT_FRUIT = "EDIT_FRUIT"
const DELETE_FRUIT = "DELETE_FRUIT"

//I had typed what is immediately below, and it wasn't working, because on the front end I was making a request to dispatch this, which is also a dispatch. So, I was dispatching a dispatch, not a... function?? Idk why but something about this wasn't working. So, Lucas worked on it for a long while, and finally figured out that the thing written after DOES work. 

// export function getFruit () {
//     axios.get('/api/fruits').then(res => {
//         return {
//             type: GET_FRUIT, 
//             payload: res.data
//         }
//     }) 
// }

export function getFruit () {
    let data = axios.get('/api/fruits').then(res => {
        return res.data
    })
    return {
        type: GET_FRUIT, 
        payload: data
    }
}

// export function addFruit (fruitToAdd) {
//     console.log("is this a string?", fruitToAdd)
//     axios.post('/api/fruits', {name: `${fruitToAdd}`})//this axios request can only work in a reducer (such as in this case) because you did applyMiddleware(promiseMiddleware) when you created the store in store.js
//     .then(dbResponse => {
//         console.log(dbResponse.data)
//         return {
//             type: ADD_FRUIT, 
//             payload: dbResponse.data
//         }
//     })
// } 

export function addFruit (fruitToAdd) {
    // console.log("is this a string?", fruitToAdd)
    let data = axios.post('/api/fruits', {name: `${fruitToAdd}`})//this axios request can only work in a reducer (such as in this case) because you did applyMiddleware(promiseMiddleware) when you created the store in store.js
                    .then(res => res.data)
    return {
        type: ADD_FRUIT, 
        payload: data
    }
}

// export function editFruit(editedName){
//     return {
//         type: EDIT_FRUIT, 
//         payload: editedName
//     }
// }

export function editFruit(id, input){
    let data = axios.put(`/api/fruits/${id}`, {name: `${input}`})
                    .then(res => res.data)
    return {
        type: EDIT_FRUIT, 
        payload: data
    }
}

// export function deleteFruit(id){
//     console.log("HIT DELETEFRUIT")
//     axios.delete(`/api/fruits/${id}`).then(response => {
//         console.log(response, "response")
//         return {
//             type: DELETE_FRUIT, 
//             payload: response.data
//         }
//     })
// }

​
export function deleteFruit(id){
    let data = axios.delete(`/api/fruits/${id}`).then(res => res.data)
    return {
        type: DELETE_FRUIT, 
        payload: data
    }
}

// export default function reducer (state = initialState, action) {
//     switch(action.type){
//         case GET_FRUIT: 
//             console.log("reducer.js GET_FRUIT case action.payload spread:", ...action.payload)
//             return {fruits: [...action.payload]}

//         case ADD_FRUIT: 
//             console.log("reducer ADD_FRUIT action.payload spread:", ...action.payload)
//             return {fruits: [...action.payload]}

//         case EDIT_FRUIT: 
//             return {fruits: [...action.payload]}

//         case DELETE_FRUIT: 
//             return {fruits: [...action.payload]}

//         default: 
//             return state
//     }
// }

​
export default function reducer (state = initialState, action) {
    switch(action.type){
        case GET_FRUIT + '_FULFILLED': 
            return {fruits: action.payload}
​
        case ADD_FRUIT + "_FULFILLED": 
            return {fruits: action.payload}
​
        case EDIT_FRUIT + "_FULFILLED": 
            return {fruits: action.payload}
​
        case DELETE_FRUIT + "_FULFILLED": 
            return {fruits: action.payload}
​
        default: 
            return state
    }
}