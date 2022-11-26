import React, { useState, useEffect } from 'react'
import axios from 'axios'
export default function WishlisttPage() {

    const [list, setlist] = useState();
    const [wishdata, setWishData]= useState(JSON.parse(localStorage.getItem('Wishlist')) || []);
    useEffect(() => {
        axios.get('https://dummyjson.com/products').then((res) => {
            if (wishdata?.length > 0 && res?.data?.products){
                let list = wishdata?.map((list) => {
                    return  res?.data?.products?.filter((cartlist) =>cartlist?.id === list)
                });
                setlist(list)
            }

        }).catch((err) => {
            console.log(err);
        })
    },[wishdata]);

    const BuyNow = (data) => {
        console.log('addtoCart', data);
    }
    const cancelProduct = (data) =>{
        if (data?.id){
            let cartlist = wishdata?.filter(cartlist => cartlist !== data?.id);
            localStorage.setItem('Wishlist',JSON.stringify(cartlist));
            setWishData(cartlist);
            alert(`${data?.title} remove from cart`);
        }
    }

    return (
        <div>
            <div> <h1>Your wish Items</h1></div>
            <div className="p-5 grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2 ">
                {list?.map((data, i) => {
                    return (
                        <div className="w-full px-4 lg:px-0" key={i}>
                            <div className="p-3 bg-white rounded shadow-md">
                                <div className="">
                                    <div className='mt-1 text-xl font-semibold'>{data[0]?.title}</div>
                                    <div className="relative w-full mb-3 h-48 lg:mb-0">
                                        <img src={data[0]?.images[0]} alt="hello"
                                            className="object-fill w-full h-full rounded" />
                                    </div>
                                    <div className="flex-auto p-2 justify-evenly">
                                        <div className="flex flex-wrap ">
                                            <div className="flex items-center justify-between w-full min-w-0 ">
                                                <h2 className="mr-auto text-lg cursor-pointer hover:text-gray-900  ">
                                                    {data[0]?.category}                                            </h2>
                                            </div>
                                        </div>
                                        <div className="mt-1 text-xl font-semibold">${data[0]?.price}</div>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <div className="inline-flex shadow-md hover:shadow-lg focus:shadow-lg" role="group">
                                            <button type="button" onClick={() => cancelProduct(data[0])} className=" m-2 inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-red-700 focus:outline-none focus:ring-0 active:bg-red-800 transition duration-150 ease-in-out">Remove</button>
                                            <button type="button" onClick={() => BuyNow(data[0])} className="m-2 rounded-l inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase hover:bg-green-700 focus:bg-green-700 focus:outline-none focus:ring-0 active:bg-green-800 transition duration-150 ease-in-out">Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}
