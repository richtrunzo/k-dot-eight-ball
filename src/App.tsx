import {useState} from 'react';
import './App.css';
import Navbar from './Nav'


function App() {
let [question, setQuestion] = useState(false);

let answers = {
  1: '',
  2: '',
  3: '',
  4: '',
  5: '',
  6: '',
  7: '',
  8: ''
}

let images = {
  1: '',
  2: '',
  3: '',
  4: '',
  5: '',
  6: '',
  7: '',
  8: ''
}

let formSubmit = () => {
  setQuestion(true)
}

let restart = () => {
  setQuestion(false)
}



if (question === true) {
  return (
    <>
    <Navbar />
    <div>
      <img></img>
      <p>This is where the 8 ball pops up</p>
      <button onClick={restart}></button>
    </div>
    </>
  )
} else {
  return (
    <>
    <Navbar />
    <div>
      <h1>This is where the question is asked</h1>
      <img></img>
      <form onSubmit={formSubmit} >
        <input></input>
        <button></button>
      </form>
    </div>
    </>
  );
}
}

export default App;
