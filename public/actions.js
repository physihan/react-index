
/**
 * 
 * 
 * @action creators
 */
export function CounterActions(val){
    return{
        type:"add",
        value:val
    }
}
export function Like(val){
    return{
        type:'like',
val:val
    }
}
export function Dislike(val){
    return{
        type:'dislike',
val:val
    }
}