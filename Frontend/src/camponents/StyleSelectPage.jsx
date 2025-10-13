import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from './ProgressBar';
import { CircleArrowLeftIcon } from 'lucide-react';
import { image1, image2, image3, image4 } from '../assets/styleImage';

const styles = [
    { id: 'zendaya', name: 'Zendaya', image: image1 },
    { id: 'ellefanning', name: 'Elle Fanning', image: image2 },
    { id: 'rihanna', name: 'Rihanna', image: image3 },
    { id: 'blakelively', name: 'Blake Lively', image: image4 },
];

const StyleSelectPage = () => {
    const [selectedStyles, setSelectedStyles] = useState([]);
    const navigate = useNavigate();

    const currentStep = 2;
    const totalSteps = 6;
    const progressValue = Math.round((currentStep / totalSteps) * 100);

    const toggleStyle = (id) => {
        setSelectedStyles((prev) =>
            prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
        );
    };

    return (
        <div className="flex justify-center p-10">
            <div className="w-[70%]">
                {/* Progress */}
                <div className="mb-10">
                    <ProgressBar progress={progressValue} />
                    <div className="flex justify-between mt-1">
                        <p>Step {currentStep}/{totalSteps}</p>
                        <p>Progress {progressValue}%</p>
                    </div>
                </div>

                {/* Main Card */}
                <div className="bg-white p-10 md:p-16 max-w-7xl mx-auto shadow-xl rounded-xl text-center border border-gray-100">
                    <h2 className="text-2xl font-semibold mb-3">
                        Welcome to your personal jewelry discovery journey
                    </h2>
                    <p className="text-sm text-gray-600 mb-8">
                        Let's find your perfect style match
                    </p>

                    {/* Jewelry Grid */}
                    <div className="grid grid-cols-2 gap-4 w-[70%] mx-auto mb-8">
                        {styles.map((style) => (
                            <div
                                key={style.id}
                                className={`flex flex-col items-center  border rounded-lg cursor-pointer transition duration-200
                                    ${selectedStyles.includes(style.id) ? 'border-gray-900 bg-gray-50' : 'border-gray-200 hover:border-gray-400'}`}
                                onClick={() => toggleStyle(style.id)}
                            >
                                <img
                                    src={style.image}
                                    alt={style.name}
                                    className="w-full  object-cover rounded-t-md "
                                />
                                <div className="bg-black w-full rounded-b-lg p-2 text-white text-sm font-medium text-center">
                                    {style.name}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-between">
                        <button
                            onClick={() => navigate('/welcome')}
                            className="flex items-center justify-center border border-gray-200 px-3 py-3 text-black text-sm font-medium rounded-lg shadow-md hover:bg-gray-700 transition duration-300"
                        >
                            <CircleArrowLeftIcon className="mr-2" /> Previous
                        </button>

                        <button
                            onClick={() => navigate('/occasion')}
                            className="flex items-center justify-center px-10 py-3 bg-gray-900 text-white text-sm font-medium rounded-lg shadow-md hover:bg-gray-700 transition duration-300"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StyleSelectPage;
