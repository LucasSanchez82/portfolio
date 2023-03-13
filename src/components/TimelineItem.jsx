import React from 'react';

const TimelineItem = (props) => {
    return (
        <section>
            <h2>{props.titre}</h2>
            <ul>
                <li><span>Description:</span> <br />{props.description}</li>
                <li><span>Date</span> {props.date}</li>
                <li><span>Langages</span> {props.langages}</li>
                {props.lien &&
                    <li><span><a href={props.lien} target="_blank"> Lien </a></span></li>
                }
                {/* <li><span>Billeterie</span> <a href="#">Lien</a></li> */}
            </ul>
        </section>
    );
};

export default TimelineItem;