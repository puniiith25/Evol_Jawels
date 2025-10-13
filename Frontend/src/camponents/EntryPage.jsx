import React from 'react'
import { Diamond, Gem, Sparkles, Star } from 'lucide-react'
import { useNavigate } from 'react-router-dom';

const EntryPage = () => {
    const Navigate = useNavigate();
    return (
        <div className='min-h-screen bg-white relative'>
            <div className='flex  justify-center py-20'>
                <div className='flex flex-col'>
                    <h2 className='flex flex-row text-4xl font-semibold'><span ><Gem className='w-10 h-11 mr-4' /></span><span>Evol Jewels</span></h2>
                    <p className='text-gray-400 '>AI - Powered Personal Jewelry stylist</p>
                </div>
            </div>
            <div className="bg-white p-10 md:p-16 max-w-7xl mx-auto shadow-xl rounded-xl text-center border border-gray-100">
                <div className=''>
                    <div className="flex justify-center mb-6">
                        <div className="p-4 rounded-full border border-gray-300 bg-gray-200">
                            <Sparkles className="w-8 h-8 text-gray-900 " />
                        </div>
                    </div>
                    <h2 className="text-2xl font-semibold mb-3">Discover Your Perfect Style</h2>
                    <p className="text-sm text-gray-600 mb-8">
                        Let our AI analyze 1000+ celebrity jewelry styles to find your perfect match. Get personalized recommendations from our exclusive collection.
                    </p>
                    <button onClick={() => Navigate('/welcome')} className="flex items-center justify-center mx-auto px-10 py-3 bg-gray-900 text-white text-sm font-medium rounded-lg shadow-md hover:bg-gray-700 transition duration-300">
                        <Star className="w-4 h-4 mr-2 fill-white" />
                        Start Your Style Journey
                    </button>


                </div>

            </div>
            <div className='flex justify-between mx-50 my-20'>
                <div>
                    <div className="flex justify-center mb-6">
                        <div className="p-4 rounded-full border border-gray-300 bg-gray-200">
                            <Sparkles className="w-8 h-8 text-gray-900 " />
                        </div>
                    </div>
                    <div className=' text-center'>
                        <h3 className='font-semibold'>
                            Ai Celebrity Analysis
                        </h3>
                        <p className='text-gray-400 max-w-[250px]'>Matches your style with 1000+ celebrity looks</p>
                    </div>
                </div>
                <div>
                    <div className="flex justify-center mb-6">
                        <div className="p-4 rounded-full border border-gray-300 bg-gray-200">
                            <Gem className="w-8 h-8 text-gray-900 " />
                        </div>
                    </div>
                    <div className=' text-center'>
                        <h3 className='font-semibold'>
                            Personal Curation
                        </h3>
                        <p className='text-gray-400 max-w-[250px]'>Handpicked recommandations just for you</p>
                    </div>
                </div>
                <div>
                    <div className="flex justify-center mb-6">
                        <div className="p-4 rounded-full border border-gray-300 bg-gray-200">
                            <Star className="w-8 h-8 text-gray-900 " />
                        </div>
                    </div>
                    <div className=' text-center'>
                        <h3 className='font-semibold'>
                            Expert Styling
                        </h3>
                        <p className='text-gray-400 max-w-[250px]'>Professional stylist insights powered by Ai</p>
                    </div>
                </div>

            </div>
            <div className='text-center text-gray-400'>
                <p>Touch the screen to begin your personalized jewelry discovery</p>
            </div>


        </div>
    )
}

export default EntryPage