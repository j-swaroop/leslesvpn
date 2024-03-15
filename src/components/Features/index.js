import './index.css'

const Features = () => (
    <div className='container pb-2 pt-3 features-container' id='Features'>
        <div className='row'>
            <div className='col-12 col-md-7 d-flex justify-content-center'>
                <img src='https://tangsir.xyz/_next/static/media/features.81973f36.svg' alt='' 
                    className='w-100'/>
            </div>
            <div className='col-12 col-md-5 mt-3'>
                <div className='d-flex flex-column justify-content-center ml-md-4 mt-4'>
                    <p className='features-heading'>We Provide Many Features You Can Use</p>
                    <p className='features-text mb-4 mb-md-5 mt-md-3'>You can explore th features that we provide with fun and have their own functions each feature.</p>
                    <ul className='pl-0 custom-list'>
                        <li className='d-flex justify-content-start mb-3 mb-md-4'>
                            <img src='https://tangsir.xyz/_next/static/media/bx_bxs-check-circle.be2ed013.svg' 
                                alt='tick' className='mr-2'/>
                            Powerfull online protection.
                        </li>
                        <li className='d-flex justify-content-start mb-3 mb-md-4'>
                            <img src='https://tangsir.xyz/_next/static/media/bx_bxs-check-circle.be2ed013.svg' 
                                alt='tick' className='mr-2'/>
                            Internet without borders.
                        </li>
                        <li className='d-flex justify-content-start mb-3 mb-md-4'>
                            <img src='https://tangsir.xyz/_next/static/media/bx_bxs-check-circle.be2ed013.svg' 
                                alt='tick' className='mr-2'/>
                             Supercharged VPN.
                        </li>
                        <li className='d-flex justify-content-start mb-md-4'>
                            <img src='https://tangsir.xyz/_next/static/media/bx_bxs-check-circle.be2ed013.svg' 
                                alt='tick' className='mr-2'/>
                            No specific time limits.
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
)

export default Features