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

                    <img src={myimg} alt="" />
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

                <div className="phone">
                    <div className="empty"></div>
                    <div className="contact">
                        <p>Phone</p>
                    </div>
                </div>
                    <a href="tel:+923240539139">+92 324-0539-139</a>
                <div className="Email">
                    <div className="empty"></div>
                    <div className="contact">
                        <p>Email</p>
                    </div>
                </div>
                <a href="mailto:nofil.khan037@gmail.com">Nofil.khan037@gmail.com</a>

                <div className="Github">
                    <div className="empty"></div>
                    <div className="contact">
                        <p>Accounts</p>
                    </div>
                </div>
                <a href="https://accountlinks-150e1.web.app/">Accounts Link </a>
                
                <div className="address">
                    <div className="empty"></div>
                    <div className="contact">
                        <p>Address</p>
                    </div>
                </div>

            </div>
            <div className="Black">
            </div>

        </div>
    </div>)
}
ReactDOM.render(<Hi />, document.querySelector("#root"));