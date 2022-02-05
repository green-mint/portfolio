import React, { Children } from 'react';

interface Props {}

const Root:React.FC<Props> = ({ children }) => {
  return (
    <div className="m-0 p-4 px-6 lg:px-10 xl:px-16 overflow-y-clip text-slate-200 h-screen bg-gray-800 relative">
      {children}
    </div>
  );
};

export default Root;