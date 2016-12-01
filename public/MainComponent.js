import React, { Component, PropTypes } from 'react'
// import { Jumbotron } from 'react-bootstrap'
import MyNav from './components/Nav'
import { Grid } from 'react-bootstrap'
// import styles from './css/main.css'
class MainComponent extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div>
        <MyNav/>
        <Grid>
          {this.props.children}
        </Grid>
      </div>
    )
  }
}
// fluid={true}让container编程container-fluid
// MainComponent.propTypes = {

// }

export default MainComponent
