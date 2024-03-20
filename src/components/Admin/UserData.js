import React, { useState } from 'react'
import DataTable from 'react-data-table-component';
import img1 from '../Assets/Group 1355.png'
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
const UserData = () => {
    const columns = [
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true
        },
        {
            name: 'Age',
            selector: row => row.age,
            sortable: true
        },

        {
            name: 'Images',
            selector: row => <img width="40px" height="40px" src={img1} />
        },
        {
            name: 'Contact',
            selector: row => row.contact
        },
        {
            name: 'Membership',
            selector: row => <button className='bg-danger'>AdNew</button>
        },
        {
            name: 'Status',
            selector: row => <button className='bg-warning'>Approove</button>
        },
        {
            name: 'Status',
            selector: row => <MdDelete style={{ color: 'red', width: '80px', height: '30px' }} />
        },

    ];
    const data = [
        {
            id: 1,
            name: 'Anju',
            contact: 'dsdhhsjhj',
            age: '34'
        },
        {
            id: 2,
            name: 'mnju',
            contact: 'dsdhhsjhj',
            age: '34'
        },
        {
            id: 3,
            name: 'Anju',
            contact: 'dsdhhsjhj',
            age: '34'
        },
        {
            id: 4,

            name: 'Anju',
            contact: 'dsdhfdg',
            age: '34'
        }, {
            id: 5,
            name: 'enju',
            contact: 'djkjldkoek',
            age: '34'
        },
        {
            id: 6,
            name: 'snju',
            contact: 'dsdhbjwo',
            age: '34'
        },
        {
            id: 7,
            name: 'knju',
            contact: 'dhkjjwdlk',
            age: '34'
        }
    ]
    const [records, setRecords] = useState(data);
    function handleFilter(event) {
        const newData = data.filter(row => {
            return row.name.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())
        })
        setRecords(newData)
    }
    return (
        <div className='user_data mt-4 py-4 p-4'>
             <Link  to='/userlist'>
      <div className='justify-content-end text-end'>
      <button className='justify-content-end bg-primary px-4'>User List</button>
      </div>
      </Link>
            <div className='row mt-2 d-flex'>
                <div className='col-3'>
                    <div class="mb-4 text-start">

                        <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                            <option selected>Keyword Search</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>

                <div className='col-3'>
                    <div class="mb-4 text-start">

                        <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                            <option selected>Gender</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>
                <div className='col-3'>
                    <div class="mb-4 text-start">

                        <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                            <option selected>Contact Number</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>
                <div className='col-3'>
                    <div class="mb-4 text-start">

                        <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                            <option selected>Marital Status</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='container mt-5'>
                <div className='text-end justify-content-end'><input type="text" placeholder="search..." onChange={handleFilter} /></div>
                <DataTable
                    columns={columns}
                    data={records}
                    selectableRows
                    fixedHeader
                    pagination
                >
                </DataTable>
            </div>
        </div>
    )
}

export default UserData