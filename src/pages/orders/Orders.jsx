import React from 'react';
import "./orders.scss";

export function Orders() {

    const currentUser = {
        id: 1,
        username: "John Doe",
        isSeller: true,
    }
    

    return (
        <div className='orders'>
           <div className="container">
                <div className="title">
                    <h1>Orders</h1>
                </div>
                <table>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Prices</th>
                        <th>{currentUser?.isSeller ? "Buyer" : "Seller"}</th>
                        <th>Contact</th>
                    </tr>
                    <tr>
                        <td>
                            <img className='img' src='' alt=''/>
                        </td>
                        <td>Gig1</td>
                        <td>88</td>
                        <td>123</td>
                        <td>
                            <img className='delete' src="/img/message.png" alt="" />
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
                            <img className='delete' src="/img/message.png" alt="" />
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
                            <img className='delete' src="/img/message.png" alt="" />
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
                            <img className='delete' src="/img/message.png" alt="" />
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
                            <img className='delete' src="/img/message.png" alt="" />
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
                            <img className='delete' src="/img/message.png" alt="" />
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
                            <img className='delete' src="/img/message.png" alt="" />
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
                            <img className='delete' src="/img/message.png" alt="" />
                        </td>
                    </tr>
                </table>
            </div> 
        </div>
    );
};
