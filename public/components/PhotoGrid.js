import React, { PropTypes, Component } from 'react'
import { Col, Thumbnail, Button, Badge } from 'react-bootstrap'
// import main.css from './css'
import { connect } from 'react-redux'
import styles from '../css/photo.css'
import {Like,Dislike} from '../actions';
class PhotoGrid extends Component {
  constructor (props) {
    super(props)
    this.add = this.add.bind(this)
    this.sub = this.sub.bind(this)
    this.state = {
      cnt: 0
    }
  }

  add () {
    // super()
    var cnt = this.state.cnt + 1
    this.setState({
      cnt: cnt
    })
  // alert("sss")
  // console.log(PhotoGrid.prototype)
  }
  //   这里要注意，如果写在外面不在里面bind的话state会获取不到,super也不能写到add里面
  sub () {
    var cnt = this.state.cnt - 1
    this.setState({cnt})
  // 使用了es6的自动对象展开
  }
  like(val){
      this.props.like(val)
  }
  dislike(val){
      this.props.dislike(val)
  }
  test(val){
    console.log(val)
  }
  render () {
      var index=this.props.number-1
    return (

      <Col xs={12} md={4} className={styles.grid}>
      <Thumbnail src='/static/img/123.jpg'>
        <h3>小猫</h3>
        <p>
          <Badge>
            {this.props.photo.cnt[index]}
          </Badge>
        </p>
        <p>
          <Button bsStyle='primary' onClick={this.like.bind(this,index)}>
            喜欢
          </Button>
          <Button bsStyle='default' onClick={this.dislike.bind(this,index)}>
            讨厌
          </Button>
          <Button bsStyle='default' onClick={this.test.bind(this,index)}>
           测试
          </Button>
        </p>
      </Thumbnail>
      </Col>
    )
  }
}

// 这里className如果要拼接' col-md-4'的话不要丢了空格

PhotoGrid.propTypes = {

}
// var val=this.props.number
//好好理解这里的传参
const mapDispatchToProps=(dispatch)=>{
    return {
        like:(val)=>dispatch(Like(val)),
        dislike:(val)=>dispatch(Dislike(val))    
    }
}
const mapStateToProps=(state)=>{
    return state
}

const PhotoGrid1 = connect(
    mapStateToProps,
    mapDispatchToProps
)(PhotoGrid)

export default PhotoGrid1
// export default PhotoGrid
