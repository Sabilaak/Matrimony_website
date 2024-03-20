import React from 'react'

const Login = () => {
  return (
    <div>
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
<div className='card_img'>
<div className='card_one'></div> 
<div className='card_one'></div> 
<div className='card_one'></div> 
<div className='card_one'></div>
    </div> 
 
                </div>
            </section>
        </div>
    </div>
  )
}

export default Login
