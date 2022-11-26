import React, { useState, useEffect } from 'react'
import axios from 'axios'
export default function ListPage() {

    const [list, setlist] = useState();
    const [cartdata, setCartData]= useState(JSON.parse(localStorage.getItem('Cartlist')) || []);
    const [wishdata, setWishData]= useState(JSON.parse(localStorage.getItem('Wishlist')) || []);

    useEffect(() => {

        axios.get('https://dummyjson.com/products').then((res) => {
            setlist(res?.data?.products)

        }).catch((err) => {
            console.log(err);
        })
    },[]);
    // useEffect(() => {
    //     let item = cartdata
    // },[cartdata])

    const addtoCart = (data) =>{
        let selected_data =  [...cartdata];
        if (data?.id){
            let list = cartdata?.filter(cartlist => cartlist === data?.id);
            if(list.length === 0){
                selected_data?.push(data.id);
                localStorage.setItem('Cartlist',JSON.stringify(selected_data));
                setCartData(selected_data);
            }else {
                console.log('data', data)
                alert(`${data?.title} Already added to the cart`);
            }
        }
    }
    const addtowishlist = (data) => {
        let selected_data =  [...wishdata];
        if (data?.id){
            let list = wishdata?.filter(cartlist => cartlist === data?.id);
            if(list.length === 0){
                selected_data?.push(data.id);
                localStorage.setItem('Wishlist',JSON.stringify(selected_data));
                setWishData(selected_data);
            }else {
                console.log('data', data)
                alert(`${data?.title} Already added to the wishlist`);
            }
        }
    }

    return (
        <div>
            <div> <h1>Productlist</h1></div>
            <div className="p-5 grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2 ">
                {list?.map((data, i) => {
                    return (
                        <div className="w-full px-4 lg:px-0" key={i}>
                            <div className="p-3 bg-white rounded shadow-md">
                                <div className="">
                                    <div className='mt-1 text-xl font-semibold'>{data?.title}</div>
                                    <div className="relative w-full mb-3 h-48 lg:mb-0">
                                        <img src={data?.images[0]} alt="hello"
                                            className="object-fill w-full h-full rounded" />
                                    </div>
                                    <div className="flex-auto p-2 justify-evenly">
                                        <div className="flex flex-wrap ">
                                            <div className="flex items-center justify-between w-full min-w-0 ">
                                                <h2 className="mr-auto text-lg cursor-pointer hover:text-gray-900  ">
                                                    {data?.category}                                            </h2>
                                            </div>
                                        </div>
                                        <div className="mt-1 text-xl font-semibold">${data?.price}</div>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <div className="inline-flex shadow-md hover:shadow-lg focus:shadow-lg" role="group">
                                            <button type="button" onClick={() => addtoCart(data)} className="m-2 rounded-l inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out">Add to cart</button>
                                            <button type="button" onClick={() => addtowishlist(data)} className=" m-2 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out">Add to wishlist</button>
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
