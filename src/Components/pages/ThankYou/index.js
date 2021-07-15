import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../../Footer';
import { GlobalStyle } from '../../Global';
import Navbar from '../../Navbar';

import { Container, NotFound } from './ThankYouElements';

const ThankYou = () => {
    return (
        <>
            <GlobalStyle/>
            <Navbar/>
                <Container>
                    <NotFound>
                        <h1>Jaheim Brown</h1>
                        <h2>Thank You For Your Submission.</h2>
                        <p>Return to <Link to='/'>HomePage.</Link></p>
                    </NotFound>
                </Container>
            <Footer/>
        </>
    )
}

export default ThankYou;
