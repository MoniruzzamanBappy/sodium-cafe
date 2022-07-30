import React from "react";

const SubMenu = ({item}) => {
  return (
    <>
      <h1>{item?.name}</h1>
      <div className="divider"></div>
      <h1 className="text-right">{item?.price} TK</h1>
    </>
  );
};

export default SubMenu;
