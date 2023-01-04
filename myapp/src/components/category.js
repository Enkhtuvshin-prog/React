import './content.css';

const cate = ['All', 'UI Design', 'Product Design', 'Articles', 'Tutorials', 'News']
const Category =() =>{
    return (
        <div>
            <ul className="items" >  
            {
                cate.map((x, index) => <li key={index}><a className="categorys" href="">{x}</a></li>)
            }
            </ul>
        </div>
    )

};
 export default Category;