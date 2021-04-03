import React from 'react'
import './secondNav.css'

function CategDrop() {
    return (
        <>
        <div className="container-fluid mega__menu">




        <div class="container-fluid">
        <nav class="navbar navbar-expand-lg navbar navbar-light ">
          
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item dropdown has-mega-menu" style={{position:'static'}}>
                        <a class="nav-link allCats dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" style={{coloe:'black'}} aria-expanded="false">All Categories</a>

                        <div class="dropdown-menu  dropDown " style={{width:'100%'}}>
                            <div class="px-0 container">
                                <div class="row">
                                    <div class="col-md-3">
                                    <strong><small className="ml-3">Vehicles</small></strong>
                                        <a class="dropdown-item" href="#">Tractors & Trailers</a>
                                        <a class="dropdown-item" href="#">Other Vehicles</a>
                                        <a class="dropdown-item" href="#">Rickshaw & Chingchi</a>
                                        <a class="dropdown-item" href="#">Buses, Vans & Trucks</a>
                                        <a class="dropdown-item" href="#">Spare Parts</a>
                                        <a class="dropdown-item" href="#">Cars Accessories</a>
                                        <a class="dropdown-item" href="#">Cars on Installments</a>
                                        <a class="dropdown-item" href="#">Cars</a>

                                        <div className="mt-3">
                                        <strong><small className="ml-3">Mobiles</small></strong>
                                                <a class="dropdown-item" href="#">Mobile Phones</a>
                                        <a class="dropdown-item" href="#">Accessories</a>
                                        <a class="dropdown-item" href="#">Tablets</a>


                                        <div className="mt-3">
                                            <strong><small className="ml-3">Electronics & Home Appliances</small></strong>
                                                    <a class="dropdown-item" href="#">Washing Machines & Dryers</a>
                                            <a class="dropdown-item" href="#">Fridges & Freezers</a>
                                            <a class="dropdown-item" href="#">AC & Coolers</a>
                                                    </div>
                                                </div>
                                    </div>
                                    <div class="col-md-3">
                                    <strong><small className="ml-3">Animals</small></strong>
                                                <a class="dropdown-item" href="#">Other Animals</a>
                                        <a class="dropdown-item" href="#">Pet Food & Accessories</a>
                                        <a class="dropdown-item" href="#">Horses</a>
                                        <a class="dropdown-item" href="#">Livestock</a>
                                        <a class="dropdown-item" href="#">Dogs</a>
                                        <a class="dropdown-item" href="#">Cats</a>
                                        <a class="dropdown-item" href="#">Hens & Aseel</a>
                                        <a class="dropdown-item" href="#">Fish & Aquariums</a>


                                        <div className=" subMenu mt-3">
                                                    <strong><small className="ml-3 ">Furniture</small></strong>
                                                <a class="dropdown-item" href="#">Other Household Items</a>
                                        <a class="dropdown-item" href="#">Officie Furniture</a>
                                        <a class="dropdown-item" href="#">Curtains and Blinds</a>
                                        <a class="dropdown-item" href="#">Rugs and Carpets</a>
                                        <a class="dropdown-item" href="#">Painting & Mirrors</a>
                                        <a class="dropdown-item" href="#">Garden & Outdoor</a>
                                        <a class="dropdown-item" href="#">Tables & Dining</a>
                                        <a class="dropdown-item" href="#">Home Decoration</a>
                                        
        </div>
                                    </div>
                                  <div class="col-md-3">
                                  <strong><small className="ml-3">Fashion & Beauty</small></strong>
                                            <a class="dropdown-item" href="#">Other Fashion</a>
                                    <a class="dropdown-item" href="#">Couture</a>
                                    <a class="dropdown-item" href="#">Lawn & Pret</a>
                                    <a class="dropdown-item" href="#">Wedding</a>
                                    <a class="dropdown-item" href="#">Watches</a>
                                    <a class="dropdown-item" href="#">Skin & Hair</a>
                                    <a class="dropdown-item" href="#">Make Up</a>
                                    <a class="dropdown-item" href="#">Jewellery</a>
                                    <a class="dropdown-item" href="#">Footwear</a>
                                    <a class="dropdown-item" href="#">Clothes</a>
                                    <a class="dropdown-item" href="#">Accessories</a>


                                    <div className=" subMenu mt-3">
                                                <strong><small className="ml-3 ">Property</small></strong>
                                            <a class="dropdown-item" href="#">Land & Plots</a>
                                    <a class="dropdown-item" href="#">Vacation Rentals - Guest Houses</a>
                                    <a class="dropdown-item" href="#">Roommates & Paying Guests</a>
                                    <a class="dropdown-item" href="#">Rooms</a>
                                    <a class="dropdown-item" href="#">Shops - Offices - Commerical Space</a>
                                    <a class="dropdown-item" href="#">Portion & Floors</a>
                                    
                                     </div>

                                     
                                    </div>
                                
                                    <div className="col-md-3">
                                     <strong><small className="ml-3">Services</small></strong>
                                            <a class="dropdown-item" href="#">Farm & Fresh Food</a>
                                    <a class="dropdown-item" href="#">Catering & Restaurant</a>
                                    <a class="dropdown-item" href="#">Home & Office Repair</a>
                                    <a class="dropdown-item" href="#">Movers & Packers</a>
                                    <a class="dropdown-item" href="#">Maids & Domestic Help</a>
                                    <a class="dropdown-item" href="#">Health & Beauty</a>
                                    <a class="dropdown-item" href="#">Event Services</a>
                                    <a class="dropdown-item" href="#">Electronics & Computer Repair</a>
                                    <a class="dropdown-item" href="#">Other Services</a>
                                    <a class="dropdown-item" href="#">Web Development</a>
                                    <a class="dropdown-item" href="#">Drivers & Taxi</a>
                                    <a class="dropdown-item" href="#">Car Rental</a>
                                    <a class="dropdown-item" href="#">Travel & Visa</a>
                                    <a class="dropdown-item" href="#">Education & Classes</a>





                                    <div className="mt-3">
                                    <strong><small className="ml-3">Books, Sports & Hobbies</small></strong>
                                            <a class="dropdown-item" href="#">Other Hobbies</a>
                                    <a class="dropdown-item" href="#">Gym & Fitness</a>
                                    <a class="dropdown-item" href="#">Sports Equipment</a>
                                            </div>
                                     </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item active">
                      <a class="nav-link" href="#">Mobile Phones </a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Cars</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Motorcycles</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Houses</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#">TV-Video-Audio</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Tablets</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Land & Plots</a>
                    </li>
                </ul>
            </div>
        </nav>
</div>














       
          

        </div>
        </>
            
    )
}

export default CategDrop