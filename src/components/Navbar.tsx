import React, { useState, useRef } from 'react';
import { SignUp } from '../stories/button/SignUp';
import { Logo } from './logo/Logo';
import { SignUpPrimary, LogInSmall } from 'stories/button/SignUp.stories';
import { navBarText } from 'helpers/navBarInfo';
import classnames from 'classnames';
import { useHideNavBar } from 'helpers/useHideNavBar';

export const Navbar = () => {
  const [toggleLine, setToggleLine] = useState<boolean>(false);
  const navbarMobileHide = useRef<HTMLDivElement>(null);

  useHideNavBar(navbarMobileHide, () => {
    setToggleLine(false);
  });

  const lines = [
    { key: 'line_1', ind: 1 },
    { key: 'line_2', ind: 2 },
    { key: 'line_3', ind: 3 },
  ];

  const toggleMobileMenu = () => {
    setToggleLine(!toggleLine);
  };

  return (
    <div className="bg-neutral-500 w-full min-h-[calc(theme(spacing.20)+2px)] h-full">
      <div
        className={classnames(
          'iPad:py-5 iPad:w-full iPad:h-full mobileSmall:py-5'
        )}
      >
        <nav
          className={classnames(
            `iPad:flex iPad:justify-around iPad:w-full  iPad:items-center
        iPad:h-[calc(theme(spacing.10)+2px)]
        mobile:flex mobile:items-center mobile:justify-between mobile:px-7
        mobileSmall:flex mobileSmall:items-center mobileSmall:justify-between
        mobileSmall:h-[calc(theme(spacing.10)+2px)] mobileSmall:px-7 
        relative`
          )}
        >
          <div className=" mobileSmall:flex items-center justify-center mobileSmall:z-30">
            <Logo />
          </div>

          <div
            className="iPad:hidden mobile:inline-block cursor-pointer hamburger mobileSmall:z-30 "
            onClick={toggleMobileMenu}
            ref={navbarMobileHide}
          >
            {lines.map(({ key, ind }) => {
              return (
                <div
                  key={ind}
                  className={classnames('navbar_line', {
                    [`${key}`]: toggleLine,
                  })}
                />
              );
            })}
          </div>
          <div
            className={classnames(
              `iPad:flex iPad:items-center iPad:justify-evenly  iPad:flex-row iPad:[clip-path:none]
            mobileSmall:container_links iPad:container_links_reset flex-1
            mobileSmall:flex mobileSmall:items-center mobileSmall:flex-col mobileSmall:justify-around mobileSmall:z-20`,
              {
                'mobileSmall:open': toggleLine,
              }
            )}
          >
            <ul
              className={classnames(
                `iPad:flex  iPad:w-full iPad:max-w-[calc(theme(spacing.96)+theme(spacing.36))] iPad:justify-between
              iPad:h-5 iPad:items-center iPad:relative iPad:flex-row iPad:gap-0 iPad:transition-none
              mobileSmall:gap-8 mobileSmall:flex mobileSmall:flex-col mobileSmall:transition-none`,
                { 'mobileSmall:fade_links': toggleLine }
              )}
            >
              {navBarText.map(({ nav, id, anchorLink }) => (
                <li
                  key={id}
                  className={classnames('hover_navbar', {
                    fade_open: toggleLine,
                  })}
                >
                  <a href={anchorLink} className="navbar_link">
                    {nav}
                  </a>
                </li>
              ))}
            </ul>
            <div
              className={classnames(
                `iPad:relative iPad:flex iPad:items-start iPad:h-12 iPad:max-w-[theme(spacing.48)] iPad:w-full
              iPad:gap-[theme(spacing.4)] mobileSmall:transition-none iPad:opacity-100 
              mobileSmall:opacity-0 mobileSmall:flex mobileSmall:gap-8
              mobileSmall:w-[calc(theme(spacing.56)+3px)] mobileSmall:justify-center`,
                {
                  'mobileSmall:opacity-100 [&]:mobileSmall:fade_btn':
                    toggleLine,
                }
              )}
            >
              <SignUp {...LogInSmall.args} />
              <SignUp {...SignUpPrimary.args} />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
