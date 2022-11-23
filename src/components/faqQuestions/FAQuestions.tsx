import React from 'react';

export const FAQuestions = ({
  heading,
  textInfoUpper,
  textInfoLower,
}: {
  heading: string;
  textInfoUpper: string;
  textInfoLower: string;
}) => {
  return (
    <div>
      <div className="h-6 w-[calc(theme(spacing.96)+theme(spacing.80)+4px)]">
        <h6>{heading}</h6>
        <button>2</button>
      </div>
      <div>
        <div>{textInfoUpper}</div>
        <div>{textInfoLower}</div>
      </div>
    </div>
  );
};
