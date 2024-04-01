"use client"
// import image from 'next.svg';
import { useState } from "react";
import Link from "next/link";
import useCart from "./cartStore";
import './homeStyles.css'
export default function Home() {
  const [name,setName]=useState([ 
  'iPhone 13',
  'Samsung Galaxy S21',
  'Google Pixel 6',
  'OnePlus 9 Pro',
  'Xiaomi Mi 11',
  'Sony Xperia 1 III',
  'Huawei P50 Pro',
  'OnePlus Nord 2',
  'Realme GT',
  'Oppo Find X3 Pro',
  'Vivo X60 Pro+',
  'Asus ROG Phone 5',
  'Motorola Edge+',
  'LG Velvet',
  'Nokia X20'])
  const [price,setPrice]=useState([
  799, // iPhone 13 price
  799, // Samsung Galaxy S21 price
  599, // Google Pixel 6 price
  969, // OnePlus 9 Pro price
  749, // Xiaomi Mi 11 price
  1299, // Sony Xperia 1 III price
  1099, // Huawei P50 Pro price
  399, // OnePlus Nord 2 price
  499, // Realme GT price
  1149, // Oppo Find X3 Pro price
  799, // Vivo X60 Pro+ price
  999, // Asus ROG Phone 5 price
  999, // Motorola Edge+ price
  599, // LG Velvet price
  349 // Nokia X20 price
  ])
  const [quantity,setQuantity]=useState([
  5,  // iPhone 13 quantity
  8,  // Samsung Galaxy S21 quantity
  3,  // Google Pixel 6 quantity
  2,  // OnePlus 9 Pro quantity
  6,  // Xiaomi Mi 11 quantity
  4,  // Sony Xperia 1 III quantity
  7,  // Huawei P50 Pro quantity
  10, // OnePlus Nord 2 quantity
  1,  // Realme GT quantity
  9,  // Oppo Find X3 Pro quantity
  0,  // Vivo X60 Pro+ quantity
  12, // Asus ROG Phone 5 quantity
  3,  // Motorola Edge+ quantity
  5,  // LG Velvet quantity
  8   // Nokia X20 quantity
  ])
  const [counters, setCounters] = useState(quantity.map(() => 0));

  const handleIncrement = (index) => {
    if (counters[index] < quantity[index]) {
      setCounters((prevCounters) => {
        const newCounters = [...prevCounters];
        newCounters[index]++;
        return newCounters;
      });
    }
  };

  const handleDecrement = (index) => {
    if (counters[index] > 0) {
      setCounters((prevCounters) => {
        const newCounters = [...prevCounters];
        newCounters[index]--;
        return newCounters;
      });
    }
  };
  const handleSend=(name,price,qnty)=>{
    //send this data to cart component using the useCart
    console.log(name,price,qnty)
    useCart.getState().addToCart(name,price,qnty)
  }
  return (
    <>
    <div className="parent">
        {name.map((item,ind)=>(
         <div key={ind} className="item-div">
          <h3>Name: {item}</h3>
          {/* <br/> */}
          <p className="price">Price:{price[ind]}$  </p>
          {/* <br/> */}
          <p className="qnty">
              Quantity: {quantity[ind] === 0 ? "Out of Stock" : counters[ind]}
              {  <button className=' inc'onClick={() => handleDecrement(ind)}>-</button>
          }
              {<button className=' inc'onClick={() => handleIncrement(ind)}>+</button>
          }
           
            </p>
           
          <button className='bg-blue-500 text-white px-4 py-2 rounded mt-4'onClick={()=>handleSend(item,price[ind],counters[ind])}>Add to cart</button>
          </div> 
        ))}
      <p className="cart-text"><Link href="/cart">Go to Cart</Link></p>
      </div>
    </>
  );
}
