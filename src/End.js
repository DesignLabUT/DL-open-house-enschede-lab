import { Routes, Route, useParams } from 'react-router-dom';
import end_nl from './assets/end_nl.png'
import end_en from './assets/end_en.png'
import touch_img from './assets/Arrows-end.png'

import { useNavigate } from "react-router-dom";


function End(props) {
  const navigate = useNavigate();
  console.log(props);

  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + getCookie(cname) + cvalue + ";" + expires + ";path=/";
}


  function next(){
    navigate("/")
    setCookie("answers", props.ans.join(', ')+'|\n', 300)


  }

  return (
    <div className="End">
      <img className="bg" onClick={next} src={props.lan == "en" ? end_en : end_nl}/>
      <img className="touch" onClick={next} src={touch_img}/>

    </div>
  );
}

export default End;
