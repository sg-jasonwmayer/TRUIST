import React from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Avatar from '../../assets/img2.png'

import "./ProductRow.css";


const ProductRow = (props) => {
    let btnClass = classNames('',{
        'thumbnail': props.listView,
        ' col-xs-12 col-sm-6 col-md-4 col-lg-3 thumbnail-grid': props.gridView,
    });
    return (
        <div className={btnClass}>
            <div className="caption">
               <img src={Avatar} alt={props.data.name} className="avatar-image"/>
                <h4 className="group inner list-group-item-heading list-text-block">
                    {props.data.name}
                </h4>
                <p className="group inner list-group-item-text list-group-item-id list-text-block">
                  {props.data.title}
                </p>
                <p className="list-date list-text-block">
                    {props.data.member_biopic}
                </p>
                <p className="published-color" onClick={props.handleGrid}>
                  {props.data.button_text}
                </p>
            </div>
        </div>
    );
};

ProductRow.propTypes = {
    listView: PropTypes.bool,
    gridView: PropTypes.bool,
};

export default ProductRow;
