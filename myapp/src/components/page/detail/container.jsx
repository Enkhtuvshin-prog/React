// import React from "react";
import "./container.css";
const blogData = [
  {
    id: "head1",
    title: "BLOG DETAILS H1",
    text: "Just like graphic design and web development, UX design trends come and go for a reason. UX is all about developing a better digital world for humanity. It s a field that requires innovation, but that is constantly evolving. Regularly following UX design blogs can help you keep on top of  changes in the industry, as well as develop your UX skills.Additionally, many UX design blogs expose you to case studies detailing an app or webs successful development, along with how its usability was improved. Reading about these types of   cases can help give you ideas. In this sense, UX design blogs can help provide an indication for the  kinds of directions your future projects should take. Additionally, many UX design blogs expose you to case studies detailing an app or webs successful development, along with how its usability was improved. Reading about these types of cases can help give you ideas. In this sense, UX design blogs can help provide an indication for the kinds of directions your future projects should ",
  },
  {
    id: "head2",
    title: "BLOG DETAILS H2",
    text: "Just like graphic design and web development, UX design trends come and go for a reason. UX is all about developing a better digital world for humanity. It s a field that requires innovation, but that is constantly evolving. Regularly following UX design blogs can help you keep on top of  changes in the industry, as well as develop your UX skills.Additionally, many UX design blogs expose you to case studies detailing an app or webs successful development, along with how its usability was improved. Reading about these types of   cases can help give you ideas. In this sense, UX design blogs can help provide an indication for the  kinds of directions your future projects should take. Additionally, many UX design blogs expose you to case studies detailing an app or webs successful development, along with how its usability was improved. Reading about these types of cases can help give you ideas. In this sense, UX design blogs can help provide an indication for the kinds of directions your future projects should ",
  },
  {
    title: "BLOG DETAILS H3",
    text: "Just like graphic design and web development, UX design trends come and go for a reason. UX is all about developing a better digital world for humanity. It s a field that requires innovation, but that is constantly evolving. Regularly following UX design blogs can help you keep on top of  changes in the industry, as well as develop your UX skills.Additionally, many UX design blogs expose you to case studies detailing an app or webs successful development, along with how its usability was improved. Reading about these types of   cases can help give you ideas. In this sense, UX design blogs can help provide an indication for the  kinds of directions your future projects should take. Additionally, many UX design blogs expose you to case studies detailing an app or webs successful development, along with how its usability was improved. Reading about these types of cases can help give you ideas. In this sense, UX design blogs can help provide an indication for the kinds of directions your future projects should ",
    id: "head3",
  },
];
const TextDetail = (props) => {
  return (
    <div>
      <h1 id={props.id}>{props.title}</h1>
      <p>{props.text}</p>
    </div>
  );
};
const Container = () => {
  return (
    <div>
      <div>
        <img className="DetailImg" src="../img/Rectangle 124.png" alt="" />
      </div>
      <div className="row">
        {blogData.map((x) => (
          <TextDetail id={x.id} title={x.title} text={x.text} />
        ))}
      </div>
    </div>
  );
};

export default Container;
