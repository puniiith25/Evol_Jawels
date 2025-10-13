import React, { useState } from 'react'
import ProgressBar from './ProgressBar'
import { CircleArrowLeftIcon, Sparkles, Star } from 'lucide-react'
import { useNavigate } from 'react-router-dom';

const welcomepage = () => {
    const [ProgressValue, setProgressValue] = useState(16);
    const Navigate = useNavigate();
    return (
        <div className='flex justify-center p-15'>
            <div className='w-[70%]'>
                <div className='mb-20'>
                    <ProgressBar progress={ProgressValue} />
                    <div className='flex justify-between'>
                        <p>Step 1/6</p>
                        <p>Progress {ProgressValue}% </p>
                    </div>
                </div>

                <div className="bg-white p-10 md:p-16 max-w-7xl mx-auto shadow-xl rounded-xl text-center border border-gray-100">
                    <div className=''>

                        <h2 className="text-2xl font-semibold mb-3">Welcome to your personal jewelry discovery Journey</h2>
                        <p className="text-sm text-gray-600 mb-8">
                            Let's find your perfect style match<style></style>
                        </p>
                        <button className="flex items-center justify-center  px-10 py-3 bg-gray-900 text-white text-sm font-medium rounded-lg shadow-md hover:bg-gray-700 transition duration-300">

                            Let's begin!
                        </button>
                        <div className='flex justify-between mt-20'>
                            <button onClick={() => Navigate('/')} className="flex items-center justify-center border-1 border-gray-200  px-3 py-3 text-black text-sm font-medium rounded-lg shadow-md hover:bg-gray-700 transition duration-300">

                                <CircleArrowLeftIcon className='mr-2' /> Back to Home
                            </button>
                            <button onClick={() => Navigate('/style-select')} className="flex items-center justify-center  px-10 py-3 bg-gray-900 text-white text-sm font-medium rounded-lg shadow-md hover:bg-gray-700 transition duration-300">

                                Next
                            </button>
                        </div>


                    </div>

                </div>
            </div>
        </div>
    )
}

export default welcomepage