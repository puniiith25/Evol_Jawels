import React from "react";

const ProgressBar = ({ progress }) => {
   
    
    return (
        <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
            <div
                className="h-4 bg-black transition-all duration-500 ease-in-out"
                style={{ width: `${progress}%` }}
            ></div>
        </div>
    );
};

export default ProgressBar;
