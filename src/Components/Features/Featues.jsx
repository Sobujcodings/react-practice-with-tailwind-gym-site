import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'


const Featues = ({feature}) => {
    return (
        <div className='flex items-center px-4 py-1'>
            <CheckCircleIcon className='w-4 h-4 text-purple-700'></CheckCircleIcon>
            <span className='pl-2'>{feature}</span>
        </div>
    );
};

export default Featues;


