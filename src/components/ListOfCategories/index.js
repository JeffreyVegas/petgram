import { useEffect, useState } from "react";
import { Category } from "../Category";
import { List, Item } from "./styles";
import { useCategoriesData } from "../../hooks/useCategoriesData";

export const ListOfCategories = () => {
  const { categories } = useCategoriesData();
  const [showFixed, setShowFixed] = useState(false);

  const onScroll = (e) => {
    const newShowFixed = window.scrollY > 180;
    setShowFixed(newShowFixed);
  };

  useEffect(() => {
    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {categories.map((category, index) => (
        <Item key={category.id || index}>
          <Category {...category} path={`/pet/${category.id}`} />
        </Item>
      ))}
    </List>
  );

  return (
    <>
      {renderList()}
      {showFixed ? renderList(true) : null}
    </>
  );
};
