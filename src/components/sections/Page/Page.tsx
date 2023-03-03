import React from 'react';
import {IPage} from "../../../shared/interfaces/IPage";
import './Page.css'

const Page = ({children}:IPage) => {
  return (
    <div className="page">
      {children}
    </div>
  );
};

export default Page;
