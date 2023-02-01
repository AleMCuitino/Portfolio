import React from "react";
import { Link } from "react-router-dom";
import '../home/Home.css';
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import ShowElement from '../../components/ShowElement';

export default function Home() {

    return (
        <React.Fragment>
            <Navbar />
                <h1>Mi portafolio</h1>
                <ShowElement />
            <Footer />
        </React.Fragment>
    );
}