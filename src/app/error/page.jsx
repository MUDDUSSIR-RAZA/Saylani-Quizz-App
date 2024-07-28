import React from 'react';

const error = ({ errorMessage  }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="backdrop-blur-3xl bg-[#ffffff00] rounded-lg shadow-2xl p-16 smm:px-2 smm:py-6">
        <div className="backdrop-blur-3xl bg-white bg-opacity-20 rounded-lg shadow-2xl p-8 max-w-md mx-auto my-auto text-center">
          <ul className="list-disc list-inside text-[#bd3c3cc9] space-y-2">
            <li>{errorMessage || "You Not Have Any Error!!"}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default error;
