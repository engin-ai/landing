import React, { Component, Fragment } from 'react';
import { Menu, Segment, Image, Responsive,Icon } from 'semantic-ui-react';
import Logo from "./images/white-logo-plus-name-final-01.svg";
import Burger from "./images/burger-icon-01.svg";
import './App.css';

export default class Navbar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Fragment>
        <Responsive {...Responsive.onlyComputer}>
        <Segment className="App-nav" inverted style={{margin:"0",position:"absolute","width":"100%"}}>
        <Menu inverted secondary>
        <Menu.Item>
        <Image size="small" src={Logo}>
          
        </Image>
        </Menu.Item>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item
            name='messages'
            active={activeItem === 'messages'}
            onClick={this.handleItemClick}
          />
          
          
        </Menu>
      </Segment>
       </Responsive>
       <Responsive {...Responsive.onlyMobile}>
        <Segment className="App-nav" inverted style={{margin:"0",position:"absolute","width":"100%"}}>
        <Menu inverted secondary>
          <Menu.Item>
            <Image size="small" src={Logo}>
              
            </Image>
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
               <Image style={{"width":"38px", "height":"29px"}} size="tiny" src={Burger}/>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Segment>
       </Responsive>
      </Fragment>
       
      
    )
  }
}