import React, {useState} from 'react';
import './App.css';
import Navbar from './Nav'

let replies = ['test',
               'testtest',
               'test3',
               'test4',
               'test5',
               'test6',
               'test7',
               'test8']

let images = ['./images/Damn-album.jpeg',
              './images/k-dot-blue.jpeg',
              './images/k-dot-car.jpeg',
              './images/k-dot-chair.jpeg',
              './images/k-dot-stage.jpeg',
              './images/k-dot-young.jpeg',
              './images/kdot-mic.jpeg',
              './images/tpab-album.jpeg']

interface Answers {
  image: string;
  text: string
}

function Random(answer: Answers, num: number) {
    let objNumber =  Math.floor(Math.random() * num);
    answer.image = images[objNumber]
    answer.text = replies[objNumber]
    return answer
}


function App() {
let [question, setQuestion] = useState(false);
let [askedQ, setAskedQ] = useState('');


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
  let kdot =  {
    image: '',
    text: ''
  }
  let x = Random(kdot, 9)
  console.log(x)

  return (
    <>
    <Navbar />
    <div className="d-flex justify-content-center flex-column">
      <img src={x.image}></img>
      <p>{askedQ}</p>
      <p>{x.text}</p>
      <button onClick={restart}>Ask another question</button>
    </div>
    </>
  )
} else {
  return (
    <>
    <Navbar />
    <div className="d-flex justify-content-center align-items-center flex-column">
      <h1>Ask K-Dot a Question</h1>
      <img src='./images/kdotface.png'></img>
      <form className="mx-auto text-center d-flex align-items-center flex-column " onSubmit={formSubmit} >
        <input onChange={setAsked}></input>
        <button className="btn-primary mt-5"> Submit your Q</button>
      </form>
    </div>
    </>
  );
}
}

export default App;
