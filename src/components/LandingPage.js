import React from 'react'
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import './LandingPage.css'

function LandingPage() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
        window.location.reload();
    };
    return (
        <div className="text-center">

            <div className="cover-container d-flex h-100 p-3 mx-auto flex-column ">

                <main role="main" className="inner cover mt-5">
                    <h1 className="cover-heading">Landing Page</h1>
                    <p className="lead">If you’re on the hunt for the best and most informative car blogs to provide you with all the latest updates in the automotive world, then you’re in the right place. Here you’ll find the top 55 auto blogs online. Such car blogs are in abundance on the web, but not all of them have all the necessary info that an auto enthusiast finds useful. So we’ve decided to help you out a bit, and present you with the absolute best among all the high-quality auto blogs.
                      Whether you’re a new car enthusiast or an old-timer with plenty of advice to dispense to those who’ve just found their passion in cars, these car blogs can give you the tips, tricks, techniques, and updates about anything automotive.</p>
                    <p className="lead">
                        <a onClick={handleLogout} className="btn btn-lg btn-secondary">Logout</a>
                    </p>
                    <p className="lead">
                        <Link to = "/contact">
                        <a className="btn btn-lg btn-secondary">Contact Page</a>
                        </Link>
                    </p>
                </main>

                <footer className="mastfoot mt-auto">
                    <div className="inner">
                        <p>Made by Pushkal Mondal</p>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default LandingPage