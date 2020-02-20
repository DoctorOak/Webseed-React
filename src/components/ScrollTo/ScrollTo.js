import React from 'react';
import PropTypes from 'prop-types'
import {withRouter} from "react-router";
import {useHistory} from "react-router-dom";

const ScrollTo = ({ children, selector, smooth = true, style = {}, alignToTop = true, className= '', route = '/', ...props}) => {

    const history = useHistory();

    const ScrollToElement = (e) => {
        e.preventDefault();

        // If the route doesn't match the current path, then we must route to it first.
        if (props.location.pathname !== route){
            history.push(route);
        }

        const behavior = smooth ? 'smooth' : 'instant';
        const options = {behavior};
        // Scroll to top
        if (alignToTop) {
            options.block = 'start';
            options.inline = 'nearest';
        }

        // Because we might have changed the route, we need to ensure the DOM is re-rendered first.
        window.requestAnimationFrame(function() {
            const el = document.querySelector(selector);
            el.scrollIntoView(options);
        });
    };

    return (
        <a href={selector} style={style} className={className} onClick={ScrollToElement}>
            {children}
        </a>
    )


};

ScrollTo.propTypes = {
    selector: PropTypes.string.isRequired,
    smooth: PropTypes.bool,
    style: PropTypes.object,
    alignToTop: PropTypes.bool,
    className: PropTypes.string
};

const ScrollToWithRouter = withRouter(ScrollTo);

export default ScrollToWithRouter;
