import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({pricing}) => {
    const {name, price, description, features} = pricing;
    return (
        <div className='flex flex-col border bg-blue-300 rounded-2xl p-4'>
            {/* Card header */}
            <div>
                <h1 className='text-5xl text-center'>{name}</h1>
                <h4 className='text-3xl text-center mt-5'>{price}</h4>
            </div>
            {/* Card body */}
            <div className='bg-cyan-300 p-2 rounded-3xl mt-5 flex-1'>
                <p>{description}</p>
                {
                    features.map((feature, index) => <PricingFeature 
                    key={index}
                    feature={feature}></PricingFeature>)
                }
            </div>
            <button className="btn w-full mt-4 bg-black text-white">Subscribe</button>
        </div>
    );
};

export default PricingCard;