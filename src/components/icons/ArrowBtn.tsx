import React from 'react';

export const ArrowBtn = () => {
  return (
    <button
      className="h-10 w-10 relative bg-neutral-500 rounded-full cursor-pointer inline-block"
      type="button"
    >
      <div className="absolute w-2 h-1 top-2/4 left-1/2 -translate-y-2/4 -translate-x-2/4 border-b-r-2 border-neutral-100 p-5" />
    </button>
  );
};
