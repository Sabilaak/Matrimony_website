import React from 'react'
import logoimges from '../Assets/Logo.png'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <div class="container-fluid">
          <img src={logoimges} className='px-4' />
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul class="navbar-nav  mb-2 mb-lg-0 px-2 ">
              <Link to='/'>
                <li class="nav-item">
                  <a class="nav-link" href="#">Home</a>
                </li>
              </Link>
              <li class="nav-item px-2">
                <a class="nav-link active" aria-current="page" href="#">Offers</a>
              </li>
              <Link to='/list'>
                <li class="nav-item">
                  <a class="nav-link" href="#">List</a>
                </li>
              </Link>
              <Link to='/admin'>
                <li class="nav-item">
                  <a class="nav-link" href="#">Admin</a>
                </li>
              </Link>
              <li class="nav-item px-2">
                <a class="nav-link active" aria-current="page" href="#">Happy Couples
                </a>
              </li>
              <li class="nav-item dropdown px-2">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Helpe
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
            <form class="d-flex justify-content-end px-4">
              <input class="form-control me-2 rounded-pill " type="search" placeholder=" ID Search" aria-label="Search" style={{ backgroundColor: "#FAA0A0" }} />
              {/* <button class="btn btn-outline-success rounded-pill bg-danger text-white " type="submit">  Login</button> */}
              <button type="button" class="btn btn_shape bg-danger text-white" data-bs-toggle="modal" data-bs-target="#exampleModal " style={{ borderRadius: '60%' }}>Login</button>
              <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      {/* <h5 class="modal-title" id="exampleModalLabel">Login Form</h5> */}
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body" style={{ width: '1200px', left: '45px' }}>
                      <div class="row justify-content- mt-5">
                        <div class="col-lg-4 ">
                          <div class="card shadow">
                            <div class="card-title text-center border-bottom">
                              <img src={logoimges} className='p-2' />
                              <h4 class="p-3"><strong>Let’s get started now!</strong></h4>
                            </div>
                            <div class="card-body">
                              <form>
                                <div class="mb-4">
                                  <label for="username" class="form-label">LoginID</label>
                                  <input type="text" class="form-control" id="username" />
                                </div>
                                <div class="mb-4">
                                  <label for="password" class="form-label">Password</label>
                                  <input type="password" class="form-control" id="password" />
                                </div>
                                <div class="mb-4">
                                  <input type="checkbox" class="form-check-input" id="remember" />
                                  <label for="remember" class="form-label">Remember Me</label>
                                </div>
                                <div class="d-grid">
                                  <button type="submit" class="btn text-dark bg-danger ">Login</button>
                                </div>
                                <div class="d-grid">
                                  <p>Forgot password ?</p>
                                  <p style={{ fontSize: '9px' }}>New to Wedding Destination ? Register Free</p>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header