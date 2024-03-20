import React from 'react'
import style from '../List_page/list.css'
import Group_39 from '../Assets/Group 39.png'
import Group_40 from '../Assets/Group 40.png'
import Mobile from '../Assets/Rectangle 43.png'
import img1 from '../Assets/Group 1355.png'
import Footer from '../Footer/Footer'
const List = () => {
    return (
        <div className='container-fluid'>
            <section>
                <div className='list_page'>
                    <h1 className='head_one'><strong>Millions of<br />
                        Happy Marriages</strong></h1>
                </div>
            </section>
            <section className='container-fluid'>
                <div className='row  justify-content-start'>
                    <div className='col-md-4 justify-content-start'>
                        <div className='' style={{ width: '1000px' }}>
                            <div class="row justify-content- mt-5">
                                <div class="col-lg-4 ">
                                    <div class="card shadow">
                                        <div class="card-title text-center border-bottom">
                                            <div class="d-grid">
                                                <button type="submit" class="btn text-dark bg-danger ">Filter the search</button>
                                            </div>
                                        </div>
                                        <div class="card-body">
                                            <form>
                                                <div class="mb-4 text-start">
                                                    <label for="username" class="form-label text-start">I'm looking for a</label><br />
                                                    <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                                        <option selected></option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>
                                                <div class="mb-4 text-start">
                                                    <label for="password" class="form-label">Ages(Years)</label>
                                                    <div className='row d-flex justify-content-start'>
                                                        <div className='col-2'>
                                                            <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                                                <option selected></option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </select>
                                                        </div>
                                                        <div className='col-2'><h6>To</h6></div>
                                                        <div className='col-2 '>
                                                            <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                                                <option selected></option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="mb-4 text-start">
                                                    <label for="username" class="form-label text-start">Religion/Caste</label><br />
                                                    <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                                        <option selected></option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>
                                                <div class="mb-4 text-start">
                                                    <label for="password" class="form-label">Height</label>
                                                    <div className='row d-flex justify-content-start'>
                                                        <div className='col-2'>
                                                            <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                                                <option selected></option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </select>
                                                        </div>
                                                        <div className='col-2'><h6>To</h6></div>
                                                        <div className='col-2 '>
                                                            <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                                                <option selected></option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="d-grid">
                                                    <button type="submit" class="btn text-dark bg-danger ">Search Filter</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=' container list_sec2 justify-content-start px-4 g-4'>
                            <h3>Download Free <br />Mobile App</h3>
                            <div className='row px-2 py-4 d-flex justify-content-center'>
                                <div className='col-2 px-2'><img src={Group_39} style={{ height: '40px', width: '120px', left: '-90px', position: 'relative' }} /></div>
                                <div className='col-2 px-2'><img src={Group_40} style={{ height: '40px', width: '120px', position: 'relative', left: '10px' }} /></div>
                            </div>
                            <img src={Mobile} className='' style={{ bottom: '-23px', position: 'relative' }} />
                        </div>
                    </div>
                    <div className='col-md-8 justify-content-start p-4'>
                        <div className='p-2'>
                            <form action="">
                                <div class="p-1 bg-light rounded rounded-pill serchbar_sec shadow-sm mb-4">
                                    <div class="input-group">
                                        <input type="search" placeholder="What're you searching for?" aria-describedby="button-addon1" class="form-control border-0 bg-light" />
                                        <div class="input-group-append">
                                            <button id="button-addon1" type="submit" class="btn btn-link text-primary"><i class="fa fa-search"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className='row img_card'>
                            <div className='col-4 justify-content-center'>
                                <img src={img1} />
                            </div>
                            <div className='col-4 p-4'>
                                <h3 className='justify-content-start'><strong>AM222717</strong></h3>
                                <h4 className='justify-content-start' style={{ fontSize: '14px' }}>25 Years , 5ft 2in / 168cm</h4>
                                <h4 className='justify-content-start' style={{ fontSize: '14px' }}>B.Sc Nursing - Nurse</h4>
                                <h4 className='justify-content-start' style={{ fontSize: '14px' }}>Roman Syrian Catholic</h4>
                                <h4 className='justify-content-start' style={{ fontSize: '14px' }}>Kochi, Kerala, India</h4>
                                <div class="input-group justify-content-center">
                                    <button class="btn bg-danger me-4 rounded-pill justify-content-center " type="button">Register Free</button>
                                </div>
                            </div>
                        </div>
                        <div className='row img_card'>
                            <div className='col-4 justify-content-center'>
                                <img src={img1} />
                            </div>
                            <div className='col-4 p-4'>
                                <h3 className='justify-content-start'><strong>AM222717</strong></h3>
                                <h4 className='justify-content-start' style={{ fontSize: '14px' }}>25 Years , 5ft 2in / 168cm</h4>
                                <h4 className='justify-content-start' style={{ fontSize: '14px' }}>B.Sc Nursing - Nurse</h4>
                                <h4 className='justify-content-start' style={{ fontSize: '14px' }}>Roman Syrian Catholic</h4>
                                <h4 className='justify-content-start' style={{ fontSize: '14px' }}>Kochi, Kerala, India</h4>
                                <div class="input-group justify-content-center">
                                    <button class="btn bg-danger me-4 rounded-pill justify-content-center " type="button">Register Free</button>
                                </div>
                            </div>
                        </div>
                        <div className='row img_card'>
                            <div className='col-4 justify-content-center'>
                                <img src={img1} />
                            </div>
                            <div className='col-4 p-4'>
                                <h3 className='justify-content-start'><strong>AM222717</strong></h3>
                                <h4 className='justify-content-start' style={{ fontSize: '14px' }}>25 Years , 5ft 2in / 168cm</h4>
                                <h4 className='justify-content-start' style={{ fontSize: '14px' }}>B.Sc Nursing - Nurse</h4>
                                <h4 className='justify-content-start' style={{ fontSize: '14px' }}>Roman Syrian Catholic</h4>
                                <h4 className='justify-content-start' style={{ fontSize: '14px' }}>Kochi, Kerala, India</h4>
                                <div class="input-group justify-content-center">
                                    <button class="btn bg-danger me-4 rounded-pill justify-content-center " type="button">Register Free</button>
                                </div>
                            </div>
                        </div>
                        <div className='row img_card'>
                            <div className='col-4 justify-content-center'>
                                <img src={img1} />
                            </div>
                            <div className='col-4 p-4'>
                                <h3 className='justify-content-start'><strong>AM222717</strong></h3>
                                <h4 className='justify-content-start' style={{ fontSize: '14px' }}>25 Years , 5ft 2in / 168cm</h4>
                                <h4 className='justify-content-start' style={{ fontSize: '14px' }}>B.Sc Nursing - Nurse</h4>
                                <h4 className='justify-content-start' style={{ fontSize: '14px' }}>Roman Syrian Catholic</h4>
                                <h4 className='justify-content-start' style={{ fontSize: '14px' }}>Kochi, Kerala, India</h4>
                                <div class="input-group justify-content-center">
                                    <button class="btn bg-danger me-4 rounded-pill justify-content-center " type="button">Register Free</button>
                                </div>
                            </div>
                        </div>
                        <div className='row img_card'>
                            <div className='col-4 justify-content-center'>
                                <img src={img1} />
                            </div>
                            <div className='col-4 p-4'>
                                <h3 className='justify-content-start'><strong>AM222717</strong></h3>
                                <h4 className='justify-content-start' style={{ fontSize: '14px' }}>25 Years , 5ft 2in / 168cm</h4>
                                <h4 className='justify-content-start' style={{ fontSize: '14px' }}>B.Sc Nursing - Nurse</h4>
                                <h4 className='justify-content-start' style={{ fontSize: '14px' }}>Roman Syrian Catholic</h4>
                                <h4 className='justify-content-start' style={{ fontSize: '14px' }}>Kochi, Kerala, India</h4>
                                <div class="input-group justify-content-center">
                                    <button class="btn bg-danger me-4 rounded-pill justify-content-center " type="button">Register Free</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default List