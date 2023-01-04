import './navbar.css';

// const linked = [{
//      imageURL: './img/Group 290.png'},
//      {imageURL: './img/Group 291.png'},
//      {imageURL: './img/Group 290.png'},
//     ]

const post =() =>{
    return (
        <div className="row">
            <div className = "col" >
                <h2>Blog Posts</h2>
                <h5>I think so, this is it.</h5>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti aliquam doloribus hic beatae porro nobis ea molestias, natus molestiae a consequatur repudiandae necessitatibus iste veritatis consequuntur veniam provident reprehenderit tempora ad et maiores autem. Ratione omnis facere fugiat? Laudantium voluptate reiciendis repellat molestiae quibusdam iste ut, cumque culpa maiores! Deleniti?</p>
                <div className="linked" >
                    <img src="./img/Group 290.png" alt=""/>
                    <img src="./img/Group 292.png" alt=""/>
                    <img src="./img/Rectangle 116.png" alt=""/>  
                </div>

            </div>
            <div className = "col" >
                <img className="postImg" src="./img/Group 296 (1).png" alt=""/>
            </div>

        </div>
    )
}
export default post;