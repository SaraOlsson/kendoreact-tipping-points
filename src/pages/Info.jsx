
import * as React from 'react';

import { useLocalization } from '@progress/kendo-react-intl';

import climate from '../assets/climate.png';

const Info = () => {
    const localizationService = useLocalization();
    return (
        <div id="Info" className="info-page main-content">
            <div className="content">
                <div className="kendoka">
                    <img src={climate} alt="climate" />
                </div>
                <div className="section-1">
                    <h1>TippingPoint</h1>
                    <h2>Collected climate research</h2>

                    <div className="section-2">
                        <div>
                            <div className="package-item">
                                <h3 className="package-title">
                                
                                This Tipping Point web app is a platform for  
                               
                                </h3>
                                <ul className="package-items">
                                    <li className="component-link">
                                        Researchers to gather information  
                                    </li>
                                    <li className="component-link">
                                        People to stay aware and incentivize commitments 
                                    </li>
                                    <li className="component-link">
                                        Governments/companies/politicals/(etc) to obtain facts as a basis for decision 
                                    </li>
                                </ul>
                            </div>
                        </div>  
                    </div>

                </div>
            </div>
            
            <div className="footer"/>
        </div>
    );
}

export default Info;

