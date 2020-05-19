import React from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import "./App.css";

const ProductRow = (props) => {
    let btnClass = classNames('',{
        'thumbnail': props.listView,
        ' col-xs-12 col-sm-6 col-md-4 col-lg-3 thumbnail-grid': props.gridView,
    });
    return (
        <div className={btnClass}>
            <div className="caption">
                <h4 className="group inner list-group-item-heading list-text-block">
                    {props.data.title}
                </h4>
                <p className="group inner list-group-item-text list-group-item-id list-text-block">
                    <strong>Id:</strong>
                    {props.data.id}
                </p>
                    <p className="published-color">
                        <strong>Status:</strong>
                    {props.data.status}
                </p>
                <p className="list-address list-text-block">
                    <strong>Address:</strong>
                    {props.data.address1}
                    {props.data.address2}
                </p>
                <p className="list-amount list-text-block">
                    <strong>circ:</strong>
                    {props.data.pay_amount}
                    {props.data.pay_type}
                </p>
                <p className="list-date list-text-block">
                    <strong>Started with company:</strong>
                    {props.data.service_date}<br/>
                    {props.data.service_time}
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
