import { useNavigate } from "react-router-dom";
import bg from "./assets/bg.png";
import { useState } from 'react';


function Language(props) {
  const [btnClic, setBtnActive] = useState(-1);
  const navigate = useNavigate();

  function handle_click(lan, btn_id){
    if (btnClic == -1){
      setBtnActive(btn_id)
      props.setLanguage(lan)
      props.setAnswers([lan])
      setTimeout(() => change_page("/q/1"), 500);

    }
  }

  function change_page(page){
    setBtnActive(-1)
    navigate(page)
  }

  return (
    <div className="Language">
      <img className="bg" src={bg}/>
      <div className="content">
        <h2>{props.id}/4</h2>
        <h1><b>NORMALLY, I SPEAK...</b></h1>
        <h1 className="subtitle">OVER HET ALGEMEEN SPREEK IK...</h1>
        <div className="buttons">
          <div onClick={()=> handle_click("en", 0)} className={"btn dark " + (btnClic == 0 ? " clic": "")}>
            <p>ENGLISH</p>
          </div>
          <div onClick={()=> handle_click("nl", 1)} className={"btn " + (btnClic == 1 ? " clic": "")}>
            <p>NEDERLANDS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Language;
