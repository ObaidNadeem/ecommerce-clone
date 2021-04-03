import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import {Olxnav , SecondNav , FirstHeader, SecondHeader} from './Components/Navbar/navbar';
import CardCarousel from './Components/Body/CardCarousel';
import './Components/Body/card.css';
import FreshRecommendation from './Components/Body/FreshRecommendations';
import { OlxAppCard } from './Components/Footer/OlxApp' ;
import BackToTop from "react-back-to-top-button";
import { Footer } from './Components/Footer/Footer';
import { Copyright } from './Components/Footer/Footer';
import LoginModal from './Components/Navbar/LoginModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './route/router'


const Home = () => {

  return (
    <div >

      <Olxnav />
      <SecondNav />
      <FirstHeader />
      <SecondHeader />

      <div className = "card-carousel">
        <CardCarousel/>
      </div>

      <FreshRecommendation />
      
      

      <div className="bottomAd">
        <img src={"https://tpc.googlesyndication.com/simgad/10440243720951453009"} />
      </div>

      

      <div>
        < OlxAppCard />
      </div>

      <div>
        <Footer />
        <Copyright />
      </div>
      <BackToTop
        showOnScrollUp
        showAt={700}
        speed={1500}
        easing="easeInOutQuint"
        showOnScrollUp = {false}
        
      >
        <span>^ Back to top</span>
      </BackToTop>
     
    </div>
  );
}

export default Home;
