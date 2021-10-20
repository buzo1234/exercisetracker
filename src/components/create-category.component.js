import React, { Component } from 'react';
import axios from 'axios';

export default class CreateCategory extends Component {

    constructor(props) {
        super(props);
        this.onChangeCategoryname = this.onChangeCategoryname.bind(this);

        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
          categoryname: '',
        };
      };

      onChangeCategoryname(e) {
        this.setState({
          categoryname: e.target.value
        });
      };

      onSubmit(e) {
        e.preventDefault();
        
        const category = {
            categoryname : this.state.categoryname,
        };

        axios.post('https://karanmahesh.herokuapp.com/categories/add', category)
        .then(res => alert(res.data));
        
        this.setState({
          categoryname: '',
        })

        
      };

    render() {
        return (
            <div>
            <h3>Create New Category: (These will be tier 1 categories)</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group"> 
                <label>Category name: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.categoryname}
                    onChange={this.onChangeCategoryname}
                    />
              </div>
          
              <div className="form-group">
                <input type="submit" value="Add Category" className="btn btn-primary" />
              </div>
            </form>
          </div>
        )
    }
}