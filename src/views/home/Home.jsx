import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import ShowElement from '../../views/crud/ShowElement';
import Container from '@mui/material/Container';
import Boarding from "../../components/boarding/Boarding";
import Box from '@mui/material/Box';

export default function Home() {

    return (
        <React.Fragment sx={{
            width: '100%',
        }} >
            <Navbar />
            <Box sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            }}>
                <Boarding />
                <ShowElement />
            </Box>
            <Footer />
        </React.Fragment>
    );
}