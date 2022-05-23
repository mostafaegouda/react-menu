import React from "react";

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((item) => {
        return (
          <div key={item.id} className="menu-item">
            <img src={item.img} alt="" className="photo" />
            <div className="item-info">
              <header>
                <h4>{item.title}</h4>
                <div className="price">{item.price}</div>
              </header>
              <p className="item-text">{item.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
