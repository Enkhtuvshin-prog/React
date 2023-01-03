 const data = ['PORRTFOLIO', 'BLOG', 'CV', 'STORE', 'FREELANCE', 'ABOUT ME', 'CONTACT']
 const navbar =() =>{
    return (
    <div className="nav">
        <div >
            <img src="/img/Leap.png" alt=""/>
            <img src="./img/Rectangle 114.png" alt=""/>
        </div>
        <div>
            <ul className="nav">
                {data.map((x) =><li>{x}</li>)}
            </ul>

        </div>

    </div>
    )
 }
 export default navbar;