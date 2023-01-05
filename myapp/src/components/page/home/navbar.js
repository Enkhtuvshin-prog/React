import "./navbar.css";

const data = [
  "PORRTFOLIO",
  "BLOG",
  "CV",
  "STORE",
  "FREELANCE",
  "ABOUT ME",
  "CONTACT",
];
const navbar = () => {
  return (
    <div className="nav">
      <div>
        <img className="image" src="/img/Leap.png" alt="" />
        <img src="./img/Hire Me.png" alt="" />
      </div>
      <div>
        <ul className="nav">
          {data.map((x, index) => (
            <li className="list" key={index}>
              {x}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default navbar;
