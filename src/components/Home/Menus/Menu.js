import React from "react";
import SubMenu from './SubMenu';

const Menu = ({ menu }) => {
  return (
    <>
      <h1 className="text-xl mt-8 mb-2 font-bold">{menu?.name}</h1>
      <hr />
      <div className="grid mx-auto  justify-around items-center  grid-cols-2 lg:grid-cols-3">
        {menu?.items?.map((item, index) => (
          <SubMenu key={index} item={item} />
        ))}
      </div>
    </>
  );
};

export default Menu;
