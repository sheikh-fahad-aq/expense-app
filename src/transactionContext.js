import React, { createContext, useReducer } from "react";
import TransactionReducer from './transactionReducer';

const initialTransactions = [
    { amount: 1000, desc: "Salary Received" },
    { amount: -100, desc: "Misc. Expense" }

]

export const TransactionContext = createContext(initialTransactions);

export const TransactionProvider = ({children})=> {

    let [state, dispatch] = useReducer(TransactionReducer, initialTransactions);

    function addTransaction(transObj){
        
        dispatch({
            type: "ADD_TRANSACTION",
            payload: { 
                amount: transObj.amount, 
                desc: transObj.desc 
            },
        })
    }

    function deleteTransaction(transObj){
        
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: { 
                index: transObj.INDEX
            },
        })
    }

    return(


        <TransactionContext.Provider value={{
            transactions: state,
            addTransaction,
            deleteTransaction
        }}>
            {children}
        </TransactionContext.Provider>
    )
}