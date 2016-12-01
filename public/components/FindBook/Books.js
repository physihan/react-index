import React, { Component } from 'react'
import { Grid } from 'react-bootstrap'
import Book from './Book'
// import fetch from 'whatwg-fetch'
import axios from 'axios'
import fetchJsonp from 'fetch-jsonp'
// 暂时用fetchJsonp吧
class Books extends Component {

  constructor (props) {
    super(props)
    this.state={
        url:'https://api.douban.com/v2/book/search?q=' + props.keyword + '&fields=id,title'
    }
    // let url = 'https://api.douban.com/v2/book/search?q=' + props.keyword + '&fields=id,title'
    // fetchJsonp(url)
    //   .then(function (response) {
    //     return response.json()
    //   }).then(function (json) {
    //   console.log(json)
    //   this.setState={result:json}
    // }).catch(function (ex) {
    //   console.log('parsing failed', ex)
    // })
    // console.log("sss")
    // console.log(props.keyword)
    // console.log(this.state)
    
  }


  render () {
    console.log(this.state)
    // fetchJsonp(' https://api.douban.com/v2/book/search?q=python&fields=id,title')
    //   .then(function (response) {
    //     return response.json()
    //   }).then(function (json) {
    //   console.log(json)
    // }).catch(function (ex) {
    //   console.log('parsing failed', ex)
    // })

    return (
      <Grid>
        {[1, 2, 3, 4].map(function (x, index) {
           return <Book key={index.toString()} />
         })}
      </Grid>
    )
  }
}
// jsx中的表达式都要用{}包起来 
export default Books
