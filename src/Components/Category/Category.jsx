import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaStaylinked } from "react-icons/fa";
const Category = () => {
  const [categories, setCategories] = useState([]);
  console.log(categories);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="space-y-2 border-2">
      <div className="bg-black py-2 px-2 text-white flex gap-3 items-center">
        <span>
          <FaStaylinked></FaStaylinked>
        </span>
        <h2 className="tracking-widest   font-semibold ">BROWSE CATEGORIES</h2>
      </div>
      {categories.map((category) => (
        <Link
          className="block hover:border-l-4 border-red-500 hover:text-red-500 pl-2 py-1"
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
