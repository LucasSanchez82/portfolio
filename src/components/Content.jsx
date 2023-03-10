import React from 'react';
import { Routes, Route } from 'react-router-dom';

const Content = () => {
    const pagePrincipal = "A-propos-de-moi";
    const pageCv = 'Mon-Cv';
    const pageMesProjets = 'Mes-projets';
    return (
        <div className='content'>
            <Routes>
                <Route path={pagePrincipal} element={<h1>A propos de moi</h1>} />
                <Route path={pageCv} element={<h1>A propos de mon cv</h1>} />
                <Route path={pageMesProjets} element={<h1>A propos de mes projets</h1>} />
            </Routes>
        </div>
    );
};

export default Content;