import React, { useState } from 'react';
import classNames from 'classnames';

export const FAQuestions = ({
  heading,
  textInfoUpper,
  textInfoLower,
}: {
  heading: string;
  textInfoUpper: string;
  textInfoLower: string;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // closed - 68px open - 214px
  // h-[calc(theme(spacing.56)-10px)]

  return (
    <li className="w-[calc(theme(spacing.96)+theme(spacing.96))]  bg-primary-100">
      <div className="flex justify-between p-[30px]">
        <h6>{heading}</h6>
        <button type="button" onClick={() => setIsOpen(!isOpen)}>
          2
        </button>
      </div>
      <div
        className={classNames('drop_down_menu', {
          'drop_down_menu--show': isOpen,
          'drop_down_menu--hide': !isOpen,
        })}
      >
        <div>{textInfoUpper}</div>
        <div>{textInfoLower}</div>
      </div>
    </li>
  );
};
