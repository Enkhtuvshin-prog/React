import "./content.css";
import Menu from "./Menu";
import BtnMenu from "./BtnMenu";
import { useState } from "react";
import Card from "./card";
// import Btn from "../../Btn";

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
    imageUrl: "../img/Rectangle 124.png",
    date: "NOV 23 2022",
    title: "This way is wro",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni rerum temporibus quod culpa commodi voluptas perspiciatis dolorem quam voluptatem rem, mollitia itaque non odio voluptates!",
  },
  {
    category: "UI",
    imageUrl: "../img/Rectangle 124 (1).png",
    date: "NOV 23 2022",
    title: "This way is wro",
    text: "lorem1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni rerum temporibus quod culpa commodi voluptas perspiciatis dolorem quam voluptatem rem, mollitia itaque non odio voluptates!",
  },
  {
    category: "UX",
    imageUrl: "../img/Rectangle 124.png",
    date: "NOV 23 2022",
    title: "This way is wro",
    text: "lorem1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni rerum temporibus quod culpa commodi voluptas perspiciatis dolorem quam voluptatem rem, mollitia itaque non odio voluptates!",
  },
  {
    category: "UI",
    imageUrl: "../img/Rectangle 124 (1).png",
    date: "NOV 23 2022",
    title: "This way is wro",
    text: "lorem1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni rerum temporibus quod culpa commodi voluptas perspiciatis dolorem quam voluptatem rem, mollitia itaque non odio voluptates!",
  },
  {
    category: "Dev",
    imageUrl: "../img/Rectangle 124.png",
    date: "NOV 23 2022",
    title: "This way is wro",
    text: "lorem1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni rerum temporibus quod culpa commodi voluptas perspiciatis dolorem quam voluptatem rem, mollitia itaque non odio voluptates!",
  },
  {
    category: "Dev",
    imageUrl: "../img/Rectangle 124.png",
    date: "NOV 23 2022",
    title: "This way is wro",
    text: "lorem1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni rerum temporibus quod culpa commodi voluptas perspiciatis dolorem quam voluptatem rem, mollitia itaque non odio voluptates!",
  },
];

// let ProductItems = (props) => {
//   return (
//     <div className="col-6">
//       <img className="productImg" src={props.img} alt="" />
//       <p> {props.date} </p>
//       <h3> {props.title} </h3>
//       <p>{props.text}</p>
//       <button>READ MORE</button>
//     </div>
//   );
// };
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
          <BtnMenu key={index} cate={cate} handleClick={handleClick} />
        ))}
      </ul>
      <div className="row">
        {news.map((product) => (
          <Card card = {product}
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
