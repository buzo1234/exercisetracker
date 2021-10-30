import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Orders</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/sellers" className="nav-link">Seller_Data</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Add_Product</Link>
          </li>
          <li className="navbar-item">
          <Link to="/subcategory" className="nav-link">Add_SubCategory</Link>
          </li>
          <li className="navbar-item">
          <Link to="/category" className="nav-link">Add_Category</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Add_Seller</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}