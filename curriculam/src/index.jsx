import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import myimg from './MyImgEdit2.png';
import mail from './mailsvg.svg';
import linkedin from './linkedinsvg.svg';


function Hi() {
    return (<div className="Body">
        <div className="First">
            <div className="white">
                <div className="img">

              <img  src={myimg} alt="" />
                </div>
                <h3>EDUCATION</h3>
                <div className="line"></div>
                <p>Matriculation </p>
                <p className="school">School Of Knowledge <br />2019</p>
                <p>Intermediate</p>
                <p className="college">Govt Degree College <br />2021</p>
                <h3>REFERENCE</h3>
                <div className="line"></div>
                <p className="merit" >On Merit</p>
                
            </div>
            <div className="Black">
            </div>

        </div>
    </div>)
}
ReactDOM.render(<Hi />, document.querySelector("#root"));