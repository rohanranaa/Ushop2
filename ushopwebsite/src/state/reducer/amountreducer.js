const amountReducer=(state=0,action)=>{
    // console.log(action)
    switch(action.type){
        case "inc":return state+1
        case "dec":return state-1
        default: return state;
    }
}
export default amountReducer