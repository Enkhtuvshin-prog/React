import logo from './logo.svg';
import './App.css';
import UserCard from './components/UserCard';

function App() {
  const users =[
    {name: "John", age:15, imageUrl: 'https://images.unsplash.com/photo-1672643074814-487fe349c049?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2669&q=80' },
    {name: "boldo", age:25, imageUrl: 'https://images.unsplash.com/photo-1672627720536-e5c2843b1d7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2273&q=80'},
    {name: "dorjo", age:15, imageUrl: 'https://images.unsplash.com/photo-1672615086113-d7547be45622?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'},
    {name: "Tuvshin", age:35, imageUrl: 'https://cdn-icons-png.flaticon.com/512/5526/5526465.png'},
    {name: "Anu", age:20, imageUrl: 'https://cdn-icons-png.flaticon.com/512/5231/5231019.png'}
  ]
  let sum =0;
  let average = 0;
  // for(let i=0; i<users.length; i++){
  //   sum = sum+ users[i].age;
  // }
  // average = sum/users.length

users.forEach(({age}) =>sum = sum+age);
console.log(sum);
average = sum/users.length
  
  return (
    <div className="App">
      <h2>My web Applications</h2>
      <p>Average age:{average}</p>
      <div className='carts'>
      {
        users.map((user) =>(
          <UserCard name ={user.name} age = {user.age} img ={user.imageUrl}/>
        )
        )
      }

      
    </div>

    </div>
  );
}

export default App;