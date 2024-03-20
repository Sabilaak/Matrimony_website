import React, { useState } from 'react'
import DataTable from 'react-data-table-component';
import img1 from '../Assets/Group 1355.png'
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FaEdit } from "react-icons/fa";
const Userlist = () => {
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
            name: 'Gallery',
            selector: row => <button className='bg-danger'>View</button>
        },
        {
            name: 'Description',
            selector: row => <button className='bg-danger'>View</button>
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
    return (
        <div className='mt-5 user_data'>
            <div className='container mt-5'>
                <DataTable
                    columns={columns}
                    data={data}
                    fixedHeader

                >
                </DataTable>
            </div>
        </div>
    )
}

export default Userlist