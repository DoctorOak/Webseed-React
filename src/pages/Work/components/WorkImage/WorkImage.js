import React from 'react';
import PropTypes from 'prop-types';
import "./work-image.scss";

const WorkImage = props => {
    const screensFolder = props.screensFolder;

    return (
        <div className={"work-image"}>
            <div className={"screen-img screen-1-img"}><img src={screensFolder + "/screen-1.png"} className={"img-fluid"} alt={""} /></div>
            <div className={"screen-img screen-2-img"}><img src={screensFolder + "/screen-2.png"} className={"img-fluid"} alt={""} /></div>
            <div className={"screen-img screen-3-img"}><img src={screensFolder + "/screen-3.png"} className={"img-fluid"} alt={""} /></div>
        </div>
    );
};

WorkImage.propTypes = {
    screensFolder: PropTypes.string.isRequired
};

export default WorkImage;
