import React from 'react';

interface IBtnStyles {
  textColor: string | null;
  borderColor: string | null;
  backgroundColor: string | null;
  paddingX: string;
  paddingY: string;
}

export const SignUp = ({ btnStyle }: { btnStyle: IBtnStyles }) => {
  return (
    <button className="border-[1px]">
      <div className="uppercase py-3 px-7">Sing Up</div>
    </button>
  );
};
