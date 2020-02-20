import React from 'react';
import PropTypes from 'prop-types';
import "./tech-item.scss";


const TechItem = props => {
    return (
        <div className={'tech-item'}>
            <div className={'tech-img'}>
                <img className={"img-fluid tech-icon"} src={props.img} alt={""} />
            </div>
            <h4>{props.name}</h4>
        </div>
    );
};

TechItem.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string
};

export default TechItem;
