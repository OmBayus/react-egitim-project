import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import Product from './components/Product';
import Navbar from "./components/Navbar"
import axios from "axios"
import {Routes,Route} from "react-router-dom"

//pages
import Home from "./pages/Home"


function App() {

  // const [number, setNumber] = useState(0);
  const [data,setData] = useState([])
  const [cart,setCart] = useState([])

  
  useEffect(()=>{
    axios.get("https://dummyjson.com/products").then(res=>{
      setData(res.data.products)
    })

  },[])

  function addToCart(item){
    if(cart.find(element=>element.id === item.id)){
      return
    }
    // setCart([...cart,item])
    setCart((prev)=>{
      return [...prev,item]
    })
  }

  // const onClickHandle = () => {
  //   setNumber(number + 1);
  // }
  //tailwind
  //npm start
  return (
    <div className={"App"}>
      {/* <p>
        {number}
      </p>
      <button
        onClick={onClickHandle}
      >
        bana tıkla
      </button> */}
      <Navbar cart={cart} />
      <Routes>
        <Route path="/" element={<Home data={data} addToCart={addToCart}/>} />
        <Route path="/about" element={<div>About</div>} />
      </Routes>
      

    </div>
  );
}

export default App;
