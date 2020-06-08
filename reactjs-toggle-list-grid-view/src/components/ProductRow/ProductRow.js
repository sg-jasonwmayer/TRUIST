import React from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';



import "./ProductRow.css";


const ProductRow = (props) => {
    let btnClass = classNames('',{
        'thumbnail': props.listView,
        'col-xs-12 col-sm-6 col-md-4 col-lg-3 thumbnail-grid': props.gridView,
    });
    
    return (
        <div className={btnClass}>
            <div className="caption">
               <img src={props.data.avatar} alt={props.data.name} className="avatar-image"/>
                <h4 className="list-group-item-heading">
                    {props.data.name} <br />
                    {props.data.title}
                </h4>
                <p className="list-text-block">
              
                </p>
                <p className="member_biopic">
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
