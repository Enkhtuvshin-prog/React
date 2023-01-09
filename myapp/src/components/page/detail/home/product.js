// import "./content.css";
// const productData = [
//   {
//     categoty: "UX",
//     imageUrl: "../img/Rectangle 124.png",
//     date: "NOV 23 2022",
//     title: "This way is wro",
//     text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni rerum temporibus quod culpa commodi voluptas perspiciatis dolorem quam voluptatem rem, mollitia itaque non odio voluptates!",
//   },
//   {
//     categoty: "UI",
//     imageUrl: "../img/Rectangle 124 (1).png",
//     date: "NOV 23 2022",
//     title: "This way is wro",
//     text: "lorem1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni rerum temporibus quod culpa commodi voluptas perspiciatis dolorem quam voluptatem rem, mollitia itaque non odio voluptates!",
//   },
//   {
//     categoty: "UX",
//     imageUrl: "../img/Rectangle 124.png",
//     date: "NOV 23 2022",
//     title: "This way is wro",
//     text: "lorem1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni rerum temporibus quod culpa commodi voluptas perspiciatis dolorem quam voluptatem rem, mollitia itaque non odio voluptates!",
//   },
//   {
//     categoty: "UI",
//     imageUrl: "../img/Rectangle 124 (1).png",
//     date: "NOV 23 2022",
//     title: "This way is wro",
//     text: "lorem1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni rerum temporibus quod culpa commodi voluptas perspiciatis dolorem quam voluptatem rem, mollitia itaque non odio voluptates!",
//   },
//   {
//     categoty: "Dev",
//     imageUrl: "../img/Rectangle 124.png",
//     date: "NOV 23 2022",
//     title: "This way is wro",
//     text: "lorem1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni rerum temporibus quod culpa commodi voluptas perspiciatis dolorem quam voluptatem rem, mollitia itaque non odio voluptates!",
//   },
//   {
//     categoty: "Dev",
//     imageUrl: "../img/Rectangle 124.png",
//     date: "NOV 23 2022",
//     title: "This way is wro",
//     text: "lorem1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni rerum temporibus quod culpa commodi voluptas perspiciatis dolorem quam voluptatem rem, mollitia itaque non odio voluptates!",
//   },
// ];

let ProductItems = ({ items }) => {
  return (
    <div className="col-6">
      {/* <img className="productImg" src={items.image} alt="" /> */}
      <p> {items.date} </p>
      <h3> {items.title} </h3>
      <p>{items.text}</p>
      <button>READ MORE</button>
    </div>
  );
};

// const Product = () => {
//   return (
//     <div>
//       <div className="row">
//         {productData.map((product, index) => (
//           <ProductItems
//             key={index}
//             img={product.imageUrl}
//             date={product.date}
//             title={product.title}
//             text={product.text}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

export default ProductItems;
