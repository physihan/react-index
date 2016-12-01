import React, { Component, PropTypes } from 'react'
import { Row } from 'react-bootstrap'
import PhotoGrid from './components/PhotoGrid'; // 具体到文件
// import "./css/photo.css"
class ChildComponent extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div>
        <Row>
          <PhotoGrid number='1' />
          <PhotoGrid number='2' />
          <PhotoGrid number='3' />
        </Row>
        <Row>
          <PhotoGrid number='4' />
          <PhotoGrid number='5' />
          <PhotoGrid number='6' />
        </Row>
      </div>
    )
  }
}

// ChildComponent.propTypes = {

// }

export default ChildComponent
