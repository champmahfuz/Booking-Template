import React from 'react';
import usbanglaLogo from '../assets/img/us_bangla_logo.png';
import './Booking.css';


const Booking = () => {
    return (
        <div>
            <div className='main-container'>
                <div className="container shadow" style={{ background: "##FFFFFF", borderRadius: '5px 5px 0px 0px' }}>
                    <div className="d-flex justify-content-between pt-3">
                        <div><strong>DAC-CXB (One Way)</strong></div>
                        <div><strong>PENDING</strong></div>
                    </div>

                    <div className="d-flex justify-content-between pt-5 ">
                        <div>
                            <div className="d-flex justify-content-between booking-details">
                                <div className='booking-info'>
                                    <p className='text-start'><span>Booking ID</span><br />
                                        <span><strong>FB-JR123456986</strong></span></p>
                                </div>
                                <div className='booking-info'>
                                    <p className='text-start'><span>Airline Pnr</span><br />
                                        <span><strong>040VRL</strong></span></p>
                                </div>
                                <div className='booking-info'>
                                    <p className='text-start'><span>Pax Details</span><br />
                                        <span><strong>1 (Mahfuz Rahman)</strong></span></p>
                                </div>
                            </div>
                        </div>
                        <div className="airline-logo">
                            <img src={usbanglaLogo} alt="us-bangla" style={{ width: "80px", height: "40px" }} />
                        </div>
                    </div>
                </div>
                <div className="container shadow" style={{ background: "#CBE4DE", borderRadius: '0px 0px 5px 5px' }}>
                    <div className="d-flex justify-content-between pt-3 gap-5 flight-details">
                        <div className='flight-info'>
                            <p className='text-start'><span>Date</span><br />
                                <span>Wed, 04 Jan, 2023</span></p>
                        </div>
                        <div className='flight-info'>
                            <p className='text-start'><span>Time</span><br />
                                <span>09:40</span></p>
                        </div>
                        <div className='flight-info'>
                            <p className='text-start'><span>Flight Info</span><br />
                                <span>Departs DAC</span><br />
                                <span>Arrival CXB</span></p>
                        </div>
                        <div className='flight-info'>
                            <p className='text-start'><span>Flight Number</span><br />
                                <span>BS143 (DAC-CXB)</span><br /><br />
                                <span>Stops: 0</span></p>
                        </div>
                        <div className='flight-info'>
                            <p className='text-start'><span>Baggage Allowance</span><br />
                                <span>7 Kg</span><br />
                                <span>9 Kg</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;