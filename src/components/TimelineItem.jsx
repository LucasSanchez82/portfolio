import React from 'react';

const TimelineItem = (props) => {
    return (
        <section>
            <h2>{props.titre}</h2>
            <ul>
                <li>{props.description}</li>
                <li><span>Date</span> {props.date}</li>
                <li><span>Langages</span> {props.langages}</li>
                {/* <li><span>Billeterie</span> <a href="#">Lien</a></li> */}
            </ul>
        </section>
    );
};

export default TimelineItem;