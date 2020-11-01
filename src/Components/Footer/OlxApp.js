import React from 'react';
import './OlxApp.css'

class OlxAppCard extends React.Component {
    render(){
        return(
            <div>
            
                <div className="olxAppCard">

                    <img src={"https://statics.olx.com.pk/external/base/img/phone-app.png"}/>
                   
                    <div className="text">
                    <h2>TRY THE OLX APP</h2>
                    <p>Buy, sell and find just about anything using the app on your mobile.</p>
                    </div>

                    <div>
                         <div className="line"></div>
                    </div>
                    <div> 
                        <p  className="getAppPara">GET YOUR APP TODAY</p>
                        <div className="links">
                            <img src={"https://statics.olx.com.pk/external/base/img/appstore_2x.png"}/>
                            <img src={"https://statics.olx.com.pk/external/base/img/playstore_2x.png"}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export { OlxAppCard }