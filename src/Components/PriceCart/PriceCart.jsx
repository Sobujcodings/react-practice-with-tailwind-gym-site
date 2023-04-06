import React from 'react';
import Featues from '../Features/Featues';

const PriceCart = ({ price }) => {
    //flex / grid kkorle er parent pricelist compo te jeeye kortee hobe jekhan  theke ata ashche
    return (

        <div className='border relative h-80  bg-indigo-400 mt-3 rounded-md '>
            <div>
                <h1 className='text-center mt-2'>
                    <span className='text-4xl  font-extrabold text-purple-700'>{price.price}</span>
                    <span className='text-white font-bold text-xl'>/mon</span>
                </h1>
            </div>

            <div>
                <h1 className='text-2xl font-bold my-2 text-center'>
                    {price.name}
                </h1>
            </div>

            {/* features */}
            <p>
                <p className='font-semibold px-4 mb-1 underline text-white'>Features:</p>

                {
                    price.features.map(feature =>
                        <Featues
                        feature={feature}
                        ></Featues>
                    )
                }
                <button className='bg-green-600 absolute bottom-0 hover:bg-green-800 p-2 mt-2 rounded-md w-full'>Bye now</button>
            </p>
        </div>
    );
};


export default PriceCart;