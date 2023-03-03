import React from 'react';
import {IMenu} from "../../../shared/interfaces/IMenu";
import './Menu.css'

const Menu = ({config}: IMenu) => {
  return (
    <div className="menu-block">
      {config.map((menu: any) =>
        <div className="button-block" onClick={menu.onClick} key={menu.key}>
          <div className="button-send-icon">
            <img src={menu.img} width="30px" height="30px" alt="menu" />
          </div>
          <div className="button-send-text">{menu.name}</div>
        </div>
      )}
    </div>
  );
};

export default Menu;
