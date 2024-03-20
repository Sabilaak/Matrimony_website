import React from 'react'
import logoimges from '../Assets/Logo.png'
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { BsWhatsapp } from "react-icons/bs";
import Group from '../Assets/Group.png'
import Group_39 from '../Assets/Group 39.png'
import Group_40 from '../Assets/Group 40.png'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
const Footer = () => {
    return (
        <div>
            <section className='p-4 container-fluid'>
                <div className='container-fluid footer_sec '>
                    <div className='row'>
                        <div className='col-md-4 p-4 d-flex px-2'>
                            <FaPhoneVolume style={{
                                width: '30px', height: '70px', color: 'white'
                            }} />&nbsp;&nbsp;
                            <div className='d-block'>
                                <h6 className='text-white'>Call Us</h6>
                                <h6 className='text-white'>+91-9587423654</h6>
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='col-md-4 p-4 d-flex px-2'>
                                <span className=''><IoMailOutline style={{
                                    width: '30px', height: '70px', color: 'white'
                                }} /></span>&nbsp;&nbsp;
                                <div className='d-block'>
                                    <h6 className='text-white'>Mail Us</h6>
                                    <h6 className='text-white'>weddingdestin@gmail.com</h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='col-md-4 p-4 d-flex px-2 '>
                                <span className=' '><BsWhatsapp style={{
                                    width: '30px', height: '70px', color: 'white'
                                }} /></span>&nbsp;&nbsp;
                                <div className='d-block'>
                                    <h6 className='text-white'>WhatsApp</h6>
                                    <h6 className='text-white' style={{ fontSize: '15px' }}>+91-9587423654</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='p-2 d-flex justify-content-start'>
                        <img src={Group} />
                    </div>
                    <div className='p-2 d-flex  ' style={{ position: 'relative', left: '8%', top: '-40px' }}>
                        <h5 className='text-white'>D E S T I N A T I O N</h5>
                    </div>
                    <div className='row'>
                        <div className='col-md-3'>
                            <h6 className='p-2 text-white' style={{ fontSize: '12px' }}>Choose Wedding Destination for a seamless and <br />enchanting wedding experience, where love blossoms <br />and dreams come true.</h6>
                            <div className='row d-flex justify-content-center p-4'>
                                <div className='col-2 '>
                                    <img src={Group_39} style={{ height: '40px', position: 'relative', left: '-120px' }} />
                                </div>
                                <div className='col-2 ' >
                                    <img src={Group_40} style={{ height: '40px', position: 'absolute', left: '-30px' }} />
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 justify-content-start '>
                            <ul className='text-white'>
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact</li>
                                <li>Plans & Pricing</li>
                                <li >Payment Info</li>
                                <li>Matched By US</li>
                            </ul>
                        </div>
                        <div className='col-md-3 justify-content-start '>
                            <ul className='text-white'>
                                <li>Login</li>
                                <li>Register</li>
                                <li>Matrimony Info</li>
                                <li>Feedback</li>
                                <li >Privacy Policy</li>
                                <li>Terms of Service</li>
                            </ul>
                        </div>
                        <div className='col-md-3 justify-content-start text-white'>
                            <p>Contact Details</p>
                            <h6>Wedding destination, Zebra<br /> building First floor, Nadakkavu,<br /> Kozhikode - 673 001 </h6>
                            <h6>Working Time : 09:30 to 05:30</h6>
                        </div>
                    </div>
                    <hr style={{ color: 'wheat' }} />
                    <div className='foot d-flex justify-content-end'>
                        <p className='text-white justify-content-start' style={{ fontSize: '12px', left: '-700px', position: 'relative' }}>  Wedding Destination Since 1996. All rights reserved. weddingdestination.com</p>
                        <FaFacebookF style={{
                            color: 'white'
                        }} />
                        <FaInstagram style={{
                            color: 'white'
                        }} />
                        <FaWhatsapp style={{
                            color: 'white'
                        }} />
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Footer