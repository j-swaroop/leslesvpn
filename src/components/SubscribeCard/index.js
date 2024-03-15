import './index.css'

const SubscribeCard = () => (
    <div className='container subscribe-card shadow-lg p-5'>
        <div className='row'>
            <div className='col-12 d-flex flex-column flex-md-row text-center text-md-left justify-content-center justify-content-md-between'>
                <div className='col-12 col-md-6 d-flex flex-column justify-content-center'>
                    <p className='subscribe-title'>Subscribe Now for Get Special Features</p>
                    <p className='subscribe-text'>Let's subscribe with us and find the fun.</p>
                </div>
                <div className='d-flex flex-column justify-content-center'>
                    <button className='subscribe-btn'> Subscribe</button>
                </div>
            </div>
        </div>
    </div>
)

export default SubscribeCard