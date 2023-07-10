import React, { useState } from 'react';
import classNames from 'classnames';
import { ArrowBtn } from 'stories/arrowBtn/ArrowBtn';
import {
  ArrowBtnSmall,
  ArrowBtnSmallDirectionDown,
} from 'stories/arrowBtn/ArrowBtn.stories';

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

  const handleClick = () => setIsOpen(!isOpen);

  return (
    <li className="max-w-[calc(theme(spacing.96)+theme(spacing.96))] w-full  bg-white rounded-sm border-[1px] border-solid border-faqBorder">
      <div className="flex justify-between p-[30px]">
        <h6>{heading}</h6>
        <ArrowBtn
          {...(!isOpen ? ArrowBtnSmall.args : ArrowBtnSmallDirectionDown.args)}
          handleClick={handleClick}
        />
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
