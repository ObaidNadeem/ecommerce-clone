import React from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FeaturedColData from './FeaturedColData'
import './FreshRecm.css';

function FreshRecmCard(props) {
    return (
        <div class="card p-3 w-75 fresh">
            
       
        
        <p id="recmTag">Recommended</p>
       <div className="img">
       
        <img class="card-img-top " style={{width:'110px', heigh:'180px',alignItems:'center'}} src={props.imgsrc} alt=""/>
        <FavoriteBorderIcon />  
           </div> 
        
        <div class="card-body">
            <h4 class="card-title">{props.price}</h4>
            <h6 class="card-subtitle mb-2 text-muted">{props.title}</h6>
            <p class="card-text"><small style={{fontSize:'11px',float:'left',marginTop:'23px',marginLeft:'0px'}}>{props.place}</small></p>
            <p class="card-text"><small style={{fontSize:'11px',float:'right',marginTop:'15px',marginLeft:'30px'}}>TODAY</small></p>
          
        </div>
        </div>
        
    )
}

function StartSellingCard(){
    return(
           <div className="card p-3 w-75 start-selling">
                <div className="card-body">
                    <h4 className="card-title">Want to see your stuff here?</h4>
                    <p className="card-text">Make some extra cash by selling things in your community. GO on, it's quick and easy</p>
                    <a href="#home" className = "card-text-button">Start selling</a>
                </div>
            </div>
        // </div>
    )
}


export {FreshRecmCard,StartSellingCard}