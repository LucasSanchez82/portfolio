import React from 'react';
import { Routes, Route } from 'react-router-dom';

const Content = ({ pages, textContent }) => {
    return (
        <div className='content '>
            <Routes>
                <Route path='' element={textContent.pagePrincipal} />
                <Route path={pages.pagePrincipal} element={textContent.pagePrincipal} />
                <Route path={pages.pageCv} element={textContent.pageCv} />
                <Route path={pages.pageMesProjets} element={textContent.pageMesProjets} />
            </Routes>
        </div>
    );
};

export default Content;