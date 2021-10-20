import React, { Component } from 'react';
import axios from 'axios';

export default class CreateSubCategory extends Component {
  constructor(props) {
    super(props);

    this.onChangeCategoryid = this.onChangeCategoryid.bind(this);
    this.onChangeSubcategoryname = this.onChangeSubcategoryname.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      categoryid: '',
      subcategoryname: '',
      categories: [],
    }
  }

  componentDidMount() {
    axios.get('https://karanmahesh.herokuapp.com/categories')
    .then(response => {
    if (response.data.length > 0) {
      this.setState({ 
        categories: response.data.map(category => {
            const container = {};
            container.cat_id = category._id;
            container.cat_name = category.categoryname;
            
            return container;
            /*category.categoryname*/
        }),
        categoryid: response.data[0]._id
      });
    }
  })
  .catch((error) => {
    console.log(error);
  })
  }

  onChangeCategoryid(e) {
    this.setState({
      categoryid: e.target.value
    });
  }

  onChangeSubcategoryname(e) {
    this.setState({
      subcategoryname: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
  
    const subcategory = {
      categoryid: this.state.categoryid,
      subcategoryname: this.state.subcategoryname,
    };
  
    console.log(subcategory);
    axios.post('https://karanmahesh.herokuapp.com/subcategories/add', subcategory)
    .then(res => alert(res.data));

    this.setState({
      subcategoryname: ''
    })
    
  }

  render() {
    return (
      <div>
        <h3>Create New Sub Category: (These will go to Tier 2 category)</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Parent Category: </label>
            <select ref="userInput"
                required
                className="form-control"
                value={this.state.categoryid}
                onChange={this.onChangeCategoryid}>
                {
                  this.state.categories.map(function(category) {
                    return <option 
                      key={category.cat_id}
                      value={category.cat_id}>{category.cat_name}
                      </option>;
                  })
                }
            </select>
          </div>
          <div className="form-group"> 
            <label>Sub Category: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.subcategoryname}
                onChange={this.onChangeSubcategoryname}
                />
          </div>

          <div className="form-group">
            <input type="submit" value="Add SubCategory" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}