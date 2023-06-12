import { useNavigate, useParams } from "react-router-dom";
import { useState } from 'react';
import bg from "./assets/bg.png"
import sad_img from "./assets/sad.png"
import happy_img from "./assets/happy.png"

function Question(props) {
  const [btnClic, setBtnActive] = useState(-1);
  const navigate = useNavigate();
  let {nb} = useParams();

  function handle_click(btn_id, target, option){
    if (btnClic == -1){
      setBtnActive(btn_id)
      let arr = props.ans
      console.log(arr.push(option));
      props.setAnswers(arr)
      if (target > 3){
        setTimeout(() => change_page("/end"), 500);

      }
      else{
        setTimeout(() => change_page("/q/" + target), 500);

      }
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
        <h2>{parseInt(nb) + 1}/4</h2>
        <h1><b>{props.questions[props.lan][parseInt(nb)]}</b></h1>
        <div className="buttons">
          <div onClick={()=> handle_click(0, parseInt(nb) + 1, "agree")} className={"btn " + (btnClic == 0 ? " clic": "")}>
            <p>{props.agree[props.lan]}</p>
            <img src={happy_img}/>
          </div>
          <div onClick={()=> handle_click(1,  parseInt(nb) + 1, "disagree")} className={"btn red " + (btnClic == 1 ? " clic": "")}>
            <p>{props.disagree[props.lan]}</p>
            <img src={sad_img}/>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Question;
