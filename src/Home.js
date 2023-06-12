import { Routes, Route, useParams } from 'react-router-dom';
import home_img from './assets/home.png'
import touch_img from './assets/Arrow-play.png'
import { useNavigate } from "react-router-dom";


function Home(props) {
  const navigate = useNavigate();
  //reset data

  function next(){
    navigate("/lan")
  }

  return (
    <div className="Home">
      <img className="bg" onClick={next} src={home_img}/>
      <img className="touch" onClick={next} src={touch_img}/>
    </div>
  );
}

export default Home;
