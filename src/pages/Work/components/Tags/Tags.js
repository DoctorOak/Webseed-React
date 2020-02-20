import React from 'react';
import PropTypes from 'prop-types';

import "./tags.scss";

const Tags = props => {

    if (!props.tags){
        return (
            <ul>

            </ul>
        )
    }
    const listItems = props.tags.map((tag, i) =>
        <li key={i}>#{tag}</li>
    );

    return (
        <div className={"tags"}>
            <h4>Featured Tech:</h4>
            <ul className={'tags-list'}>
                {listItems}
            </ul>
        </div>
    );
};

Tags.propTypes = {
    tags: PropTypes.array
};

export default Tags;
