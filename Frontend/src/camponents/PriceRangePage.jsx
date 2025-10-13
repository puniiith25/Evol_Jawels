import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ProgressBar from './ProgressBar';
import { CircleArrowLeftIcon } from 'lucide-react';

const PriceRangePage = () => {
    const [ProgressValue, setProgressValue] = useState(67);
    const Navigate = useNavigate();
    return (
        <div className='flex justify-center p-15'>
            <div className='w-[70%]'>
                <div className='mb-20'>
                    <ProgressBar progress={ProgressValue} />
                    <div className='flex justify-between'>
                        <p>Step 4/6</p>
                        <p>Progress {ProgressValue}% </p>
                    </div>
                </div>

                <div className="bg-white p-10 md:p-16 max-w-7xl mx-auto shadow-xl rounded-xl text-center border border-gray-100">
                    <div className=''>

                        <h2 className="text-2xl font-semibold mb-3">whats your ideal investment range?</h2>
                        <p className="text-sm text-gray-600 mb-8">
                            Great jewelry is an investment in yourself<style></style>
                        </p>
                        <div className='grid grid-cols-2 gap-4 w-[70%] mx-auto mb-8'>
                            <button className="flex items-center justify-center  px-10 py-5 bg-gray-900 text-white text-sm font-medium rounded-lg shadow-md hover:bg-gray-700 transition duration-300">

                                under ₹30,000

                            </button>
                            <button className="flex items-center justify-center  px-10 py-5 bg-gray-900 text-white text-sm font-medium rounded-lg shadow-md hover:bg-gray-700 transition duration-300">

                                ₹30,000 - ₹50,000
                            </button>
                            <button className="flex items-center justify-center  px-10 py-5 bg-gray-900 text-white text-sm font-medium rounded-lg shadow-md hover:bg-gray-700 transition duration-300">

                                ₹50,000 - ₹80,000
                            </button>
                            <button className="flex items-center justify-center  px-10 py-5 bg-gray-900 text-white text-sm font-medium rounded-lg shadow-md hover:bg-gray-700 transition duration-300">

                                ₹100,000+
                            </button>


                        </div>
                        <div className='flex justify-between mt-20'>
                            <button onClick={() => Navigate('/occasion')} className="flex items-center justify-center border-1 border-gray-200  px-3 py-3 text-black text-sm font-medium rounded-lg shadow-md hover:bg-gray-700 transition duration-300">

                                <CircleArrowLeftIcon className='mr-2' /> Previous
                            </button>
                            <button onClick={() => Navigate('/metals')} className="flex items-center justify-center  px-10 py-3 bg-gray-900 text-white text-sm font-medium rounded-lg shadow-md hover:bg-gray-700 transition duration-300">

                                Next
                            </button>
                        </div>


                    </div>

                </div>
            </div>
        </div>
    )
}

export default PriceRangePage