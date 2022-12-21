import React from 'react'
// alt + shift + f  = kod formatını düzelt
// #FFE5F1 rgb(120,230,30) 
function Product(props) {
    return (
        <div className=" bg-white border border-gray-500 rounded-lg w-64 gap-3 flex flex-col hover:shadow-lg hover:scale-105 transition-all" >
            <div className='text-lg font-semibold py-2 px-4'>
                {props.name}
            </div>
            <div className='w-full flex justify-center' >
                <img className='w-40 border' src={props.image}></img>
            </div>
            <div className='px-4 text-gray-600 flex justify-center'>
                <span className=' text-center'>{props.description}</span>
            </div>

            <div className='px-4 pb-3 text-green-700 flex flex-row justify-between '>
                <span className='text-xl'>{props.price} $</span>
                <button onClick={props.addToCart} className='bg-green-600 text-[#FFE5F1] hover:bg-green-200 hover:text-gray-700 transition-all font-semibold w-[105px] rounded-lg px-2 py-1.5'>sepete ekle</button>
            </div>
        </div>
    )
}

export default Product