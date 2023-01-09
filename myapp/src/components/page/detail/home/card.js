const Card = ({ items }) => {
  return (
    <div className="col-6">
      <img className="productImg" src={items.image} alt="" />
      <p> {items.date} </p>
      <h3> {items.title} </h3>
      <p>{items.text}</p>
      <button>READ MORE</button>
    </div>
  );
};

export default Card;
