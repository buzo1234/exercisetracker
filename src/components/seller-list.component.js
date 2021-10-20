import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Product = props => (
  <tr>
    <td><img  src={props.product.sellerid.profilepic} alt="" height="40"  /></td>
    <td>{props.product.sellerid.sellername}</td>
    <td>{props.product.categoryid.subcategoryname}</td>
    <td>{props.product.productname}</td>
    
  </tr>
)

export default class SellerList extends Component {
  constructor(props) {
    super(props);
    this.state = {products: []};
  }

  componentDidMount() {
    axios.get('https://karanmahesh.herokuapp.com/products/')
     .then(response => {
       this.setState({ products: response.data });
     })
     .catch((error) => {
        console.log(error);
     })
  }


  productList() {
    return this.state.products.map(currentproduct => {
      return <Product product={currentproduct} key={currentproduct._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Sellers || Products</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Profile Pic</th>
              <th>Seller name</th>
              <th>Sub Category</th>
              <th>Product name</th>
            </tr>
          </thead>
          
            <tbody>
            { this.productList() }
            </tbody>
          
          
        </table>
      </div>
    )
  }
}