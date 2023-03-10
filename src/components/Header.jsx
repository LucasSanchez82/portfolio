import React from 'react';

const Header = () => {
    return (
        <header>
            <div className='image-lucas' alt="image de lucas sanchez"></div>
            <section>
                <p>Bonjour 👋 je suis </p>
                <section className="animation">
                    <div className="first"><div>Lucas Sanchez</div></div>
                    <div className="second"><div>Futur développeur web</div></div>
                    <div className="third"><div>en recherche de stage</div></div>
                </section>
            </section>
        </header>
    );
};

export default Header;