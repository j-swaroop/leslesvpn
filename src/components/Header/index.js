import './index.css'

const Header = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top p-4">
            <div className="container d-flex justify-content-between">
                <a className="navbar-brand" href="#Home">
                    <img src='https://laslesvpn-landing.netlify.app/images/logo.svg' alt='logo' />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                    <div className="navbar-nav m-auto">
                        <a className="nav-link nav-item" href="#About">About <span className="sr-only">(current)</span></a>
                        <a className="nav-link nav-item" href="#Features">Features</a>
                        <a className="nav-link nav-item" href="#Pricing">Pricing</a>
                        <a className="nav-link nav-item" href="#Testimonials">Testimonials</a>
                        <a className="nav-link nav-item" href="#Help">Help</a>
                    </div>
                    <div className='buttons-container '>
                        <button className='sign-in-btn'>Sign In</button>
                        <button className='sign-up-btn'>Sign Up</button>
                    </div>
                </div>
            </div>
        </nav>
            
        
        
    )
}





export default Header