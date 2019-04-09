import {createStore} from 'myRedux'

function initState={number:0}

function reducer(state,action){
    switch(action){
        case action.type==='add':
            return {...state,number:action.number+1}
        case action.type==='minus':
            return {...state,number:action.number-1}
        default return state;
    }
}

const store=createStore(reducer,initState)

export default store;