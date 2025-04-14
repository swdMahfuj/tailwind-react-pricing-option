import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const PricingOptions = ({pricingPromise}) => {
    const pricingData = use(pricingPromise)
    console.log(pricingData)
    return (
        <div>
            <h2 className='text-center text-5xl mt-10 underline'>Get Our Membership</h2>
            <div className='grid md:grid-cols-3 gap-8 mt-10'>
                {
                    pricingData.map(pricing=> <PricingCard 
                        key={pricing.id} 
                        pricing={pricing}></PricingCard>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;