import React, { useEffect, useState } from "react";
import Menu from "./Menu";

const Menus = () => {
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => setMenus(data));
  }, []);
  return (
    <div className=" bg-yellow-50 mx-auto py-12  ">
      <h2 className="text-5xl mb-8 text-center font-bold text-yellow-700">
        OUR MENUS
      </h2>
      <div className="container mx-auto">
        {menus?.slice(0, 3).map((menu, index) => (
          <Menu key={index} menu={menu} />
        ))}
      </div>
    </div>
  );
};

export default Menus;
