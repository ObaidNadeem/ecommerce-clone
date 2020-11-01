import React from 'react';
import { Component } from 'react';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button, Dropdown, Carousel} from 'react-bootstrap';
import './navbar.css'
import sellButton from './Images/OlxSellButton.png'
import Asynchronous from './location'
// import CategDrop from './secondNav'
import Popup from 'reactjs-popup';
import LoginModal from './LoginModal';
import Login from './LoginModal'


class Olxnav extends Component {
    render(){
        return(
            <div>
                <Navbar id="parentDiv" bg="light" expand="lg">
  <Navbar.Brand className="olxLogo">  <svg width="48px" height="48px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-77aaa" d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"></path></svg>  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      {/* <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
      
    
    <Asynchronous disablePortal="true"  id="country_input" />
    
    <Form inline>
      <FormControl id="searchbar_input" type="text" placeholder="Find Cars, Mobile Phones and more..." className="mr-sm-2" />
      {/* <Button variant="outline-success">Search</Button> */}
      <span className="searchBarIcon"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"/></svg></span>
    </Form>


    </Nav>
    {/* <span><svg id="navbar_chat" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 3c5.514 0 10 3.592 10 8.007 0 4.917-5.144 7.961-9.91 7.961-1.937 0-3.384-.397-4.394-.644-1 .613-1.594 1.037-4.272 1.82.535-1.373.722-2.748.601-4.265-.837-1-2.025-2.4-2.025-4.872 0-4.415 4.486-8.007 10-8.007zm0-2c-6.338 0-12 4.226-12 10.007 0 2.05.739 4.063 2.047 5.625.055 1.83-1.023 4.456-1.993 6.368 2.602-.47 6.301-1.508 7.978-2.536 1.417.345 2.774.503 4.059.503 7.084 0 11.91-4.837 11.91-9.961-.001-5.811-5.702-10.006-12.001-10.006z"/></svg></span> */}
    {/* <span><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M1 20v-2.946c1.993-.656 2.575-2.158 3.668-6.077.897-3.218 1.891-6.784 4.873-8.023-.027-.147-.041-.299-.041-.454 0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5c0 .156-.014.309-.042.458 2.987 1.244 3.984 4.813 4.884 8.033 1.103 3.95 1.697 5.423 3.658 6.062v2.947h-7c0 2.208-1.792 4-4 4s-4-1.792-4-4h-7zm14 0h-6c0 1.656 1.344 3 3 3s3-1.344 3-3zm-13-1h20v-1.241c-2.062-.918-2.82-3.633-3.621-6.498-1.066-3.814-2.167-7.758-6.379-7.761-4.21 0-5.308 3.937-6.369 7.745-.8 2.872-1.559 5.593-3.631 6.514v1.241zm11.492-16.345l.008-.155c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5l.008.152c.455-.099.949-.152 1.487-.152.542 0 1.039.054 1.497.155z"/></svg></span> */}
    
    {/* <Popup trigger={<span id="loginBtn">Login</span>} modal nested >
    <div>

      <LoginModal />

    </div>
  </Popup> */}

  <Login id="loginBtn" />
    
    
    <img className="sellButton" src={sellButton} alt="SellButton" />
  </Navbar.Collapse>
</Navbar> 


{/* Second nav */}
{/* < CategDrop /> */}



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

// export default Olxnav;
export { Olxnav ,  SecondNav , FirstHeader, SecondHeader}