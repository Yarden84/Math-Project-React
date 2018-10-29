import React, { Component } from 'react';
import './contact.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
library.add(faEnvelope);
library.add(faPhoneSquare);

class Contact extends Component {
    state = {}
    render() {
        return (
            <div class="bgContact">

                <div class="container content">

                    <div class="container text-right" id="contact" dir="rtl">

                        <h1 id="contactTitle">צרו קשר</h1>

                        <br /><br /><br /><br />

                        <div id="contactText">
                            <p>מטרת האתר היא להפוך את לימודי המתמטיקה לנגישים וברורים יותר.</p>
                            <p> על מנת להשיג זאת יועיל לנו מאוד לדעת כיצד אתם חוויתם את השימוש בחומר המוצג באתר. </p>
                            <p>נשמח לכל שאלה, הצעה, הערה וכד'.</p>
                        </div>

                        <br /><br /><br /><br />

                        <div class="row text-center">
                            <div class="col-md-6" id="envelopeSymbol">
                                <FontAwesomeIcon icon={faEnvelope} size="3x" />
                                <span id="mail"><a href="mailto:haizlermath@gmail.com" id="mailLink"><strong>haizlermath@gmail.com</strong></a></span>
                            </div>

                            <div class="col-md-6" id="phoneSymbol">
                                <FontAwesomeIcon icon={faPhoneSquare} size="3x" />
                                <span id="phone"><strong>050-6666031</strong></span>
                            </div>

                        </div>
                        <br />

                    </div>

                </div>
            </div>
        );
    }
}

export default Contact;