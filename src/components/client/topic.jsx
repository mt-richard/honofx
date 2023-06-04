import React from 'react';

const Topic = ({ number, label, disabled }) => {
  const handleHover = () => {
    // Handle hover event if needed
  };

  return (
    <div className="px-3 py-1">
      <div
        className={`flex gap-6 bg-white p-2 border rounded ${disabled ? 'opacity-70' : ''}`}
        onMouseEnter={handleHover}
      >
        <div className={` ${disabled ? 'bg-gray-400' : ''} bg-primary rounded-full h-[35px] w-[35px] flex flex-row items-center justify-center`}>
          <span className="text-white text-[16px] ">{number}</span>
        </div>
        <div className="mt-1">
          <h3 className="text-[20px]">{label}</h3>
        </div>
      </div>
    </div>
  );
};

export default Topic;
