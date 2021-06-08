import Navbar from "../../components/navbar/Navbar";
import Leftbar from "../../components/leftbar/Leftbar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rigthbar/Rightbar";

import "./home.css";

import React from 'react';

function Home() {
    return (
        <>
            <Navbar />
            <div className="homeContainer">
                <Leftbar />
                <Feed/>
                <Rightbar/>
            </div>
        </>
        
    )
}

export default Home;