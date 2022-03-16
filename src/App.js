import logo from './logo.svg';
import './App.css';
const name='zilani'
const player={name:"afridi",age:56}
const playerStyle={
  color:"blue",
  backgroundColor:"white"
}
const player1={name:'Sakib ul hasan',profession:'Cricketer'};
const player2={name:'Afridid',profession:"Cricketer"}
function App() {
  return (
    <div className="App">
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <h2>Another component</h2>
      <Person2></Person2>
      <Person2></Person2>
      <Person2></Person2>
    </div>
  );
}

function Person(){
  return (
  <div className='player'>
    <h1>{player1.name}</h1>
    <p>Profession:{player1.profession}</p>
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
