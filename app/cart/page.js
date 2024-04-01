"use client"
import React from 'react';
import useCart from '../cartStore';
import Link from 'next/link';
import './cart.css';
const Page = () => {
    const cart = useCart((state) => state.cart);
    let cartItems = Object.values(cart);
    const total = cartItems.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
    const handleClear = () => {
        useCart.getState().clearCart();
    };

    return (
        <div className='flex justify-center bod'>
            <div className='w-96 cart'>
                <h1 className='text-2xl font-bold mb-4'>Cart</h1>
                {cartItems.map((item, index) => (
                    <div key={index} className='border-b-2 border-gray-200 mb-4 pb-2'>
                        <h3 className='text-lg font-semibold'>{item.name}</h3>
                        <p className='text-black-500'>Price: {item.price}</p>
                        <p className='text-black-500'>Quantity: {item.quantity}</p>
                    </div>
                ))}
                <h3 className='text-xl font-semibold mt-4'>Total: {total}</h3>
                <button className='bg-blue-500 text-white px-4 py-2 rounded mt-4' onClick={handleClear}>Clear cart</button>
                <Link href="/" className='block mt-2 text-blue-500'>Go back</Link>
            </div>
        </div>
    );
};

export default Page;
