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
  return (
    <div className="App">
      <Person name="Afridi" profession="cricket"></Person>
      <Person name="Skibul hasan" profession="cricket"></Person>
      <Person name="zilnai" profession="football"></Person>
      <h2>Another component</h2>
      <Person2></Person2>
      <Person2></Person2>
      <Person2></Person2>
    </div>
  );
}
// for component it is recommended to write the input parameter as pros
function Person(props){
  // we will get object for each call of the Person component
  console.log(props)
  return (
  <div className='player'>
    <h1>{props.name}</h1>
    <p>Profession:{props.profession}</p>
  </div>
  );
}
function Person2(){
  return (
  <div className='player2'>
    <h1>{player2.name}</h1>
    <p>Profession:{player2.profession}</p>
  </div>
  );
}
export default App;
