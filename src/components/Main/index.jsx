import styles from "./styles.module.css";
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const Main = () => {

  const [fName, setfName] = useState('')
  const [lName,setlName] = useState('')
  const [email, setEmail] = useState('')
  const [desc, setdesc] = useState('')
  const [error, setError] = useState('')
  const[submitted, setSubmitted] = useState(false)
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()

    const info = {fName, lName, email, desc}
    
    const response = await fetch('http://ns.gyfo.business/api/auth/contact', {
      method: 'POST',
      body: JSON.stringify(info),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }
    if (response.ok) {
      setError(null)
      setfName('')
      setlName('')
      setEmail('')
      setdesc('')
      setSubmitted(true)
    }

  }



    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
        window.location.reload();
    };

    return (
        <div style={{ "backgroundColor": "#ccecff", "borderRadius": "5px" }} className="container mt-5 col-md-6 p-4 ">
            <form id="contact-form" role="form">
                <h1 className = "mb-5">Contact Us</h1>

                <div className="messages"></div>

                <div className="controls">

                    <div className="row mb-3">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label for="form_name">Firstname *</label>
                                <input onChange={(e) => setfName(e.target.value)} value = {fName} id="form_name" type="text" name="name" className="form-control" placeholder="Please enter your firstname *" required="required" data-error="Firstname is required." />
                                <div className="help-block with-errors"></div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label for="form_lastname">Lastname *</label>
                                <input onChange={(e) => setlName(e.target.value)} value = {lName} id="form_lastname" type="text" name="surname" className="form-control" placeholder="Please enter your lastname *" required="required" data-error="Lastname is required." />
                                <div className="help-block with-errors"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label for="form_email">Email *</label>
                                <input onChange={(e) => setEmail(e.target.value)} value = {email} id="form_email" type="email" name="email" className="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required." />
                                <div className="help-block with-errors"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label for="form_message">Message *</label>
                                <textarea onChange={(e) => setdesc(e.target.value)} value = {desc} id="form_message" name="message" className="form-control" placeholder="Message for me *" rows="4" required="required" data-error="Please, leave us a message."></textarea>
                                <div className="help-block with-errors"></div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <input type="submit" className="btn btn-success btn-send mt-2" value="Send message" onClick={handleSubmit}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Link to = "/" style = {{"textDecoration" : "none" }}>
                            <p className = "lead mt-4" style = {{"textDecoration" : "none" }}>
                                <a style={{ "cursor": "pointer", "color": "black"}}>Back</a>
                            </p>
                            </Link>
                            <p className="text-muted mt-3">
                                <a style={{ "cursor": "pointer", "color": "blue" }} onClick={handleLogout} target="_blank">Logout</a>.</p>
                        </div>
                        {submitted ? <p classNameName = "text-success">Successfully submitted</p> : null}   
                    </div>
                </div>

            </form>
        </div>

    );
};

export default Main;