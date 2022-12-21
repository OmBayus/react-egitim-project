import React from "react";
import Product from "../components/Product";

export default function Home(props) {
  return <div className='flex flex-wrap gap-5 bg-gray-200 justify-center px-6 py-9'>
  {props.data.map(item=>{
    return <Product 
    key={item.id}
    name={item.title} 
    description={item.description} 
    price={item.price} 
    image={item.images[0]}
    addToCart={()=>{
      props.addToCart(item)
    }}
    />
  })}
</div>;
}
