import React, { PropTypes } from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import { Link } from 'react-router'
import {LinkContainer} from 'react-router-bootstrap';
const MyNav = props => {
  return (

    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to=''> 主页
          </Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
      <LinkContainer to="/test">
      <NavItem>相册</NavItem>
      </LinkContainer>
      <LinkContainer to="/douban">
        <NavItem>豆瓣查书</NavItem>
      </LinkContainer>
      <LinkContainer to="/todo">
        <NavItem>todo列表</NavItem>
      </LinkContainer>
        <LinkContainer to="/game">
        <NavItem>游戏</NavItem>
      </LinkContainer>
        <NavDropdown eventKey={3} title='Dropdown' id='basic-nav-dropdown'>
          <MenuItem eventKey={3.1}> Action
          </MenuItem>
          <MenuItem eventKey={3.2}> Another action
          </MenuItem>
          <MenuItem eventKey={3.3}> Something else here
          </MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}> Separated link
          </MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar>

  )
}
// Link和navitem结合的毫无违和感，因为link就可以看做是a标签，前提是link要被Router包围进来
// 这个下拉框好像已经包含了jquery了，不用自己手动去引入jquery
//为了解决router和navitem的anchor的冲突引入react-router-bootstrap
//使用linkcontainner代替link,将navitem放在里面
MyNav.propTypes = {

}

export default MyNav
