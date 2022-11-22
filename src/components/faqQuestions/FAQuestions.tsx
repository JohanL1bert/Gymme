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
      <div>
        <h3>{heading}</h3>
        <button>2</button>
      </div>
      <div>
        <div>{textInfoUpper}</div>
        <div>{textInfoLower}</div>
      </div>
    </div>
  );
};
