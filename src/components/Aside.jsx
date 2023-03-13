import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Turn as Hamburger } from 'hamburger-react'

const Aside = ({ pages }) => {
    const [isOpen, setIsOpen] = useState(window.innerWidth > 786 ? true : Boolean)
    return (
        <aside>
            {
                <Hamburger size={28} onToggle={toggled => { setIsOpen(toggled) }} />
            }

            {
                isOpen &&
                < ul >
                    <li><Link to={pages.pagePrincipal}>A propos de moi</Link></li>
                    <li><Link to={pages.pageCv}>Mon CV</Link></li>
                    <li><Link to={pages.pageMesProjets}>Mes projets</Link></li>
                </ul>

            }
        </aside >
    );
};

export default Aside;