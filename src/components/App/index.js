import React,{Component} from "react";
import Header from "../Header";
import OrderList from "../OrderList";
import "./style.css";

class App extends Component{
  render(){
    return (
      <div className="app">
          <Header/>
          <OrderList/>
      </div>
    );
  }
}

export default App;
