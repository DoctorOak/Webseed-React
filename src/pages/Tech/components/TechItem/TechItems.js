import React from 'react';

import "./tech-items.scss"
import {InView} from "react-intersection-observer";

const TechItems = props => {
    return (
        <InView rootMargin={'-200px 0px'} triggerOnce>
            {({ inView, ref }) => (
                <section ref={ref} className={'tech-items ' + ((inView) ? ' in-view ' : '')}>
                    {props.children}
                </section>
            )}
        </InView>
    );
};


export default TechItems;
