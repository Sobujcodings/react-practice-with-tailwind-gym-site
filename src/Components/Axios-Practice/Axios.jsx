import React, { useState } from 'react';
import axios from 'axios';

// axios data fething ta k aro easy kore dey (data r sathe aro onek information pawa jay)
// direct data diye dey
// but you have fetch data to data to data data.data.data
const Axios = () => {
    const [data, setData] = useState([]);

    axios.get('https://jsonplaceholder.typicode.com/users')
        .then(data => {
            const displaydata = data.data;
            const singledata = displaydata.map(singledata=>{
                console.log(singledata);
                // setData(singledata);
            })
        }
        )

    return (
        <div>
            {/* get data from state and show here,remeber to use js via {} */}
        </div>
    );
};

export default Axios;