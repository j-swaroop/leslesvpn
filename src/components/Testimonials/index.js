import { FaStar } from "react-icons/fa";
import './index.css'

const Testimonials = () => (
    <div className='container pt-3 pb-3 testimonial-container' id='Testimonials'>
        <div className='row'>
            <p className='col-12 testimonial-title'> Trusted by Thousands of Happy Customer</p>
            <p className='col-12 testimonial-text text-center'> These are the stories of our customers who have 
                joined us with great pleasure when using this crazy feature.</p>
        </div>
        <div className="row review-list">
            <div className='review-container mt-4'>
                <div className='d-flex justify-content-between'>
                    <div className="d-flex justify-content-center">
                        <img src='https://lasles-vpn-landing-page.vercel.app/assets/costumers/viezh.png'
                            alt='person' className='person-img'/>
                        <div className='d-flex flex-column justify-content-center ml-3'>
                            <p className="person-name">Viezh Robert</p>
                            <p className="person-text">Warzaw, Poland</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <p className="rating">4.5</p>
                        <FaStar className="star ml-2" />
                    </div>
                </div>
                <p className="person-review mt-3"> "Wow... I am very happy to use this VPN, it turned out to be more than 
                    expectations and so far there have been no problems. LaslesVPN always the best".</p>
            </div>
            <div className='review-container mt-4'>
                <div className='d-flex justify-content-between'>
                    <div className="d-flex justify-content-center">
                        <img src='	https://lasles-vpn-landing-page.vercel.app/assets/costumers/yessica.png'
                            alt='person' className='person-img'/>
                        <div className='d-flex flex-column justify-content-center ml-3'>
                            <p className="person-name">Yessica Christy</p>
                            <p className="person-text">Shanxi, China</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <p className="rating">4.5</p>
                        <FaStar className="star ml-2" />
                    </div>
                </div>
                <p className="person-review mt-3"> "I like it because i like to travel far and still can connect with high speed".</p>
            </div>
            <div className='review-container mt-4'>
                <div className='d-flex justify-content-between'>
                    <div className="d-flex justify-content-center">
                        <img src='https://lasles-vpn-landing-page.vercel.app/assets/costumers/kim.png'
                            alt='person' className='person-img'/>
                        <div className='d-flex flex-column justify-content-center ml-3'>
                            <p className="person-name">Kim Young Jou</p>
                            <p className="person-text">Seoul, South Korea</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <p className="rating">4.5</p>
                        <FaStar className="star ml-2" />
                    </div>
                </div>
                <p className="person-review mt-3"> "This is very unusual for my business that 
                    currently requires a virtual private network that has high security".</p>
            </div>
        </div>
    </div>
)

export default Testimonials