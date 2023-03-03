import React from 'react';
import {IHeader} from "../../../shared/interfaces/IHeader";
import './Header.css'

const Header = ({name, onClick}: IHeader) => {
  return (
    <div className="header" onClick={onClick}>
      {name}
    </div>
  );
};

export default Header;
