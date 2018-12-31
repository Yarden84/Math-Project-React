import React, { Component } from 'react';
import './footer.css';

import { BrowserRouter, Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
library.add(faCopyright);


class Footer extends Component {

    render() {
        return (

            <BrowserRouter>
                <React.Fragment>

                    <footer>

                        <div className="row text-center" id="content">
                            <div id="links">
                                <Link to="/shoppingCart" className="link" target="_parent"><p>סל קניות</p></Link>
                                <div id="middle">
                                    <Link to="/contact" className="link" target="_parent"><p>צרו קשר</p></Link>
                                </div>
                                <Link to="/about" className="link" target="_parent"><p>אודות</p></Link>
                            </div>
                        </div>
                        <div id="copyRight">
                            <p id="copyRightText">כל הזכויות שמורות לישראל הייזלר 2018</p>
                            <FontAwesomeIcon icon={faCopyright} id="copyRightIcon" />
                        </div>

                    </footer>
                </React.Fragment>
            </BrowserRouter>
        );
    }
}

export default Footer;

