import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';
import DaisyPricing from '../DaisyPricing/DaisyPricing';

const PricingOptions = ({pricingPromise}) => {
    const pricingData = use(pricingPromise)
    console.log(pricingData)
    return (
        <div>
            <h2 className='text-center text-5xl mt-10 underline'>Get Our Membership</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-10'>
                {/* {
                    pricingData.map(pricing=> <PricingCard 
                        key={pricing.id} 
                        pricing={pricing}></PricingCard>)
                } */}

                {
                    pricingData.map(pricing=> <DaisyPricing
                    key={pricing.id}
                    pricing={pricing}></DaisyPricing>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;