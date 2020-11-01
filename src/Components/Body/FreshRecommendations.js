import React, { Component } from 'react';
// import {FreshRecommendCard} from './CommonCard';
import { blue } from '@material-ui/core/colors';
import FeaturedColData from './FeaturedColData';
import { FreshRecmCard , StartSellingCard } from './FreshRecmCard';
import './FreshRecm.css';
import './card.css'

class FreshRecommendation extends Component {
  
    // load_more = () => {
    //     this.setState ({
          
    //       })
    //       console.log(this.state.value)
    // } 
  
    render(){
        return(
            <div className="recm-cont">
               <div className="recm-cont-heading">
               <div className="recm-indv-container">

                    {
                        FeaturedColData.map((value,index)=>{
                            // if (index==3){
                            //     return <StartSellingCard />
                            // }
                            // else{
                            return <div className="col fresh-rec-card"> <FreshRecmCard className="fresh" key={index} imgsrc = {value.img} price={value.price} title = {value.title} /> </div>
                            // }
                        })

                    }

               </div>


               </div>
                
                    {/* <button onClick={this.load_more} type="submit">Load More</button> */}
            </div>
        )
    }
}

export default FreshRecommendation;