import { Routes, Route, useParams } from 'react-router-dom';
import home_img from './assets/home.png'
import touch_img from './assets/Arrow-play.png'
import { useNavigate } from "react-router-dom";


function Export(props) {
  const navigate = useNavigate();


  function download(data, filename, type) {
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }, 0);
    }
}

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

download(getCookie("answers").replaceAll('|', '\n'), "test.csv", "text/csv")
  return (
    <div className="Export">
      <h1>Data is beign processed</h1>
    </div>
  );
}

export default Export;
