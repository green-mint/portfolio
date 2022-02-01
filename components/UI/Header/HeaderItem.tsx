import React from "react";

interface Props {
  name: string;
}

const HeaderItem: React.FC<Props> = ({ name }) => {
  return (
    <div className="mx-5 font-fira font-semibold sm:pt-0 pb-3">
      <div className="">
        <p className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-er-green hover:to-er-blue hover:underline-offset-2 hover:cursor-pointer">
          {name}
        </p>
      </div>
    </div>
  );
};

export default HeaderItem;
