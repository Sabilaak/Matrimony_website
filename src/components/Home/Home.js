import React from 'react'
import style from '../Home/home.css'
import people from '../Assets/people.jpg'
import user_tick from '../Assets/user_tick.png'
import user_cirlce from '../Assets/user_cirlce.png'
import Group_39 from '../Assets/Group 39.png'
import Group_40 from '../Assets/Group 40.png'
import Social_Icons from '../Assets/Social Icons.png'
import Footer from '../Footer/Footer'
const Home = () => {
    return (
        <div className='container-fluid'>
            <section className=' container-fluid img2'>
                <h1 className='head_one'><strong>Find Your Perfect Partner</strong></h1>
            </section>
            <section>
                <div className='img3'>
                    <h4 className='p-2 text-white'>Begin Your Search for an Ideal Match </h4>
                    <div className='row p-3'>
                        <div className='col'>
                            <h6 className='text-white' style={{ fontSize: '10px' }}>I am Looking for a</h6>
                            <div class="dropdown">
                                <button type="button" class="btn btn-light btn-sm dropdown-toggle" data-bs-toggle="dropdown">
                                    Bride
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Link 1</a></li>
                                    <li><a class="dropdown-item" href="#">Link 2</a></li>
                                    <li><a class="dropdown-item" href="#">Link 3</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className='col px-2'>
                            <h6 className='text-white' style={{ fontSize: '10px' }}>Age</h6>
                            <div class="dropdown px-2">
                                <button type="button" class="btn btn-light btn-sm dropdown-toggle px-2" data-bs-toggle="dropdown">
                                    25
                                </button>
                                <ul class="dropdown-menu px-2">
                                    <li><a class="dropdown-item " href="#">Link 1</a></li>
                                    <li><a class="dropdown-item" href="#">Link 2</a></li>
                                    <li><a class="dropdown-item" href="#">Link 3</a></li>
                                </ul>
                                <span className='text-white px-2'>To</span>
                                <button type="button" class="btn btn-light btn-sm dropdown-toggle" data-bs-toggle="dropdown">
                                    25
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Link 1</a></li>
                                    <li><a class="dropdown-item" href="#">Link 2</a></li>
                                    <li><a class="dropdown-item" href="#">Link 3</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className='col'>
                            <h6 className='text-white' style={{ fontSize: '10px' }}>Height</h6>
                            <div class="dropdown px-2">
                                <button type="button" class="btn btn-light btn-sm dropdown-toggle px-2" data-bs-toggle="dropdown">
                                    25
                                </button>
                                <ul class="dropdown-menu px-2">
                                    <li><a class="dropdown-item " href="#">Link 1</a></li>
                                    <li><a class="dropdown-item" href="#">Link 2</a></li>
                                    <li><a class="dropdown-item" href="#">Link 3</a></li>
                                </ul>
                                <span className='text-white px-2'>To</span>
                                <button type="button" class="btn btn-light btn-sm dropdown-toggle" data-bs-toggle="dropdown">
                                    25
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Link 1</a></li>
                                    <li><a class="dropdown-item" href="#">Link 2</a></li>
                                    <li><a class="dropdown-item" href="#">Link 3</a></li>
                                </ul>
                            </div>

                        </div>
                        <div className='col'>
                            <h6 className='text-white' style={{ fontSize: '10px' }}>Relegion</h6>
                            <div class="dropdown">
                                <button type="button" class="btn btn-light btn-sm dropdown-toggle" data-bs-toggle="dropdown">
                                    Any
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Link 1</a></li>
                                    <li><a class="dropdown-item" href="#">Link 2</a></li>
                                    <li><a class="dropdown-item" href="#">Link 3</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className='col'>
                            <form class="d-flex p-2">
                                <input class="form-control  p-4 bg-dark" type="search" placeholder=" ID Search .." aria-label="Search" />
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <h6 className='text-danger' style={{ fontSize: '12px' }}>MORE THAN 25 YEARS OF</h6>
                <h4 className='p-2'><strong>Bringing People Together</strong></h4>
                <h6 className='text-secondary'>Christian Matrimony Run by CMI Fathers</h6>
                <div className='row p-3'>
                    <div className='col-4'>
                        <img src={people} />
                        <h6 className='text-dark'><strong>1000 of Matching Profiles</strong></h6>
                        <h6 className='text-secondary' style={{ fontSize: '12px' }}>Search by location, community, profession <br />
                            & more from lakhs of active profiles</h6>
                    </div>
                    <div className='col-4'>
                        <img src={user_tick} />
                        <h6 className='text-dark'><strong>Verified by Directly Amala</strong></h6>
                        <h6 className='text-secondary' style={{ fontSize: '12px' }}>The Listing of profiles verified by our personal <br />
                            agents through directly contact the User</h6>
                    </div>
                    <div className='col-4'>
                        <img src={user_cirlce} />
                        <h6 className='text-dark'><strong></strong>Control over Privacy</h6>
                        <h6 className='text-secondary' style={{ fontSize: '12px' }}>Restrict unwanted access to contact <br />
                            details & photos/videos</h6>
                    </div>
                </div>
            </section>
            <section className='p-4'>
                <div className=' container-fluid geo_img p-4'>
                    <h6 className='text-danger p-3'>WEDDING DESTINATION PROFILES</h6>
                    <h4><strong>Brides <span className='text-danger'>&</span> Grooms</strong></h4>
                    <div className='card_img p-4'>
                        <div className='card_one'>
                            <h5 className='text-white bride_name'>AM265861</h5>
                            <h6 className='text-white bride_name' style={{ fontSize: '10px' }}>Age: 24</h6>
                        </div>
                        <div className='card_two'>
                            <h5 className='text-white bride_name'>AM265861</h5>
                            <h6 className='text-white bride_name' style={{ fontSize: '10px' }}>Age: 24</h6>
                        </div>
                        <div className='card_three'>
                            <h5 className='text-white bride_name'>AM265861</h5>
                            <h6 className='text-white bride_name' style={{ fontSize: '10px' }}>Age: 24</h6>
                        </div>
                        <div className='card_four'>
                            <h5 className='text-white bride_name'>AM265861</h5>
                            <h6 className='text-white bride_name' style={{ fontSize: '10px' }}>Age: 24</h6>
                        </div>
                    </div>
                </div>
            </section>
            <section className='container-fluid'>
                <div className='img_sectwo container-fluid'>
                    <h3 className='p-2'>Download Free Mobile App</h3>
                    <h6 className='text-secondary p-2'>Experience Wedding Destination With Our Mobile App <br />
                        Compatible With Both Android & IOS</h6>
                    <h4 className='text-danger'>Register For Free!</h4>
                    <div className='row d-flex justify-content-center'>
                        <div className='col-2 py-3'>
                            <img src={Group_39} style={{ height: '40px' }} />
                        </div>
                        <div className='col-2 py-3' >
                            <img src={Group_40} style={{ height: '40px', position: 'absolute', left: '-30px' }} />
                        </div>
                    </div>
                </div>
            </section>
            <section className='p-4'>
                <div className=' container-fluid geo_img p-4'>
                    <h6 className='text-danger p-3'>LAKHS OF HAPPY COUPLES</h6>
                    <h4><strong>Matched by Wedding Destination</strong></h4>
                    <div className='card_img p-4'>
                        <div className='card_five'>
                        </div>
                        <div className='card_six'>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <h6 className='text-danger'>Watch Our</h6>
                <h4 className='text-dark'> TV Commercial Ad’s</h4>
                <div className='coomer_sec'>
                    <div className='d-flex justify-content-end px-4 me-2'>
                        <h6 className='px-2'>You Tube</h6>
                        <img src={Social_Icons} className='' style={{ width: '15px', height: '20px' }} />
                    </div>
                    <div className='last_sec'>
                        <h2 >Find Your Perfect Match With <br />Wedding Destination</h2>
                        <p className='text-secondary'>Experience Wedding Destination With Our Mobile App <br />
                            Compatible With Both Android & IOS</p>
                        <div className='row d-flex justify-content-center'>
                            <div className='col-2 py-3'>
                                <img src={Group_39} style={{ height: '40px' }} />
                            </div>
                            <div className='col-2 py-3' >
                                <img src={Group_40} style={{ height: '40px', position: 'absolute', left: '-30px' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
            </section>
            <Footer/>
        </div>

    )
}

export default Home