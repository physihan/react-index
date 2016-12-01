import React, { Component, PropTypes } from 'react'
// import React,{propTypes} from 'react'
import { connect } from 'react-redux'
import { CounterActions } from './actions.js'//这里要注意如果不是全局导入或默认导入要加上括号

class App extends Component {
  constructor (props) {
    super(props)
  }
  click () {
    this.props.testClick() // this.props.xxx
  }
  render () {
    return (
      <div>
        <h1>Hello Redux</h1>
        <h1>counter:{this.props.global.counter}</h1>
        <button onClick={this.click.bind(this)}>
          click me
        </button>
      </div>
    )
  }
}
// 这里的onClick内容要写在{}中,this.props已经映射给global了，一定要注意state的属性map到了props
// 上面，也就是说全局的store中存储的state对象的global属性作为这个组件的state

// componentName.propTypes = {

// }

// const mapDispatchToProps = (state, ownProps) => {
//   return {
//     propName: () => {
//       dispatch(value(ownProps))
//     }
//   }
// }
const mapDispatchToProps = (dispatch,val) => {
  return {
    testClick: () => dispatch(CounterActions(val))
  }
}
// 这里state来自于store
const mapStateToProps = (state) => {
  return state
}

const DefaultApp = connect(
  mapStateToProps, mapDispatchToProps
)(App)

export default DefaultApp
