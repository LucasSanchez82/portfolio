import React from 'react';
import Header from './Header';
import Aside from './Aside';
import Content from './Content';
const Home = () => {
    return (
        <div className='App'>
            <Header />
            <Aside />
            <Content />
        </div>
    );
};

export default Home;