import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../../Footer';
import { GlobalStyle } from '../../Global';
import Navbar from '../../Navbar';

import { Container, NotFound } from './404Elements';

const NoPage = () => {
    return (
        <>
            <GlobalStyle/>
            <Navbar/>
                <Container>
                    <NotFound>
                        <h1>404</h1>
                        <h2>Page Not Found!</h2>
                        <p>Return to <Link to='/'>HomePage.</Link></p>
                    </NotFound>
                </Container>
            <Footer/>
        </>
    )
}

export default NoPage;
