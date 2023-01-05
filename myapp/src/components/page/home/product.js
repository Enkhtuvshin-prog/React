import "./content.css";
const productData = [
  {
    imageUrl: "../img/Rectangle 124.png",
    date: "NOV 23 2022",
    title: "This way is wro",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni rerum temporibus quod culpa commodi voluptas perspiciatis dolorem quam voluptatem rem, mollitia itaque non odio voluptates!",
  },
  {
    imageUrl: "../img/Rectangle 124 (1).png",
    date: "NOV 23 2022",
    title: "This way is wro",
    text: "lorem1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni rerum temporibus quod culpa commodi voluptas perspiciatis dolorem quam voluptatem rem, mollitia itaque non odio voluptates!",
  },
  {
    imageUrl: "../img/Rectangle 124.png",
    date: "NOV 23 2022",
    title: "This way is wro",
    text: "lorem1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni rerum temporibus quod culpa commodi voluptas perspiciatis dolorem quam voluptatem rem, mollitia itaque non odio voluptates!",
  },
  {
    imageUrl: "../img/Rectangle 124 (1).png",
    date: "NOV 23 2022",
    title: "This way is wro",
    text: "lorem1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni rerum temporibus quod culpa commodi voluptas perspiciatis dolorem quam voluptatem rem, mollitia itaque non odio voluptates!",
  },
  {
    imageUrl: "../img/Rectangle 124.png",
    date: "NOV 23 2022",
    title: "This way is wro",
    text: "lorem1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni rerum temporibus quod culpa commodi voluptas perspiciatis dolorem quam voluptatem rem, mollitia itaque non odio voluptates!",
  },
  {
    imageUrl: "../img/Rectangle 124.png",
    date: "NOV 23 2022",
    title: "This way is wro",
    text: "lorem1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni rerum temporibus quod culpa commodi voluptas perspiciatis dolorem quam voluptatem rem, mollitia itaque non odio voluptates!",
  },
];

let ProductItems = (props) => {
  return (
    <div className="col">
      <img className="productImg" src={props.img} alt="" />
      <p> {props.date} </p>
      <h3> {props.title} </h3>
      <p>{props.text}</p>
      <button>READ MORE</button>
    </div>
  );
};

const Product = () => {
  return (
    <div>
      <div className="row">
        {productData.map((product, index) => (
          <ProductItems
            key={index}
            img={product.imageUrl}
            date={product.date}
            title={product.title}
            text={product.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Product;
