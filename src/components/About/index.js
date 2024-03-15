import { FaUser } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { LiaServerSolid } from "react-icons/lia";
import './index.css'

const About = () => (
    <div className='container mb-5 shadow-lg custom-box text-center pb-3 pt-5' id='About'>
        <div className='row p-3'>
            <div className='col-12 col-sm-4 mb-3 custom-hr'>
                <div className="d-flex justify-content-around justify-content-md-center">
                    <FaUser className="icon"/>
                    <div className="d-flex flex-column justify-content-center ml-md-3">
                        <p className="mb-1 custom-text">90+</p>
                        <p className="cutsom-des">Users</p>
                    </div>
                </div>
                
            </div>
            <div className='col-12 col-sm-4 mb-3 custom-hr'>
                <div className="d-flex justify-content-around justify-content-md-center">
                    <FaLocationDot className="icon"/>
                    <div className="d-flex flex-column justify-content-center ml-md-3">
                        <p className="mb-1 custom-text">30+</p>
                        <p className="cutsom-des">Locations</p>
                    </div>
                </div>
            </div>
            <div className='col-12 col-sm-4 mb-3'>
                <div className="d-flex justify-content-around justify-content-md-center">
                    <LiaServerSolid className="icon"/>
                    <div className="d-flex flex-column justify-content-center ml-md-3">
                        <p className="mb-1 custom-text">50+</p>
                        <p className="cutsom-des">Servers</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)



export default About