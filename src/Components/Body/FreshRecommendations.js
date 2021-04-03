import React, { Component } from 'react';
import { blue } from '@material-ui/core/colors';
import FeaturedColData from './FeaturedColData';
import { FreshRecmCard , StartSellingCard } from './FreshRecmCard';
import './FreshRecm.css';
import './card.css'

class FreshRecommendation extends Component {
  
 
  
    render(){
        return(
            <div className="recm-cont">
               <div className="recm-cont-heading">
               <div className="recm-indv-container">

                    {
                        FeaturedColData.map((value,index)=>{
                            
                            return <div className="col fresh-rec-card"> <FreshRecmCard className="fresh" key={index} imgsrc = {value.img} price={value.price} title = {value.title} /> </div>
                        })

                    }

               </div>


               </div>
                
            </div>
        )
    }
}

export default FreshRecommendation;