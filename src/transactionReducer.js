const TransactionReducer =  ((state, action)=>{
    switch(action.type){
        case "ADD_TRANSACTION": {
            return [action.payload , ...state]
        }
        case "DELETE_TRANSACTION": {
            let newState = [...state];
        newState.splice(action.payload.index, 1);
        return newState;
        }
        default:
            return state;
    }
})

export default TransactionReducer;