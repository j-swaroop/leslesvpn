import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

import './index.css'

const Help = () => (
    <div className='container help-container pb-3 pt-3' id='Help'>
        <div className='row'>
            <div className='col-12 d-flex flex-column justify-content-center'>
                <img src='https://lasles-vpn-landing-page.vercel.app/assets/Logo.svg' 
                    alt='laselsvpn' className='lasles-img'/>
                <p className='description'>LaslesVPN is a private virtual network that has unique features and has high security.</p>
                <div className="help-icons-container">
                    <FaFacebookF className="help-icon"/>
                    <FaTwitter className="help-icon"/>
                    <FaSquareInstagram className="help-icon"/>
                </div>
            </div>
        </div>
        <div className="row help-lists-container">
        <ul className="help-list-container mt-4">
                <li className="help-list-title">Product</li>
                <li className="help-list-item"> Download</li>
                <li className="help-list-item"> Pricing</li>
                <li className="help-list-item"> Locations</li>
                <li className="help-list-item"> Server</li>
                <li className="help-list-item"> Countries</li>
                <li className="help-list-item"> Blog</li>
            </ul>
            <ul className="help-list-container mt-4">
                <li className="help-list-title">Engage</li>
                <li className="help-list-item"> LaslesVPN?</li>
                <li className="help-list-item"> FAQ</li>
                <li className="help-list-item"> Titorials</li>
                <li className="help-list-item"> About Us</li>
                <li className="help-list-item"> Privacy Policy</li>
                <li className="help-list-item"> Terms Of Service</li>
            </ul> 
            <ul className="help-list-container mt-4">
                <li className="help-list-title">Earn Mony</li>
                <li className="help-list-item"> Affaliate</li>
                <li className="help-list-item"> Become Parterner</li>
                
            </ul>
        </div>
    </div>
)

export default Help