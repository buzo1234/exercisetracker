import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { collection, onSnapshot, orderBy, query } from '@firebase/firestore';
import { db } from '../firebase';
import Order from './Order'


function OrdersList() {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        return onSnapshot(query(collection(db, 'orders'),orderBy('timestamp','desc')), snapshot => {
            setOrders(snapshot.docs);
        });
    },[db])

    console.log(orders)
    return (
        <div>
        <h3>Orders</h3>
        {orders.map((order) => (
            <Order
                key = {order.id}
                id = {order.id}
                username = {order.data().username}
                usercontact = {order.data().usercontact}
                useraddress = {order.data().useraddress}
                cartitems = {order.data().cartitems}
            />
        ))}
      </div>
    )
}

export default OrdersList;
  