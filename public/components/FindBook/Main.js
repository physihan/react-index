import React, { Component } from 'react'
import { Navbar, FormGroup, FormControl,Button,Jumbotron} from 'react-bootstrap'
// import moduleName from 'react-router';
import fetchJsonp from 'fetch-jsonp'
import Books from './Books';
import Book from './Book'

class FindBook extends Component {
constructor(){
  super()
  this.state={
   keyword:'',
   result:[]
  }
  
  this.handleSubmit=this.handleSubmit.bind(this)
  
}
handleInput(e){
  
this.setState({keyword:e.target.value})
}
  handleSubmit(){
var self=this
    console.log(this.state.keyword)
    let url='https://api.douban.com/v2/book/search?q=' +this.state.keyword + '&fields=title,image,summary'
     fetchJsonp(url)
      .then(function (response) {
        return response.json()
      }).then(function (json) {
      console.log(json.books)
      self.setState({result:json.books})
      console.log(self.state.result)
    }).catch(function (ex) {
      console.log('parsing failed', ex)
    })
    console.log(self.state.result)
    console.log(url)
    
    

  }
    test(){
    var self=this
    console.log(self)
    console.log(this)
  }

  render () {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href='#'>找一本喜欢的书吧</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Navbar.Form pullLeft>
              <FormGroup>
                <FormControl type='text' ref='keyword' value={this.state.keyword} onChange={this.handleInput.bind(this)} placeholder='Search'/>
              </FormGroup>
              {'  '}
              <Button type='submit' onClick={this.handleSubmit}>
                查看
              </Button>
              <Button onClick={this.test.bind(this)}>
                测试
              </Button>
            </Navbar.Form>
          </Navbar.Collapse>
        </Navbar>
         <Jumbotron>
         {
           this.state.result.map((x,index)=>{
      return <Book image={x.image} title={x.title} key={index} summary={x.summary}></Book>

           })
         }
          
        </Jumbotron>
        <h1>等待开发</h1>

      </div>
    )
  }
}
// this.handleSubmit.bind(this)将当前组件类中的方法与生成的实例的this相绑定
// 或者在constructor中将实例的this和这个方法绑定，onclick直接调用this.props.xx即可
export default FindBook
