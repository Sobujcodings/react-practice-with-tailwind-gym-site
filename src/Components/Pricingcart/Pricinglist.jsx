import React, { useEffect, useState } from 'react';
import PriceCart from '../PriceCart/PriceCart';

const Pricinglist = () => {
    const [prices, SetPrices] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => SetPrices(data))
    }, [])
    return (
        <div className='mx-12 my-4'>
            <h1 className='text-4xl text-center rounded-md py-4 bg-purple-300 font-extrabold text-purple-900'>Awesome Affordable Prices</h1>


            <div className='grid  lg:grid-cols-4 md:grid-cols-2  gap-2 '>
                {/* md dile by default small r jonno akta kore chole ashbe karon pricce akta div */}
                {
                    prices.map(price =>
                        <PriceCart
                            key={price.id}
                            price={price}
                        ></PriceCart>
                    )
                }
            </div>  


        </div>
    );
};

export default Pricinglist;