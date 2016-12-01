const initstate = {
  cnt:[1,0,0,0,0,0],
  val:0
}
// 很重要,一种实现方法
function increment(list,index){
return list.slice(0,index).concat(list[index]+1).concat(list.slice(index+1))
}
function decrement(list,index){
  // if(list[index]===0)
  // return
return list.slice(0,index).concat(list[index]-1).concat(list.slice(index+1))
}
// (parseInt(state.cnt.join(''))+Math.pow(10,val)).toString().split('')

function photoReducer (state = initstate , action) {
  // var index=Symbol(action.value)
//  var index=action.val.number-1
//函数中参数的点.有两个就报错，只好写在外面了，要注意action的value
//这里的action每个组件都有两个，一个加，一个减，每个组件之间通过action的val来区分
var index=action.val

//  state.cnt[val]+=1
//  var add=state.cnt
// var my=[...state.cnt]
  switch (action.type) {
    case 'like':
    // state.cnt[index]++
      return Object.assign({},state,{cnt:increment(state.cnt,index)})
    case 'dislike':
      return Object.assign({},state, {cnt: decrement(state.cnt,index)})
      default:
      return state

  }
}
// increment(state.cnt,index)
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 这里有一个巨坑这个action的val属性默认是props
export default photoReducer