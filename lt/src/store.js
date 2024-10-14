import { createStore } from "vuex";

const store = createStore({
    state:{
        count:0,
        todos:[
            {
                id:1,
                name:"code",
                status:true
            },
            {
                id:2,
                name:"da bong",
                status:false
            },
            {
                id:3,
                name:"cau long",
                status:true
            }
        ],
    },
    getters: {
        getCount:(state)=>{
            return state.count;
        },
        doneTodo:(state)=>{
            return state.todos.filter(item => item.status)
        },
    },
    mutations: {
        increaseCount:(state, payload)=>{            
            return state.count+=payload.amount;
        }
    }
})

export default store;