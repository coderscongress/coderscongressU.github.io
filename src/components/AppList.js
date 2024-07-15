import React, { useState } from "react";
import MenuList from "./MenuList";
import CategoriesList from "./CategoriesList";
import ItemsListData from "./ItemsListData";
//import logoList from "./logoList.JPG";
import Footer from "./Footer";


const allCategories = ["all", ...new Set(ItemsListData.map((item) => item.category))];

const AppList = () => {
  const [menuItems, setMenuItems] = useState(ItemsListData);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setMenuItems(ItemsListData);
      return;
    }
    const newItems = ItemsListData.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
  <div>
    <main>
      <section className="menu section">
        <div className="title">
        </div>
        <CategoriesList
          categories={categories}
          activeCategory={activeCategory}
          filterItems={filterItems}
        />
        <MenuList items={menuItems} />
      </section>
    </main>
	<Footer/>
	</div>
  );
};

export default AppList;
