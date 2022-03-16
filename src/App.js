import logo from './logo.svg';
import './App.css';
const name='zilani'
const player={name:"afridi",age:56}
const playerStyle={
  color:"blue",
  backgroundColor:"white"
}

const player2={name:'Afridid',profession:"Cricketer"}
function App() {
  const players=[{name:'sakib',profession:'cricket'},{name:'tanvir',profession:'fotball'},{name:'sakib',profession:'swimming'}]
  // const profession=['cricket','football','cricket','bollyball']
  return (
    <div className="App">
    {players.map(player=>  <Person name={player.name} profession={player.profession}></Person> )}
    
    </div>
  );
}
// for component it is recommended to write the input parameter as pros
function Person(props){
  // we will get object for each call of the Person component
  console.log(props)
  
  return (
  <div className='player'>
    <h1>Name:{props.name}</h1>
    <p>Profession:{props.profession}</p>
  </div>
  );
}

export default App;
