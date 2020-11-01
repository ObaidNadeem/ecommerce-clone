import React from 'react'
import { CommonCard } from './CommonCard'
// import banner2 from './Images/banner2.jpg'
// import JumboImage from './Images/JumboImage.jpg'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import './card.css';

function CardCarousel() {
    return (
        <>
        <div >
       
            <div className="mainContainer__carousel">

        <div className="container-fluid   carouselContainer">
            <div className="carousel__header">
            <h6 className="ml-5">More on Mobile Phones</h6>
            <a href="#" className="mr-2">View More</a>
            </div>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  
  <div className="carousel-inner mt-3 align-items-center    ">
    <div className="carousel-item active no-gutters ">
    <div className="container">
        <div className="row">
            <div className="col-md-3 col-sm-2 p-2 ind-card">
                <CommonCard
                 price='Rs 18,000'
                 model='Nokia 6.1 plus'
                 img='https://apollo-singapore.akamaized.net/v1/files/zdpow4ns24h41-PK/image;s=300x600;q=60'
                />
            </div>
            <div className="col-md-3 col-sm-2 p-2 ind-card">
                <CommonCard 
                price='Rs 18,000'
                model='Oppo A5s'
                img='https://apollo-singapore.akamaized.net/v1/files/u1lrxgkdhnta-PK/image;s=300x600;q=60'
                />
            </div>
            <div className="col-md-3 col-sm-2 p-2 ind-card">
                <CommonCard
                 price='Rs 48,000'
                 model='Oppo A5s'
                 img='https://apollo-singapore.akamaized.net/v1/files/x13orwgjhrv11-PK/image;s=300x600;q=60'
                
                />
            </div>
            <div className="col-md-3 col-sm-2 p-2 ind-card">
                <CommonCard
                 price='Rs 5,000'
                 model='Qz10 2Gb ram specs 32gp'
                 img='https://apollo-singapore.akamaized.net/v1/files/1urwqu1fghnn-PK/image;s=300x600;q=60'
                />
            </div>
        </div>
    </div>
    </div>
    <div className="carousel-item ">
    <div className="container">
        <div className="row">
            <div className="col-md-3 col-sm-2 p-2 ind-card">
                <CommonCard
                 price='Rs 28,000'
                 model='Huawei Y9 Prime With Box 10 motnhs..'
                 img='https://apollo-singapore.akamaized.net/v1/files/b524i653vc411-PK/image;s=300x600;q=60'
                />
            </div>
            <div className="col-md-3 col-sm-2 p-2 ind-card">
                <CommonCard
                price='Rs 12,500'
                model='Samsung Galaxy A01'
                img='https://apollo-singapore.akamaized.net/v1/files/5dcwl796oeon1-PK/image;s=300x600;q=60'
                />
            </div>
            <div className="col-md-3 col-sm-2 p-2 ind-card">
                <CommonCard
                // style={{height:'400px'}}
                 price='Rs 80,000'
                 model='iPhone Xs Max 64 GB FaceTime'
                 img='https://apollo-singapore.akamaized.net/v1/files/guxhssxnnbjn1-PK/image;s=00x600;q=60'
                />
            </div>
            <div className="col-md-3 col-sm-2 p-2 ind-card">
                <CommonCard
                 price='Rs 87,000'
                 model='iPhone X 256 GB'
                 img='https://apollo-singapore.akamaized.net/v1/files/l13cy54f4fwf3-PK/image;s=300x600;q=60'
                />
            </div>
        </div>
    </div>
    </div>

    
    
    
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="prev  mr-3" aria-hidden="true"><ArrowBackIosIcon/></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next " href="#carouselExampleIndicators" role="button" data-slide="next">
    <span style={{color:'black'}} className=" next ml-3" aria-hidden="true">
    <NavigateNextIcon fontSize='large'/>
    </span>
    <span className="sr-only">Next</span>
  </a>
</div>
        </div>

        </div> 
        </div>
        </>
    )
}

export default CardCarousel