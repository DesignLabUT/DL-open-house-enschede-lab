import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from './Home.js'
import Language from './Language.js'
import Question from './Question.js'
import End from './End.js'
import Export from './Export.js'
import { useState } from 'react';

function App() {
  const [language, setLanguage] = useState("en");
  let agree = {"en": "agree", "nl": "eens"}
  let disagree = {"en": "disagree", "nl": "oneens"}

  const [answers, setAnswers] = useState([]);


  let questions = {
    "en":["Normally, I speak…", "I like living in a smart city full of technological innovations.", "It is important for cities to use digital innovations such as digital twins (3D cities) to conduct research and test ideas.", "I, as a resident of a city, think it is important to have a say in societal challenges in the city."],
    "nl":["Over het algemeen spreek ik…", "Ik woon graag in een slimme stad vol met technologische innovaties.", "Het is belangrijk dat steden digitale innovaties zoals digitale twins (3D steden) inzetten om onderzoek te doen en ideeën te testen.", "Ik, als bewoner van een stad, vind het belangrijk om mee te kunnen denken bij maatschappelijke uitdagingen in de stad."]
  }

  return (
    <div className="App">
    <HashRouter>
      <Routes>
          <Route path="/" element={<Home />} ans={answers} setAnswers={setAnswers}/>
          <Route path="/lan" element={<Language id={1} setLanguage={setLanguage} ans={answers} setAnswers={setAnswers}/>} />
          <Route path="/q/:nb" element={<Question lan={language} agree={agree} disagree={disagree} questions={questions} ans={answers} setAnswers={setAnswers}/>} />
          <Route path="/end" element={<End lan={language}  ans={answers}/>}/>
          <Route path="/export" element={<Export/>}/>

      </Routes>
    </HashRouter>
    </div>
  );
}

export default App;
