import React from 'react'
import { makeups } from '../data/data'
import { portfolio } from '../data/data';
const Portfolio = () => {
    return (
        <div className=''>
            {
                portfolio.map((item, index) => (
                    <div key={index} className=''>
                        {
                            Object.entries(item).map(([categoryName, categoryItem]) => (
                                <div key={categoryName} className='grid h-auto w-full content-evenly justify-items-center gap-8 font-body'>
                                    <div className='mt-8 block'>
                                        <div className='text-4xl font-bold capitalize lg:text-5xl'>
                                            {categoryName}
                                        </div>
                                        <hr className='my-4 h-1 bg-two'/>
                                    </div>
                                    <div className='flex flex-wrap justify-center'>
                                        {
                                            categoryItem.map(item => (
                                                <div key={item.image} className='m-8'>
                                                    <img src={item.image} className = 'h-72 w-72 rounded-full object-cover'/>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>

                            ))
                        }
                    </div>
                ))
            }
        </div>
    );
};

export default Portfolio;
