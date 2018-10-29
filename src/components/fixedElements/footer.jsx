import React, { Component } from 'react';
import './footer.css';

import { BrowserRouter, Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
library.add(faCopyright);


class Footer extends Component {
    state = {}
    render() {
        return (

            <BrowserRouter>
                <React.Fragment>

                    <footer>

                        <div className="row text-center" id="content">
                            <div className="col-md-4 row" id="copyRight2">
                                <FontAwesomeIcon icon={faCopyright} />
                                <p>כל הזכויות שמורות לישראל הייזלר 2018</p>
                            </div>
                            <div className="col-md-6 row" id="links">
                                <Link to="/shoppingCart" className="col-md-4" target="_parent"><p>סל קניות</p></Link>
                                <Link to="/contact" className="col-md-4" id="middle" target="_parent"><p>צרו קשר</p></Link>
                                <Link to="/about" className="col-md-4" target="_parent"><p>אודות</p></Link>
                            </div>
                        </div>

                    </footer>
                </React.Fragment>
            </BrowserRouter>
        );
    }
}

export default Footer;

