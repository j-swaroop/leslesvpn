import './index.css'

const Pricing = () => (
    <div className='container pb-3 pt-4 mt-5' id='Pricing'>
        <div className='row'>
            <div className='col-12'>
                 <p className='pricing-heading'> Choose Your Plan</p>
                 <p className='pricing-text'> Lets's choose the package that is best for you and explore it <br/> happily and cheerfully.</p>
            </div>
            <div className='col-12 col-md-6 col-lg-4 mt-5'>
                <div className='d-flex flex-column justify-content-between choose-plan-container p-5'>
                    <div>
                        <img className='w-70' alt='gift'
                            src='https://tangsir.xyz/_next/static/media/plan-free.48c5723a.svg' />
                        <p className='plan-text mt-4'> Free Plan</p>
                    </div>
                    <ul className='pl-0 mt-3 custom-plan-list'>
                        <li className='d-flex justify-content-center mb-3'>
                            <img src='https://tangsir.xyz/_next/static/media/priv-list.8ae7c74d.svg' 
                                alt='tick' className='mr-3 tick-img'/>
                            Unlimited Bandwich
                        </li>
                        <li className='d-flex justify-content-center mb-3'>
                            <img src='https://tangsir.xyz/_next/static/media/priv-list.8ae7c74d.svg' 
                                alt='tick' className='mr-3 tick-img'/>
                            Encrypted Connection
                        </li>
                        <li className='d-flex justify-content-center mb-3'>
                            <img src='https://tangsir.xyz/_next/static/media/priv-list.8ae7c74d.svg' 
                                alt='tick' className='mr-3 tick-img'/>
                            No Traffic Logs
                        </li>
                        <li className='d-flex justify-content-center mb-3'>
                            <img src='https://tangsir.xyz/_next/static/media/priv-list.8ae7c74d.svg' 
                                alt='tick' className='mr-3 tick-img'/>
                            Works on All Devices
                        </li>
                    </ul>
                    <div>
                        <p className='price-text'> Free</p>
                        <button className='price-btn'>Select</button>
                    </div>
                </div>
            </div>
            <div className='col-12 col-md-6 col-lg-4 mt-5'>
                <div className='d-flex flex-column justify-content-between choose-plan-container p-5'>
                    <div>
                        <img className='w-70' alt='gift'
                            src='https://tangsir.xyz/_next/static/media/plan-free.48c5723a.svg' />
                        <p className='plan-text mt-4'> Standard Plan</p>
                    </div>
                    <ul className='pl-0 mt-3 custom-plan-list'>
                        <li className='d-flex justify-content-center mb-3'>
                            <img src='https://tangsir.xyz/_next/static/media/priv-list.8ae7c74d.svg' 
                                alt='tick' className='mr-3 tick-img'/>
                            Unlimited Bandwich
                        </li>
                        <li className='d-flex justify-content-center mb-3'>
                            <img src='https://tangsir.xyz/_next/static/media/priv-list.8ae7c74d.svg' 
                                alt='tick' className='mr-3 tick-img'/>
                            Encrypted Connection
                        </li>
                        <li className='d-flex justify-content-center mb-3'>
                            <img src='https://tangsir.xyz/_next/static/media/priv-list.8ae7c74d.svg' 
                                alt='tick' className='mr-3 tick-img'/>
                            Yes Traffic Logs
                        </li>
                        <li className='d-flex justify-content-center mb-3'>
                            <img src='https://tangsir.xyz/_next/static/media/priv-list.8ae7c74d.svg' 
                                alt='tick' className='mr-3 tick-img'/>
                            Works on All Devices
                        </li>
                        <li className='d-flex justify-content-center mb-3'>
                            <img src='https://tangsir.xyz/_next/static/media/priv-list.8ae7c74d.svg' 
                                alt='tick' className='mr-3 tick-img'/>
                            Connect Anyware
                        </li>
                    </ul>
                    <div>
                        <p className='price-text'> $9 <span className='custom-price-style'>/ mo</span></p>
                        <button className='price-btn'>Select</button>
                    </div>
                </div>
            </div>
            <div className='col-12 col-md-6 col-lg-4 mt-5'>
                <div className='d-flex flex-column justify-content-between choose-plan-container p-5'>
                    <div>
                        <img className='w-70' alt='gift'
                            src='https://tangsir.xyz/_next/static/media/plan-free.48c5723a.svg' />
                        <p className='plan-text mt-4'> Premium Plan</p>
                    </div>
                    <ul className='pl-0 mt-3 custom-plan-list'>
                        <li className='d-flex justify-content-center mb-3'>
                            <img src='https://tangsir.xyz/_next/static/media/priv-list.8ae7c74d.svg' 
                                alt='tick' className='mr-3 tick-img'/>
                            Unlimited Bandwich
                        </li>
                        <li className='d-flex justify-content-center mb-3'>
                            <img src='https://tangsir.xyz/_next/static/media/priv-list.8ae7c74d.svg' 
                                alt='tick' className='mr-3 tick-img'/>
                            Encrypted Connection
                        </li>
                        <li className='d-flex justify-content-center mb-3'>
                            <img src='https://tangsir.xyz/_next/static/media/priv-list.8ae7c74d.svg' 
                                alt='tick' className='mr-3 tick-img'/>
                            Yes Traffic Logs
                        </li>
                        <li className='d-flex justify-content-center mb-3'>
                            <img src='https://tangsir.xyz/_next/static/media/priv-list.8ae7c74d.svg' 
                                alt='tick' className='mr-3 tick-img'/>
                            Works on All Devices
                        </li>
                        <li className='d-flex justify-content-center mb-3'>
                            <img src='https://tangsir.xyz/_next/static/media/priv-list.8ae7c74d.svg' 
                                alt='tick' className='mr-3 tick-img'/>
                            Connect Anyware
                        </li>
                        <li className='d-flex justify-content-center mb-3'>
                            <img src='https://tangsir.xyz/_next/static/media/priv-list.8ae7c74d.svg' 
                                alt='tick' className='mr-3 tick-img'/>
                            Get New Features
                        </li>
                    </ul>
                    <div>
                    <p className='price-text'> $12 <span className='custom-price-style'>/ mo</span></p>
                        <button className='price-btn'>Select</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
export default Pricing