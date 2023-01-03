const UserCard =(props) =>{
    return(
    <div className='cart'>
      <h3>Name:{props.name}</h3>
      <p>Age:{props.age}</p>
      <img className='imgs' src={props.img} alt="zurag" />
    </div>
    );
  };


  export default UserCard;