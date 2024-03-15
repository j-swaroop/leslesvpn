import './index.css'

const Home = () => (
    <div className='container-fluid container-lg home-container pt-4 pb-4' id='Home'>
        <div className='row'>
            <div className='col-12 col-lg-6 d-flex flex-column justify-content-center order-1 order-lg-0 mt-3 mb-3'>
                <h1 className='heading'>Want anything to be <br/> easy with  <span>LaslesVPN. </span></h1>
                <p className='descriptions mt-3'> Provide a network for all your needs with ease and fun 
                    using <span className='description-highlighter'>LaslesVPN</span> discover interesting features from us.
                </p>
                <button className='started-btn'> Get Started</button>
            </div>
            <div className='col-12 col-lg-6'>
                <img src='https://laslesvpn-landing.netlify.app/images/illustration-1.svg' 
                    className='w-100 custom-img mb-3' alt='hom-img'/>
            </div>
        </div>
    </div>
)

export default Home