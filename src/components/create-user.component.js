import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {

    constructor(props) {
        super(props);
        this.onChangeSellername = this.onChangeSellername.bind(this);
        this.onChangeContact = this.onChangeContact.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.fileSelectedHandler = this.fileSelectedHandler.bind(this);
        this.onChangeBusinessname = this.onChangeBusinessname.bind(this);
        this.onChangeBusinessdesc = this.onChangeBusinessdesc.bind(this);
        this.onChangeDelivery = this.onChangeDelivery.bind(this);

        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
          sellername: '',
          contact: '',
          address: '',
          profilepic: [],
          businessname: '',
          businessdesc: '',
          delivery: '',
        };
      };

      onChangeSellername(e) {
        this.setState({
          sellername: e.target.value
        });
      };

      onChangeContact(e) {
        this.setState({
          contact: e.target.value
        });
      };

      onChangeAddress(e) {
        this.setState({
          address: e.target.value
        });
      };

      fileSelectedHandler(e) {
        this.setState({
          profilepic : e.target.files[0]
        })
      }

      onChangeBusinessname(e) {
        this.setState({
          businessname: e.target.value
        });
      };

      onChangeBusinessdesc(e) {
        this.setState({
          businessdesc: e.target.value
        });
      };

      onChangeDelivery(e) {
        this.setState({
          delivery: e.target.value
        });
      };

      onSubmit(e) {
        e.preventDefault();
        const newSeller = new FormData();
        newSeller.append("sellername", this.state.sellername);
        newSeller.append("contact", this.state.contact);
        newSeller.append("address", this.state.address);
        newSeller.append("profilepic", this.state.profilepic);
        newSeller.append("businessname", this.state.businessname);
        newSeller.append("businessdesc", this.state.businessdesc);
        newSeller.append("delivery", this.state.delivery);
        
        axios.post('http://localhost:5000/sellers/add', newSeller)
        .then(res => console.log(res.data));
        
        alert(`Seller ${this.state.sellername} added succesfully`);

        this.setState({
          sellername: '',
          contact: '',
          address: '',
          profilepic: [],
          businessname: '',
          businessdesc: '',
          delivery: ''
        })

        
      };

    render() {
        return (
            <div>
            <h3>Create New Seller</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group"> 
                <label>Seller name: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.sellername}
                    onChange={this.onChangeSellername}
                    />
              </div>
              <div className="form-group"> 
                <label>Contact: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.contact}
                    onChange={this.onChangeContact}
                    />
              </div>
              <div className="form-group"> 
                <label>Address: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.address}
                    onChange={this.onChangeAddress}
                    />
              </div>
              <div className="form-group"> 
                <label>Profile Pic / Business Pic: </label>
                <input type="file" name="profilepic"  onChange={this.fileSelectedHandler}/>
              </div>
              <div className="form-group"> 
                <label>Business name: </label>
                <input  type="text"
                    className="form-control"
                    value={this.state.businessname}
                    onChange={this.onChangeBusinessname}
                    />
              </div>
              <div className="form-group"> 
                <label>Business Description: </label>
                <input  type="text"
                    className="form-control"
                    value={this.state.businessdesc}
                    onChange={this.onChangeBusinessdesc}
                    />
              </div>
              <div className="form-group"> 
                <label>Delivery (true/false): </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.delivery}
                    onChange={this.onChangeDelivery}
                    />
              </div>
          
              <div className="form-group">
                <input type="submit" value="Create Seller" className="btn btn-primary" />
              </div>
            </form>
          </div>
        )
    }
}