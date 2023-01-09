import "./content.css";
import Menu from "./Menu";
// import Product from "./product";
import { useState } from "react";
import ProductItems from "./product";
import Card from "./card";
import Btn from "../../../Btn";

const cate = [
  { title: "All", category: "ALL" },
  { title: "UI Design", category: "UI" },
  { title: "Product Design", category: "UX" },
  { title: "Articles", category: "UI" },
  { title: "Tutorials", category: "Dev" },
  { title: "News", category: "Dev" },
];
const productData = [
  {
    category: "UX",
    date: "NOV 23 2022",
    title: "This way is wro",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni rerum temporibus quod culpa commodi voluptas perspiciatis dolorem quam voluptatem rem, mollitia itaque non odio voluptates!",
  },
  {
    category: "UI",
    image: "../img/Rectangle 124 (1).png",
    date: "NOV 23 2022",
    title: "This way is wro",
    text: "lorem1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni rerum temporibus quod culpa commodi voluptas perspiciatis dolorem quam voluptatem rem, mollitia itaque non odio voluptates!",
  },
  {
    category: "UX",
    image: "../img/Rectangle 124.png",
    date: "NOV 23 2022",
    title: "This way is wro",
    text: "lorem1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni rerum temporibus quod culpa commodi voluptas perspiciatis dolorem quam voluptatem rem, mollitia itaque non odio voluptates!",
  },
  {
    category: "UI",
    image: "../img/Rectangle 124 (1).png",
    date: "NOV 23 2022",
    title: "This way is wro",
    text: "lorem1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni rerum temporibus quod culpa commodi voluptas perspiciatis dolorem quam voluptatem rem, mollitia itaque non odio voluptates!",
  },
  {
    category: "Dev",
    image: "../img/Rectangle 124.png",
    date: "NOV 23 2022",
    title: "This way is wro",
    text: "lorem1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni rerum temporibus quod culpa commodi voluptas perspiciatis dolorem quam voluptatem rem, mollitia itaque non odio voluptates!",
  },
  {
    category: "Dev",
    image: "../img/Rectangle 124.png",
    date: "NOV 23 2022",
    title: "This way is wro",
    text: "lorem1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni rerum temporibus quod culpa commodi voluptas perspiciatis dolorem quam voluptatem rem, mollitia itaque non odio voluptates!",
  },
];

const Category = () => {
  const [news, setNews] = useState(productData);
  const handleClick = (category) => {
    const filters = productData.filter((item) => item.category == category);
    console.log("filter: ", filters);
    setNews(filters);
  };
  return (
    <div>
      <ul className="items">
        {cate.map((cate, index) => (
          <Btn key={index} cate={cate} handleClick={handleClick} />
        ))}
      </ul>
      <div className="row">
        {news.map((product, index) => (
          <Card
            key={index}
            items={product}
            // key={index}
            // img={product.imageUrl}
            // date={product.date}
            // title={product.title}
            // text={product.text}
          />
        ))}
      </div>
    </div>
  );
};
export default Category;
