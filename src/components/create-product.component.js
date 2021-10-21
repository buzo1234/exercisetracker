import React, { Component } from 'react';
import axios from 'axios';


export default class CreateProduct extends Component {
  constructor(props) {
    super(props);

    this.onChangeSellerid = this.onChangeSellerid.bind(this);
    this.onChangeCategoryid = this.onChangeCategoryid.bind(this);
    this.onChangeProductname = this.onChangeProductname.bind(this);
    this.fileSelectedHandler = this.fileSelectedHandler.bind(this);
    this.onChangeProductdesc = this.onChangeProductdesc.bind(this);
    this.onChangeProductprice = this.onChangeProductprice.bind(this);
    this.onChangeTimerequired = this.onChangeTimerequired.bind(this);
    this.onChangeFragile = this.onChangeFragile.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      sellerid:'',
      categoryid:'',
      productname: '',
      productimg:[],
      productdesc: '',
      productprice: 0,
      timerequired:'',
      fragile:'',
      categories: [],
      sellers: []
    }
  };
  

  componentDidMount() {
    axios.get('https://karanmahesh.herokuapp.com/subcategories')
    .then(response => {
    if (response.data.length > 0) {
      this.setState({ 
        categories: response.data.map(category => {
            const container = {};
            container.cat_id = category._id;
            container.cat_name = category.subcategoryname;
            
            return container;
        }),
        categoryid: response.data[0]._id
        });
        }
    })
    .catch((error) => {
        console.log(error);
    });

    axios.get('https://karanmahesh.herokuapp.com/sellers')
    .then(response => {
    if (response.data.length > 0) {
      this.setState({ 
        sellers: response.data.map(seller => {
            const container = {};
            container.sel_id = seller._id;
            container.sel_name = seller.sellername;
            container.sel_phone = seller.contact;
            
            return container;
        }),
        sellerid: response.data[0]._id
        });
        }
    })
    .catch((error) => {
        console.log(error);
    });

  }

  onChangeCategoryid(e) {
    this.setState({
      categoryid: e.target.value
    });
  }

  onChangeSellerid(e) {
    this.setState({
      sellerid: e.target.value
    });
  }

  onChangeProductname(e) {
    this.setState({
      productname: e.target.value
    });
  }
  
  fileSelectedHandler(e) {
    this.setState({
      productimg : e.target.files
    })
  }

  onChangeProductdesc(e) {
    this.setState({
      productdesc: e.target.value
    });
  }

  onChangeProductprice(e) {
    this.setState({
      productprice: e.target.value
    });
  }

  onChangeTimerequired(e) {
    this.setState({
      timerequired: e.target.value
    });
  }

  onChangeFragile(e) {
    this.setState({
      fragile: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const newProduct = new FormData();
    newProduct.append("productname", this.state.productname);
    newProduct.append("sellerid", this.state.sellerid);
    newProduct.append("categoryid", this.state.categoryid);
    newProduct.append("productdesc", this.state.productdesc);

    for (const key of Object.keys(this.state.productimg)) {
        newProduct.append('productimg', this.state.productimg[key])
    }

    newProduct.append("productprice", this.state.productprice);
    newProduct.append("timerequired", this.state.timerequired);
    newProduct.append("fragile", this.state.fragile);
  
    console.log([...newProduct]);
    axios.post('https://karanmahesh.herokuapp.com/products/add', newProduct)
    .then(res => alert(res.data));
    
    this.setState({
        productname: '',
        sellerid: '',
        categoryid: '',
        productdesc:'',
        productimg: [],
        productprice: '',
        timerequired: '',
        fragile: ''
      })

  };

  render() {

    return (
      <div>
        <h3>Add a Product</h3>
        <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
            <label>Seller Name: </label>
            <select ref="userInput"
                
                className="form-control"
                value={this.state.sellerid}
                onChange={this.onChangeSellerid}>
                {
                  this.state.sellers.map(function(seller) {
                    return <option 
                      key={seller.sel_id}
                      value={seller.sel_id}>{seller.sel_name}__{seller.sel_phone}
                      </option>;
                  })
                }
            </select>
            </div>

          <div className="form-group"> 
            <label>Sub Category Name: </label>
            <select ref="userInput"
                
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
            <label>Product Name: </label>
            <input  type="text"
                
                className="form-control"
                value={this.state.productname}
                onChange={this.onChangeProductname}
                />
          </div>

           <div className="form-group"> 
                <label>Product Images: (max-10)</label>
                <input type="file" name="productimg"  onChange={this.fileSelectedHandler} multiple/>
           </div>

          <div className="form-group"> 
            <label>Product Description: </label>
            <input  type="text"
                
                className="form-control"
                value={this.state.productdesc}
                onChange={this.onChangeProductdesc}
                />
          </div>
          <div className="form-group"> 
            <label>Product Price: </label>
            <input  type="number"
                
                className="form-control"
                value={this.state.productprice}
                onChange={this.onChangeProductprice}
                />
          </div>
          <div className="form-group"> 
            <label>Time Required: </label>
            <input  type="text"
                
                className="form-control"
                value={this.state.timerequired}
                onChange={this.onChangeTimerequired}
                />
          </div>
          <div className="form-group"> 
            <label>Fragile: (true/fasle) </label>
            <input  type="text"
                
                className="form-control"
                value={this.state.fragile}
                onChange={this.onChangeFragile}
                />
          </div>
          
          

          <div className="form-group">
            <input type="submit" value="Add Product" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}