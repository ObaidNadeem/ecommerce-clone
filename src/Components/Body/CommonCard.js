import React from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import './card.css';

function CommonCard(props) {
    return (
          <div>
              
  <div className="card p-3">
        
          
        <div className="img">
        
          <img className="card-img-top " style={{width:'110px', heigh:'180px',alignItems:'center'}} src={props.img} alt="Bologna"/>
          <FavoriteBorderIcon />  
            </div> 
          
          <div className="card-body">
            <h4 className="card-title">{props.price}</h4>
            <h6 className="card-subtitle mb-2 text-muted">{props.model}</h6>
            <p className="card-text"><small style={{fontSize:'10px',float:'right',marginTop:'15px',marginLeft:'30px'}}>TODAY</small></p>
            
          </div>
          </div>
          </div>
    )
}

function FreshRecommendCard(props) {
  return(
    <div>




      
    </div>

  )
}

export { CommonCard , FreshRecommendCard }