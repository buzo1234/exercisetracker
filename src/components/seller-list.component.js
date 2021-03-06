import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Product = props => (
  <tr>
    <td><img  src={props.product.sellerid.profilepic} alt="" height="40"  /></td>
    <td>{props.product.sellerid.sellername}</td>
    <td>{props.product.categoryid.subcategoryname}</td>
    <td>{props.product.productname}</td>
    <td><img src={props.product.productimg[0]} alt="" height="40" /></td>
    <td>{props.product.productdesc}</td>
    <td>{props.product.productprice}</td>
    <td>{props.product.timerequired}</td>
    <td>{props.product.fragile.toString()}</td>
    <td><a href="#" onClick={() => {props.deleteProduct(props.product._id)}}>delete</a></td>
  </tr>
)


export default class SellerList extends Component {
  constructor(props) {
    super(props);
    this.deleteProduct = this.deleteProduct.bind(this);
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

  deleteProduct(id){
    axios.delete('https://karanmahesh.herokuapp.com/products/'+id)
    .then(res =>alert(res.data));
    this.setState({
      products: this.state.products.filter(el => el._id !== id)
    })
  }


  productList() {
    return this.state.products.map(currentproduct => {
      return <Product product={currentproduct} deleteProduct={this.deleteProduct} key={currentproduct._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Sellers || Products</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>ProPic</th>
              <th>Seller name</th>
              <th>SubCategory</th>
              <th>Name</th>
              <th>Img</th>
              <th>Desc</th>
              <th>Price</th>
              <th>Time</th>
              <th>Fragile</th>
              <th>Actions</th>
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