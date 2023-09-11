import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import phone from './phone.png';
import mail from './mail.png';
import linkedin from './linkedin.svg';


function Hi() {
    return (<div className="Body">
        <div className="First">
            <div className="white">
                <div className="white-main">
                    <h1>M.Naufel</h1>
                    <p>Frontend Developer </p>
                    <br /><br />
                    <h3>Profile:</h3>
                    <p className="para-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere molestias, facilis doloribus nobis mollitia aspernatur, nihil eum repudiandae numquam corrupti, sint incidunt distinctio totam ipsa quae dicta quibusdam adipisci vel!</p>
                <br />
                   <a href="tel:+923240539139"> +92 324-0539-139 <img src={phone} alt="img" /></a>
                   <a href="mailto:">Nofil.khan037@gmail.com<img src={mail} alt="img" /> </a>
                   <a href="#"> Muhammad Nofil<img src={linkedin} alt="img" /></a>
                </div>
            </div>
            <div className="Black">
                <h1>Jeelani</h1>
            </div>

        </div>
    </div>)
}
ReactDOM.render(<Hi />, document.querySelector("#root"));