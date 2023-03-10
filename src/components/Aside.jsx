import React from 'react';
import { Link } from 'react-router-dom';

const Aside = ({ pages }) => {
    console.log(pages);
    return (
        <aside>
            <ul>
                <li><Link to={pages.pagePrincipal}>A propos de moi</Link></li>
                <li><Link to={pages.pageCv}>Mon CV</Link></li>
                <li><Link to={pages.pageMesProjets}>Mes projets</Link></li>
            </ul>
        </aside>
    );
};

export default Aside;