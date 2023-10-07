import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Category = () => {
  const [categories, setCategories] = useState([]);
  console.log(categories);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">BROWSE CATEGORIES</h2>
      {categories.map((category) => (
        <Link
          className="block text-xl font-semibold hover:border-l-4 border-red-500 hover:text-red-500 p-1"
          key={category.id}
          to={`/category/${category.id}`}
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
};

export default Category;
