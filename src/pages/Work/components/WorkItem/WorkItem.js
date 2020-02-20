import React from 'react';
import PropTypes from 'prop-types';
import {Button} from "react-bootstrap";
import Tags from "../Tags/Tags";

import "./work-item.scss";
import WorkImage from "../WorkImage/WorkImage";
import {InView} from "react-intersection-observer";

const WorkItem = props => {
    const workImg = props.img;
    return (
        <InView rootMargin={'-200px 0px'} triggerOnce>
            {({ inView, ref }) => (
                <article ref={ref} className={"work-item " + ((inView) ? ' in-view ' : '')} style={{backgroundImage: "url('" + workImg + "')"}}>
                    <div className={"image"}>
                        <WorkImage screensFolder={ props.screensFolder }/>
                    </div>
                    <div className={"text"}>
                        <div className={"title"}> <h2>{props.title}</h2> </div>
                        <div className={"content"}>
                            {props.children}
                            <Button variant={"primary"} href={props.url} target={'_blank'}>{((props.buttonText) ? props.buttonText : 'Visit Site')}</Button>
                        </div>
                        <Tags tags={props.tags} />
                    </div>
                </article>
            )}
        </InView>
    );
};

WorkItem.propTypes = {
    img: PropTypes.string.isRequired,
    screensFolder: PropTypes.string.isRequired,
    title: PropTypes.string,
    url: PropTypes.string,
    buttonText: PropTypes.string,
    tags: PropTypes.array
};

export default WorkItem;
