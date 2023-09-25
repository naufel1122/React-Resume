import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import myimg from './MyImgEdit2.png';


function Hi() {
    return (<div className="Body">
        <div className="First">
            <div className="white">
                <div className="img">
                    <img src={myimg} alt="" />
                </div>
                <h3>EDUCATION</h3>
                <div className="line"></div>
                <p>Matriculation : </p>
                <p className="school">School Of Knowledge <br />2019</p>
                <p>Intermediate :</p>
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
                <p className="add" >R-641 Block 1 Federal B<br /> Area Sharifabad Karachi</p>
            </div>

            <div className="Black">
                <div className="title">
                    <h1>  Naufel <span> Jeelani</span></h1>
                    <p>FrontEnd Developer (MernStack)</p>
                </div>
                <div className="all-other">
                    <h1>About Me</h1>
                    <div className="line-2"></div>
                    <p>
                        I am a dedicated and highly skilled Frontend Developer with a strong proficiency in the MERN (MongoDB, Express.js, React, Node.js) stack. With a passion for creating intuitive and visually appealing web applications, I am excited to embark on a journey to build responsive, user-centric interfaces that elevate the overall user experience.</p>
                    <h1>Certification</h1>
                    <div className="line-2"></div>
                    <p>I am currently enrolled in SMIT (Saylani Mass IT Training),specializing in MERN STACK Development. I have successfully completed training in HTML5, CSS3, Bootstrap, JavaScript ES6, Express.js, Node.js, Firebse, MongoDB & React</p>
                    <h1>Software Skills</h1>
                    <div className="line-2"></div>
                    <div className="ul">
                        <ul>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>BootStrap</li>
                            <li>JavaScript ES6</li>
                            <li>Express Js</li>
                        </ul>
                        <ul>

                            <li>Node Js</li>
                            <li>React Js</li>
                            <li>FireBase</li>
                            <li>MongoDB</li>
                        </ul>
                    </div>
                </div>
            </div>


        </div>
    </div>)
}
ReactDOM.render(<Hi />, document.querySelector("#root"));