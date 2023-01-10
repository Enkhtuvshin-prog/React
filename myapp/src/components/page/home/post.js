import "./navbar.css";
const linkedData = [
  { icon: "fa-brands fa-twitter", name: "TWITTER", classNer: "btn-twitter" },
  { icon: "fa-brands fa-linkedin", name: "LINKEDIN", classNer: "btn-linked" },
  { icon: "fa-brands fa-medium", name: "MEDIUM", classNer: "btn-medium" },
];

const handleClick = (name) => {
  alert("Hello" + " " + name);
};

const Linkeds = (props) => {
  return (
    <div className="Btns">
      <button
        className={props.classNer}
        onClick={() => handleClick(props.name)}
      >
        <i className={props.icon}></i>
        {props.name}
      </button>
    </div>
  );
};

const post = () => {
  return (
    <div className="row">
      <div className="col">
        <h2>Blog Posts</h2>
        <h5>I think so, this is it.</h5>
        <p>
          Lorem, vdfgvdffc ipsum dolor sit amet consectetur adipisicing elit.
          Corrupti aliquam doloribus hic beatae porro nobis ea molestias, natus
          molestiae a consequatur repudiandae necessitatibus iste veritatis
          consequuntur veniam provident reprehenderit tempora ad et maiores
          autem. Ratione omnis facere fugiat? Laudantium voluptate reiciendis
          repellat molestiae quibusdam iste ut, cumque culpa maiores! Deleniti?
        </p>
        <div className="linked">
          {linkedData.map((x, index) => (
            <Linkeds
              key={index}
              icon={x.icon}
              name={x.name}
              classNer={x.classNer}
            />
          ))}
        </div>
      </div>
      <div className="col">
        <img className="postImg" src="./img/Group 296 (1).png" alt="" />
      </div>
    </div>
  );
};
export default post;
