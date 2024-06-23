import React from 'react';
import "./myGigs.scss";
import { Link } from 'react-router-dom';

export function MyGigs() {
    

    return (
        <div className='myGigs'>
           <div className="container">
                <div className="title">
                    <h1>Gigs</h1>
                    <Link to="/add">
                        <button>Add New Gig</button>
                    </Link>
                </div>
                <table>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Prices</th>
                        <th>Sales</th>
                        <th>Action</th>
                    </tr>
                    <tr>
                        <td>
                            <img className='img' src='' alt=''/>
                        </td>
                        <td>Gig1</td>
                        <td>88</td>
                        <td>123</td>
                        <td>
                            <img className='delete' src="/img/delete.png" alt="" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img className='img' src='' alt=''/>
                        </td>
                        <td>Gig1</td>
                        <td>88</td>
                        <td>123</td>
                        <td>
                            <img className='delete' src="/img/delete.png" alt="" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img className='img' src='' alt=''/>
                        </td>
                        <td>Gig1</td>
                        <td>88</td>
                        <td>123</td>
                        <td>
                            <img className='delete' src="/img/delete.png" alt="" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img className='img' src='' alt=''/>
                        </td>
                        <td>Gig1</td>
                        <td>88</td>
                        <td>123</td>
                        <td>
                            <img className='delete' src="/img/delete.png" alt="" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img className='img' src='' alt=''/>
                        </td>
                        <td>Gig1</td>
                        <td>88</td>
                        <td>123</td>
                        <td>
                            <img className='delete' src="/img/delete.png" alt="" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img className='img' src='' alt=''/>
                        </td>
                        <td>Gig1</td>
                        <td>88</td>
                        <td>123</td>
                        <td>
                            <img className='delete' src="/img/delete.png" alt="" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img className='img' src='' alt=''/>
                        </td>
                        <td>Gig1</td>
                        <td>88</td>
                        <td>123</td>
                        <td>
                            <img className='delete' src="/img/delete.png" alt="" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img className='img' src='' alt=''/>
                        </td>
                        <td>Gig1</td>
                        <td>88</td>
                        <td>123</td>
                        <td>
                            <img className='delete' src="/img/delete.png" alt="" />
                        </td>
                    </tr>
                </table>
            </div> 
        </div>
    );
};
