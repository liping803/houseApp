import { createStore } from 'redux'

//仓库
const store = createStore(reducer)
//定义action通知对象
const actionObj = {
    type: 'changeNum',
    num: 1
}


//reducer
function reducer(store = 0, action) {
    switch (action.type) {
        case 'changeNum':
            return store += action.num;
        default:
            return store;
    }

}
store.dispatch(actionObj);
console.log(store);
console.log(store.getState());

