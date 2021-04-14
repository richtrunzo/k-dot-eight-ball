import React, {useState} from 'react';
import './App.css';
import Navbar from './Nav'


function App() {
let [question, setQuestion] = useState(false);
let [askedQ, setAskedQ] = useState('');

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
  setAskedQ('')
}

let setAsked = (e: React.FormEvent<HTMLInputElement>) => {
  setAskedQ(e.currentTarget.value)
}



if (question === true) {
  return (
    <>
    <Navbar />
    <div>
      <img></img>
      <p>{askedQ}</p>
      <p>answer</p>
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
        <input onChange={setAsked}></input>
        <button></button>
      </form>
    </div>
    </>
  );
}
}

export default App;
