import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import menu from "./data";

const categories = ["all", ...new Set(menu.map((item) => item.category))];
function App() {
  const [items, setItems] = useState(menu);
  const handleFilter = (category) => {
    if (category === "all") setItems(menu);
    else {
      const filteredItems = menu.filter((item) => item.category === category);
      setItems(filteredItems);
    }
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} handleFilter={handleFilter} />
        <Menu items={items} />
      </section>
    </main>
  );
}

export default App;
