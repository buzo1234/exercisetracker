import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component"
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import CreateCategory from "./components/create-category.component";
import CreateSubCategory from "./components/create-subcategory.component";
import CreateProduct from "./components/create-product.component";
import SellerList from "./components/seller-list.component";
import OrdersList from "./components/orders-list.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar /> {/* Creating components */}
        <br />
        <Route path="/sellers" exact component={SellerList}/>
        <Route path="/edit/:id" component={EditExercise}/>
        <Route path="/create" component={CreateProduct}/>
        <Route path="/subcategory" component={CreateSubCategory}/>
        <Route path="/category" component={CreateCategory}/>
        <Route path="/user" component={CreateUser}/>
        <Route path = "/" ><OrdersList/></Route>
      </div>
    </Router>
    
  );
}

export default App;
