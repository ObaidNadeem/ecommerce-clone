import React from 'react';
import { Component } from 'react';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button, Dropdown, Carousel} from 'react-bootstrap';
import './navbar.css'
import sellButton from './Images/OlxSellButton.png'
import Asynchronous from './location'
import Popup from 'reactjs-popup';
import LoginModal from './LoginModal';
import Login from './LoginModal';
import { FbAuth } from './fbauth'
import firebase from '../../Config/Firebase'

import { BrowserRouter , Link } from 'react-router-dom'; 



firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log(user.displayName)
    user = true
  } else {
    user = false  

  }


});

class Olxnav extends Component {
    render(){
      
    
        return(
            <div>
                <Navbar id="parentDiv" bg="light" expand="lg">
  <Navbar.Brand className="olxLogo">  <svg width="48px" height="48px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-77aaa" d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"></path></svg>  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
     
      
    
    <Asynchronous disablePortal="true"  id="country_input" />
    
    <Form inline>
      <FormControl id="searchbar_input" type="text" placeholder="Find Cars, Mobile Phones and more..." className="mr-sm-2" />
      <span className="searchBarIcon"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"/></svg></span>
    </Form>


    </Nav>
    
  
  <Login />
  
  <Link to='/sellpage'>
    <img className="sellButton" src={sellButton} alt="SellButton" />
  </Link>
  
  </Navbar.Collapse>
</Navbar> 






</div>  
)}
}

class SecondNav extends React.Component{
  render(){
    return(
      <div className="bottom-nav">
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            ALL CATEGORIES
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <div className="dropdown-item-cont">
              <Dropdown.Item href="#">Vehicle</Dropdown.Item>
              <ul>
                <li>
                  Cars
                </li>
                <li>
                  Tractors
                </li>
                <li>
                  Bikes
                </li>
              </ul>
            </div>
            <div className="dropdown-item-cont">
              <Dropdown.Item href="#">Animals</Dropdown.Item>
              <ul>
                <li>
                  Cats
                </li>
                <li>
                  Dogs
                </li>
                <li>
                  Parrots
                </li>
              </ul>
            </div>
            <div className="dropdown-item-cont">
              <Dropdown.Item href="#">Fashion And Beauty</Dropdown.Item>
              <ul>
                <li>
                  Wedding
                </li>
                <li>
                  Watches
                </li>
                <li>
                  Clothes
                </li>
                <li>
                  Make Up
                </li>
                <li>
                  Jewellery
                </li>
                <li>
                  Accesories
                </li>
              </ul>
            </div>
            <div className="dropdown-item-cont">
              <Dropdown.Item href="#">Mobiles</Dropdown.Item>
              <ul>
                <li>
                  Mobile Phones
                </li>
                <li>
                  Accessories
                </li>
                <li>
                  Tablets
                </li>
              </ul>
            </div>
            <div className="dropdown-item-cont">
              <Dropdown.Item href="#">Furniture And Home Decoration</Dropdown.Item>
              <ul>
                <li>
                  Office Household items
                </li>
                <li>
                  Office Furniture
                </li>
                <li>
                  Curtains And Blinds
                </li>
                <li>
                  Rugs And Carpets
                </li>
                <li>
                  Painting And Mirrors
                </li>
                <li>
                  Garden and Outdoor
                </li>
              </ul>
            </div>
            <div className="dropdown-item-cont">
              <Dropdown.Item href="#">Jobs</Dropdown.Item>
              <ul>
                <li>
                  Other Jobs
                </li>
                <li>
                  Part-time
                </li>
                <li>
                  Domestic Staff
                </li>
                <li>
                  Medical
                </li>
                <li>
                  Manufacturing
                </li>
                <li>
                  Human Resources
                </li>
              </ul>
            </div>
          </Dropdown.Menu>
        </Dropdown>
        <span>
        <div className="popular-categories">
          <ul>
            <li>Mobile Phones</li>
            <li>Cars</li>
            <li>Motorcycles</li>
            <li>House</li>
            <li>TV-Video</li>
            <li>Tablets</li>
            <li>Land And Plots</li>
          </ul>
        </div>
      </span>
      
    
      
      
      </div>
      
    )
  }
}

class FirstHeader extends React.Component{
  render(){
    return(
      <div className="headerImage">
      <img  />
      
      </div>
   )}
}

class SecondHeader extends React.Component {
  render(){
    return(
      <div className="secondHeader">
      <img  />
      </div>
    )
  }
}

export { Olxnav ,  SecondNav , FirstHeader, SecondHeader}