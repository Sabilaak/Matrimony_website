import React, { useState } from 'react'
import logoimges from '../Assets/Logo.png'
import DataTable from 'react-data-table-component';
import img1 from '../Assets/Group 1355.png'
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
const Admin = () => {
 
  return (
    <div className='p-4'>
      <Link  to='/userdata'>
      <div className='justify-content-end text-end'>
      <button className='justify-content-end bg-primary px-4'>Add new +   </button>
      </div>
      </Link>
      
      <div className=' container-fluid admin_form px-4 mt-5'>
        <form className='p-4'>
          <div class="card-title text-center border-bottom">
            <img src={logoimges} className='p-2' />
          </div>
          <div class="mb-4">
            <input type="text" class="form-control" id="username" placeholder='Username' />
          </div>
          <div class="mb-4">
            <input type="password" class="form-control" id="password" placeholder='password' />
          </div>
          <div class="mb-4">
            <input type="checkbox" class="form-check-input" id="remember" />
            <label for="remember" class="form-label">Remember Me</label>
          </div>
          <div class="d-grid">
            <button type="submit" class="btn text-dark bg-danger ">Login</button>
          </div>

        </form>
      </div>

    
    </div>
  )
}

export default Admin